import { styled } from '@/styles/stitches.config'

export const NavigationItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
  gap: '1rem',
})

export const ItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
  gap: '0.75rem',

  span: {
    fontSize: '1rem',
    color: '$gray400',
  },

  svg: {
    color: '$gray400',
  },

  '&:hover': {
    cursor: 'pointer',

    span: {
      color: '$gray100',
    },

    svg: {
      color: '$gray100',
    },
  },

  variants: {
    isSelected: {
      true: {
        span: {
          fontWeight: '$bold',
          color: '$gray100',
        },
        svg: {
          color: '$gray100',
        },
      },
    },
  },
})

export const SelectedBar = styled('div', {
  width: '4px',
  height: '1.5rem',

  borderRadius: 999,

  background: 'transparent',

  variants: {
    isSelected: {
      true: {
        background: 'linear-gradient(90deg, #7FD1CC, #9694F5)',
      },
    },
  },
})
