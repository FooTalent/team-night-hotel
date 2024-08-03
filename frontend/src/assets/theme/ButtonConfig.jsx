// src/components/atomic/button/ButtonConfig.js
import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonConfig = defineStyleConfig({
  
  variants: {
    filled: {
      fontWeight: 400,
      fontsize:'0.9em',
      color:'primary.800',
      lineHeight: '142%',
      letterSpacing:'0.25px',
      h:'2.5em',
      width:'12em',
      px:'10px',
      fontFamily: "Poppins",
      borderRadius: '100px',
      alignItems:'center',
      transition: 'all 0.2s',
      bg: 'secondary.500',
      color: 'black',

      _hover: {
        bg: 'secondary.400',
       boxShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        opacity: 0.8,
      },
      _active: {
        transform: 'scale(0.98)',
      },
    },
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? 'primary.default' : 'primary.dark',
      color: props.colorMode === 'dark' ? 'Black' : 'white',
      _hover: {
        bg: props.colorMode === 'dark' ? 'yellow.500' : 'primary.default',
      },
     
      borderRadius:'25px',
    }),
    outline: {
      borderRadius:'25px',
      borderColor: 'primary.500',
      bg: 'transparent',
      size:'sm',
      color: 'primary.500',
      _hover: {
        bg: '#6750A414',
        color:'black',
      },
    },
    "with-shadow": (props)=>({
        boxShadow: props.colorMode === 'dark' ? '2px  4px 2px rgba(239, 223, 222, 0.5)' : '2px 4px 2px rgba(0, 0, 0, 0.2)',
        // bg: props.colorMode==='dark'?"primary.default":'primary.dark',
        border:'1px solid',
        borderColor:'primary.default',
        color:props.colorMode==='dark'? "white":'buttonText.default',
        borderRadius:'25px',
        _hover:{
          color:'black',
          bg:props.colorMode==='dark'?"primary.default":'primary.dark',
        },
      }),
        "elevated": (props)=>({
        boxShadow: props.colorMode === 'dark' ? '1px  1px 2px rgba(239, 223, 222, 0.9)' : '1px 1px 2px rgba(0, 0, 0, 0.9)',
         bg: props.colorMode==='dark'?"primary.default":'primary.dark',
      
        color:props.colorMode==='dark'? "white":'buttonText.default',
        borderRadius:'25px',
        _hover:{
          color:'black',
          bg:props.colorMode==='dark'?"primary.default":'primary.dark',
        },

      }),
    
    combined:(props)=>({
      ...ButtonConfig.variants.base,
      ...ButtonConfig.variants.solid(props),
      ...ButtonConfig.variants['with-shadow'](props),
      //...ButtonConfig.variants.ghost,

  }),
  
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 5,
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'filled',
  },
});
