'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useDeferredValue, useState } from 'react'

import { repairDevices, repairIssues, repairPricesByModel } from '@/lib/repairs'

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const repairModels = repairDevices.flatMap((device) =>
  device.brands.flatMap((brand) =>
    brand.models.map((model) => ({
      brand,
      device,
      id: `${device.id}-${brand.id}-${model}`,
      model,
    })),
  ),
)

const getStartingPrice = (modelName: string) => {
  const prices = repairPricesByModel[modelName]

  if (!prices) {
    return 'Sur devis'
  }

  const amounts = prices
    .map(({ price }) => price.match(/\d+(?:[.,]\d+)?/)?.[0])
    .filter((amount): amount is string => Boolean(amount))
    .map((amount) => Number(amount.replace(',', '.')))
    .filter((amount) => Number.isFinite(amount) && amount > 0)

  return amounts.length ? `Dès CHF ${Math.min(...amounts)}` : 'Sur devis'
}

export function RepairSelector() {
  const [query, setQuery] = useState('')
  const [deviceId, setDeviceId] = useState<string | null>(null)
  const [brandId, setBrandId] = useState<string | null>(null)
  const [model, setModel] = useState<string | null>(null)
  const [issue, setIssue] = useState<string | null>(null)
  const [modelQuery, setModelQuery] = useState('')
  const [showAllModels, setShowAllModels] = useState(false)
  const deferredQuery = useDeferredValue(query)
  const selectedDevice = repairDevices.find((device) => device.id === deviceId)
  const selectedBrand = selectedDevice?.brands.find((brand) => brand.id === brandId)
  const isOtherElectronic = deviceId === 'other-electronic'
  const priceOptions = model
    ? isOtherElectronic
      ? [{ label: 'Diagnostic et devis', price: 'Sur devis' }]
      : repairPricesByModel[model] ?? repairIssues.map((label) => ({ label, price: 'Sur devis' }))
    : []
  const searchTerm = normalize(deferredQuery.trim())
  const modelSearchTerm = normalize(modelQuery.trim())
  const matchingBrandModels =
    selectedBrand?.models.filter((modelName) => normalize(modelName).includes(modelSearchTerm)) ?? []
  const visibleBrandModels =
    modelSearchTerm || showAllModels ? matchingBrandModels : matchingBrandModels.slice(0, 24)
  const suggestions = searchTerm
    ? repairModels
        .filter(({ brand, device, model: modelName }) =>
          normalize(`${modelName} ${brand.name} ${device.name}`).includes(searchTerm),
        )
        .slice(0, 7)
    : []

  const chooseDevice = (nextDeviceId: string) => {
    if (nextDeviceId === 'other-electronic') {
      setDeviceId(nextDeviceId)
      setBrandId('other-electronic')
      setModel('Autre appareil électronique')
      setIssue('Diagnostic et devis')
      setModelQuery('')
      setShowAllModels(false)
      window.requestAnimationFrame(() => {
        document.querySelector('#repair-result')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
      return
    }

    setDeviceId(nextDeviceId)
    setBrandId(null)
    setModel(null)
    setIssue(null)
    setModelQuery('')
    setShowAllModels(false)
    window.requestAnimationFrame(() => {
      document.querySelector('#repair-brands')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  const chooseBrand = (nextBrandId: string) => {
    setBrandId(nextBrandId)
    setModel(null)
    setIssue(null)
    setModelQuery('')
    setShowAllModels(false)
    window.requestAnimationFrame(() => {
      document.querySelector('#repair-models')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  const chooseModel = (nextModel: string) => {
    setModel(nextModel)
    setIssue(null)
    window.requestAnimationFrame(() => {
      document.querySelector('#repair-result')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  const chooseSuggestion = (result: (typeof repairModels)[number]) => {
    setDeviceId(result.device.id)
    setBrandId(result.brand.id)
    setModel(result.model)
    setIssue(null)
    setQuery(result.model)
    window.requestAnimationFrame(() => {
      document.querySelector('#repair-result')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  const contactHref = `/contact?appareil=${encodeURIComponent(model ?? '')}&panne=${encodeURIComponent(issue ?? '')}`

  return (
    <>
      <section className="lbp-repair-flow" aria-labelledby="repair-flow-title">
        <div className="lbp-repair-start">
          <p className="lbp-content-eyebrow">Commencez ici</p>
          <h2 className="lbp-brush" id="repair-flow-title">Quel appareil ?</h2>
          <p className="lbp-repair-start-copy">
            Tapez le nom de votre modèle ou choisissez une catégorie. Nous vous guidons pour la suite.
          </p>

          <div className="lbp-repair-searchbox" role="search">
            <label className="lbp-visually-hidden" htmlFor="repair-global-search">
              Rechercher un appareil
            </label>
            <input
              aria-autocomplete="list"
              aria-controls="repair-suggestions"
              autoComplete="off"
              id="repair-global-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ex. iPhone 15, Galaxy S24, Switch..."
              type="search"
              value={query}
            />
            <svg aria-hidden="true" viewBox="0 0 32 32">
              <circle cx="14" cy="14" r="9" />
              <path d="m21 21 7 7" />
            </svg>
            {query.trim() ? (
              <div className="lbp-repair-suggestions" id="repair-suggestions" role="listbox">
                {suggestions.length ? (
                  suggestions.map((result) => (
                    <button
                      aria-selected={false}
                      key={result.id}
                      onClick={() => chooseSuggestion(result)}
                      role="option"
                      type="button"
                    >
                      <span>{result.model}</span>
                      <small>{result.brand.name} · {result.device.name}</small>
                    </button>
                  ))
                ) : (
                  <p>Votre modèle n’apparaît pas ? Pas de souci, apportez-nous l’appareil.</p>
                )}
              </div>
            ) : null}
          </div>

          <p className="lbp-repair-choice-label">Ou choisissez votre appareil</p>

          <div className="lbp-repair-device-grid">
            {repairDevices.map((device) => (
              <button
                aria-pressed={device.id === deviceId}
                className={device.id === deviceId ? 'is-selected' : undefined}
                key={device.id}
                onClick={() => chooseDevice(device.id)}
                type="button"
              >
                <span className="lbp-brush">{device.shortName}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedDevice && !isOtherElectronic ? (
          <div className="lbp-repair-step" id="repair-brands">
            <p className="lbp-repair-step-number">2 · La marque</p>
            <h3 className="lbp-brush">Quelle marque ?</h3>
            <div className="lbp-repair-brand-grid">
              {selectedDevice.brands.map((brand) => (
                <button
                  aria-pressed={brand.id === brandId}
                  className={`${brand.icon ? 'has-icon' : ''} ${
                    brand.id === brandId ? 'is-selected' : ''
                  }`}
                  key={brand.id}
                  onClick={() => chooseBrand(brand.id)}
                  type="button"
                >
                  <span className="lbp-repair-brand-visual">
                    {brand.icon ? (
                      <Image
                        alt=""
                        className="lbp-repair-brand-icon"
                        height={110}
                        src={brand.icon}
                        width={150}
                      />
                    ) : (
                      <span className={`lbp-repair-wordmark lbp-repair-wordmark-${brand.id}`}>
                        {brand.name}
                      </span>
                    )}
                  </span>
                  <span className="lbp-repair-brand-label">
                    {brand.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {selectedBrand && !isOtherElectronic ? (
          <div className="lbp-repair-step" id="repair-models">
            <p className="lbp-repair-step-number">3 · Le modèle</p>
            <h3 className="lbp-brush">Quel modèle ?</h3>
            {selectedBrand.models.length > 12 ? (
              <div className="lbp-repair-model-search">
                <label className="lbp-visually-hidden" htmlFor="repair-model-search">
                  Rechercher un modèle {selectedBrand.name}
                </label>
                <input
                  autoComplete="off"
                  id="repair-model-search"
                  onChange={(event) => setModelQuery(event.target.value)}
                  placeholder={`Rechercher parmi ${selectedBrand.models.length} modèles...`}
                  type="search"
                  value={modelQuery}
                />
                <svg aria-hidden="true" viewBox="0 0 32 32">
                  <circle cx="14" cy="14" r="9" />
                  <path d="m21 21 7 7" />
                </svg>
              </div>
            ) : null}
            <div className="lbp-repair-model-grid">
              {visibleBrandModels.map((modelName) => (
                <button
                  aria-pressed={modelName === model}
                  className={modelName === model ? 'is-selected' : undefined}
                  key={modelName}
                  onClick={() => chooseModel(modelName)}
                  type="button"
                >
                  <span>{modelName}</span>
                  <small>{getStartingPrice(modelName)}</small>
                </button>
              ))}
            </div>
            {!modelSearchTerm && matchingBrandModels.length > visibleBrandModels.length ? (
              <button
                className="lbp-repair-show-models"
                onClick={() => setShowAllModels(true)}
                type="button"
              >
                Afficher les {matchingBrandModels.length} modèles
              </button>
            ) : null}
            {modelSearchTerm && visibleBrandModels.length === 0 ? (
              <p className="lbp-repair-model-empty">Aucun modèle ne correspond à cette recherche.</p>
            ) : null}
            <p className="lbp-repair-missing">
              Modèle absent ? <Link href="/contact">Montrez-nous votre appareil</Link>, nous le regarderons avec vous.
            </p>
          </div>
        ) : null}

        {model ? (
          <div
            className={`lbp-repair-result ${isOtherElectronic ? 'is-other-electronic' : ''}`}
            id="repair-result"
          >
            <p className="lbp-content-eyebrow">
              {isOtherElectronic ? 'Diagnostic en boutique' : `4 · La panne · ${selectedBrand?.name}`}
            </p>
            <h3 className="lbp-brush">{model}</h3>
            <p>
              {isOtherElectronic
                ? 'Apportez-nous votre appareil : nous l’examinerons et vous proposerons un devis avant toute intervention.'
                : 'Choisissez le problème qui ressemble le plus au vôtre. Nous confirmerons la panne et le prix en boutique.'}
            </p>
            <div className="lbp-repair-issue-grid">
              {priceOptions.map((repairIssue) => (
                <button
                  aria-pressed={repairIssue.label === issue}
                  className={repairIssue.label === issue ? 'is-selected' : undefined}
                  key={repairIssue.label}
                  onClick={() => setIssue(repairIssue.label)}
                  type="button"
                >
                  <span>{repairIssue.label}</span>
                  <strong>{repairIssue.price}</strong>
                </button>
              ))}
            </div>
            {!isOtherElectronic ? (
              <p className="lbp-repair-price-note">
                Prix indicatifs, confirmés après diagnostic et selon la disponibilité des pièces.
              </p>
            ) : null}
            <Link
              aria-disabled={!issue}
              className={`lbp-button lbp-button-light ${issue ? '' : 'is-disabled'}`}
              href={issue ? contactHref : '#repair-result'}
            >
              Demander un diagnostic
            </Link>
          </div>
        ) : null}
      </section>
    </>
  )
}
