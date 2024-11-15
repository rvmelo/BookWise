import {
  differenceInDays,
  differenceInHours,
  differenceInMonths,
  differenceInYears,
} from 'date-fns'

const formatTimeUntilNow = (date: Date | string): string => {
  if (differenceInHours(new Date(), date) < 24) {
    return 'Hoje'
  }

  if (
    differenceInHours(new Date(), date) >= 24 &&
    differenceInDays(new Date(), date) === 1
  ) {
    return 'Ontem'
  }

  if (
    differenceInDays(new Date(), date) > 1 &&
    differenceInDays(new Date(), date) < 30
  ) {
    const days = differenceInDays(new Date(), date)
    return `${Math.round(days)} dias atrás`
  }

  if (
    differenceInDays(new Date(), date) >= 30 &&
    differenceInMonths(new Date(), date) < 12
  ) {
    const months = differenceInMonths(new Date(), date)
    return `${Math.round(months)} ${months > 1 ? 'meses' : 'mês'} atrás`
  }

  if (differenceInMonths(new Date(), date) >= 12) {
    const years = differenceInYears(new Date(), date)
    return `${Math.round(years)} ano${years > 1 ? 's' : ''} atrás`
  }

  return ''
}

export { formatTimeUntilNow }
