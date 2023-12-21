export default function componentStyleOverrides(theme: any) {
  const bgColor = theme.colors?.grey50
  const borderRadius = '8px !important'

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          width: 'auto !important',
          borderRadius: borderRadius,
          // padding: '10px, 16px, 10px, 16px',
          fontSize: '14px'
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          padding: '0px'
        },
        rounded: {
          borderRadius: borderRadius
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '24px',
          borderRadius: borderRadius
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          color: theme.colors?.primaryMain,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline !important'
          }
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '@media (max-width: 767px)': {
            padding: '5px'
          },
          borderRadius: borderRadius
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack
            },
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected
            }
          },

          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: '36px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: borderRadius,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          }
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: borderRadius,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: borderRadius
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: theme.colors?.menuBackgroundPrimary
        },
        thumb: {
          '&:before': {
            background: 'white !important',
            border: '2px solid !important'
          }
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px'
        },
        valueLabel: {
          color: theme?.colors?.primaryLight
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        lineHorizontal: {
          border: '2px solid !important',
          borderColor: theme.colors?.menuBackgroundPrimary + ' !important',
          background: theme.palette?.menuBackgroundPrimary + ' !important'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e0e0e0'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700
        }
      }
    },
    MuiButtonBase: {
      borderRadius: '0 !important',
      styleOverrides: {
        root: {
          '@media (max-width: 767px)': {
            padding: '5px 10px !important'
          }
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        disabled: {
          background: 'red !important'
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          fontSize: '18px'
        },
        separator: {
          fontSize: '18px',
          margin: '0px 16px'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginTop: '16px',
          marginBottom: '4px',
          color: '#344054',
          fontSize: '14px',
          fontWeight: 'bold'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxHeight: 'calc(100% - 30px)',
          maxWidth: '600px',
          margin: '0',
          width: 'calc(100% - 30px)'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1rem !important'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: '4px !important'
        }
      }
    }
  }
}
