const Order = {
  NONE: 'NONE',
  ASC: 'ASC',
  DESC: 'DESC'
}

function getIconForOrder (order) {
  switch (order) {
    case Order.ASC:
      return 'arrow-up'
    case Order.DESC:
      return 'arrow-down'
    default:
      return 'arrow-down'
  }
}

function getIconForStatus (status) {
  switch (status) {
    case 'OK':
      return 'tick-circle'
    default:
      return 'error'
  }
}

function getColorForStatus (status) {
  switch (status) {
    case 'OK':
      return 'success'
    default:
      return 'danger'
  }
}

function formatFloat (val, fixed) {
  if (!Number.isInteger(fixed)) {
    fixed = 2
  }

  return Number.parseFloat(val).toFixed(fixed)
}

function formatNano (val) {
  return Number.parseFloat(val / 1000000).toFixed(2)
}

function pretty (value) {
  let v = value
  if (typeof v === 'string') {
    v = JSON.parse(value)
  }
  return JSON.stringify(v, null, 2)
}

module.exports = {
  getIconForOrder,
  getIconForStatus,
  getColorForStatus,
  Order,
  formatFloat,
  formatNano,
  pretty
}