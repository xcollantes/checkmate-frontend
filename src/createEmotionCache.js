// Returns a cache for the Emotion library used by Material UI. 
//
// createCache allows for low level customization of how styles get 
// inserted by emotion. It’s intended to be used with the <CacheProvider/> 
// component to override the default cache, which is created with 
// sensible defaults for most applications.
import createCache from '@emotion/cache'

// prepend: true moves MUI styles to the top of 
//     the <head> so they're loaded first.
// It allows developers to easily override MUI styles
//     with other styling solutions, like CSS modules.
const clientEmotionCache = () => {
    return createCache({ key: 'css', prepend: true })
}

export default clientEmotionCache