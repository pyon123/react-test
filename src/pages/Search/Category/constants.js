export const FilterTypes = {
  sort: 'sortBy',
  type: 'type'
}

export const SORTS = {
  type: FilterTypes.sort,
  prefix: 'Sort by',
  items: [
    {
      label: 'Date added',
      value: 'date',
    },
    {
      label: 'Highest price',
      value: 'hPrice',
    },
    {
      label: 'Lowest price',
      value: 'lPrice',
    },
  ]
}

export const TYPES = {
  type: FilterTypes.type,
  prefix: 'Type',
  items: [
    {
      label: 'Appartment',
      value: 'appartment',
    },
    {
      label: 'Villa',
      value: 'villa',
    },
    {
      label: 'Townhouse',
      value: 'townhouse',
    },
  ]
}