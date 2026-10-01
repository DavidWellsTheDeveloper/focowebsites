/**
 * Web3Forms' client script scans for [data-captcha="true"] once when it runs at
 * parse time. On a client-side route the form does not exist yet at that point,
 * so the captcha never gets initialised. Re-dispatching their script tag forces
 * the scan to run again now that the div is in the DOM.
 */
export function useWeb3FormsCaptcha() {
  const { web3formsAccessKey } = useRuntimeConfig().public

  if (!web3formsAccessKey) return

  onMounted(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://web3forms.com/client/script.js"]',
    )
    if (!existing) return

    const re = document.createElement('script')
    re.src = existing.src
    re.async = true
    re.defer = true
    document.body.appendChild(re)
  })
}
