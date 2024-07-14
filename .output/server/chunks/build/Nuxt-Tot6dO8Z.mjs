import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Nuxt",
  __ssrInlineRender: true,
  props: {
    title: { default: "title" },
    description: { default: "description" },
    headline: { default: "headline" }
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => (props.title || "").slice(0, 60));
    const description = computed(() => (props.description || "").slice(0, 200));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col justify-center bg-[#020420]" }, _attrs))}><svg class="absolute right-0 top-0" width="629" height="593" viewBox="0 0 629 593" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_199_94966)"><path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#00DC82"></path></g><defs><filter id="filter0_f_199_94966" x="0.873535" y="-659" width="1255.25" height="1251.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966"></feGaussianBlur></filter></defs></svg><div class="w-[600px] pl-[100px]">`);
      if (_ctx.headline) {
        _push(`<p class="uppercase text-[24px] text-[#00DC82] mb-4 font-semibold">${ssrInterpolate(_ctx.headline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (title.value) {
        _push(`<h1 class="w-[600px] m-0 text-[75px] font-semibold mb-4 text-white flex items-center"><span>${ssrInterpolate(title.value)}</span></h1>`);
      } else {
        _push(`<!---->`);
      }
      if (description.value) {
        _push(`<p class="text-[32px] text-[#E4E4E7] leading-tight">${ssrInterpolate(description.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><svg class="absolute top-[160px] right-[90px]" width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M86.6286 103.106C88.2099 94.7477 94.7477 88.2099 103.106 86.6286L104.427 86.3788C146.343 78.4485 189.386 78.5576 231.262 86.7002L232.272 86.8967C239.615 88.3244 245.4 93.99 246.981 101.301L247.277 102.671C256.565 145.63 256.438 190.092 246.903 232.997C245.361 239.939 239.939 245.361 232.997 246.903C190.092 256.438 145.63 256.565 102.671 247.277L101.301 246.981C93.99 245.4 88.3244 239.615 86.8967 232.272L86.7002 231.262C78.5576 189.386 78.4485 146.343 86.3788 104.426L86.6286 103.106Z" fill="url(#paint0_linear_199_94959)"></path><path d="M86.6286 103.106C88.2099 94.7477 94.7477 88.2099 103.106 86.6286L104.427 86.3788C146.343 78.4485 189.386 78.5576 231.262 86.7002L232.272 86.8967C239.615 88.3244 245.4 93.99 246.981 101.301L247.277 102.671C256.565 145.63 256.438 190.092 246.903 232.997C245.361 239.939 239.939 245.361 232.997 246.903C190.092 256.438 145.63 256.565 102.671 247.277L101.301 246.981C93.99 245.4 88.3244 239.615 86.8967 232.272L86.7002 231.262C78.5576 189.386 78.4485 146.343 86.3788 104.426L86.6286 103.106Z" fill="url(#paint1_radial_199_94959)" fill-opacity="0.06"></path><path d="M103.028 86.2151C94.4994 87.8286 87.8286 94.4994 86.2151 103.028L85.9653 104.348C78.0252 146.318 78.1344 189.414 86.2872 231.342L86.4836 232.353C87.9434 239.86 93.7366 245.776 101.212 247.392L102.582 247.688C145.601 256.989 190.124 256.862 233.089 247.314C240.19 245.736 245.736 240.19 247.314 233.089C256.862 190.124 256.989 145.601 247.688 102.582L247.392 101.212C245.776 93.7366 239.86 87.9434 232.353 86.4836L231.342 86.2872C189.414 78.1344 146.318 78.0252 104.348 85.9653L103.028 86.2151Z" stroke="url(#paint2_linear_199_94959)" stroke-opacity="0.2" stroke-width="0.841584"></path><path d="M86.5693 66.0418C76.1888 68.0728 68.0728 76.1888 66.0418 86.5693L65.7807 87.9041C55.4495 140.708 55.5631 195.024 66.1151 247.784L66.3095 248.756C68.1871 258.144 75.4486 265.527 84.8039 267.561L86.1767 267.86C140.001 279.561 195.755 279.425 249.525 267.477C258.483 265.486 265.485 258.489 267.475 249.53C279.429 195.737 279.558 139.989 267.852 86.1413L267.553 84.7671C265.524 75.4341 258.158 68.19 248.793 66.3169L247.784 66.1151C195.024 55.5631 140.708 55.4495 87.904 65.7807L86.5693 66.0418Z" stroke="url(#paint3_linear_199_94959)" stroke-opacity="0.6" stroke-width="1.7"></path><path d="M66.1749 44.2983C55.2117 46.6476 46.6475 55.2117 44.2983 66.1749L43.1523 71.5228C29.5422 135.037 29.5422 200.713 43.1523 264.227L44.425 270.166C46.7026 280.795 54.917 289.15 65.5055 291.608C132.857 307.243 203.127 307.189 270.477 291.554C280.924 289.129 289.129 280.924 291.554 270.477C307.189 203.127 307.243 132.857 291.608 65.5055C289.15 54.917 280.795 46.7026 270.166 44.425L264.227 43.1523C200.713 29.5422 135.037 29.5422 71.5228 43.1523L66.1749 44.2983Z" stroke="url(#paint4_linear_199_94959)" stroke-opacity="0.4" stroke-width="1.7"></path><path d="M47.0949 24.9846C36.0029 27.3375 27.3375 36.0029 24.9846 47.0949L19.3193 73.8027C5.86738 137.219 5.96967 202.762 19.6195 266.137L25.0028 291.131C27.3518 302.037 35.8106 310.592 46.6894 313.064L67.2583 317.739C134.879 333.107 205.098 332.991 272.667 317.398L291.54 313.043C302.229 310.576 310.576 302.229 313.043 291.54L317.398 272.667C332.991 205.098 333.107 134.879 317.739 67.2583L313.064 46.6894C310.592 35.8106 302.037 27.3518 291.131 25.0028L266.137 19.6195C202.762 5.96966 137.219 5.86738 73.8027 19.3193L47.0949 24.9846Z" stroke="url(#paint5_linear_199_94959)" stroke-opacity="0.2" stroke-width="2.125"></path><path d="M174.667 190.325H203.105C204.009 190.325 204.896 190.084 205.678 189.626C206.461 189.168 207.11 188.509 207.561 187.715C208.013 186.921 208.25 186.021 208.25 185.105C208.25 184.188 208.011 183.288 207.559 182.495L188.461 148.938C188.009 148.145 187.36 147.486 186.578 147.028C185.796 146.57 184.909 146.328 184.006 146.328C183.103 146.328 182.215 146.57 181.433 147.028C180.651 147.486 180.002 148.145 179.551 148.938L174.667 157.524L165.119 140.734C164.668 139.941 164.018 139.282 163.236 138.824C162.453 138.366 161.566 138.125 160.663 138.125C159.76 138.125 158.872 138.366 158.09 138.824C157.308 139.282 156.658 139.941 156.206 140.734L132.441 182.495C131.989 183.288 131.75 184.188 131.75 185.105C131.75 186.021 131.987 186.921 132.439 187.715C132.89 188.509 133.539 189.168 134.322 189.626C135.104 190.084 135.991 190.325 136.895 190.325H154.746C161.819 190.325 167.035 187.173 170.624 181.025L179.337 165.717L184.004 157.524L198.011 182.133H179.337L174.667 190.325ZM154.455 182.124L141.997 182.121L160.671 149.312L169.989 165.717L163.75 176.681C161.367 180.671 158.659 182.124 154.455 182.124Z" fill="#00DC82"></path><path d="M176.761 189.109H203.105H203.106C203.792 189.109 204.467 188.926 205.064 188.576C205.66 188.227 206.158 187.723 206.504 187.113L207.561 187.715L206.504 187.113C206.851 186.504 207.034 185.811 207.034 185.105C207.033 184.399 206.85 183.707 206.502 183.098L206.502 183.097L187.404 149.54L187.404 149.54C187.057 148.93 186.56 148.427 185.963 148.077C185.367 147.728 184.692 147.545 184.006 147.545C183.32 147.545 182.645 147.728 182.048 148.077C181.452 148.427 180.954 148.93 180.608 149.539C180.608 149.539 180.608 149.54 180.608 149.54L175.725 158.126L174.667 159.985L173.61 158.125L164.062 141.336L176.761 189.109ZM176.761 189.109L180.044 183.349H198.011H200.103L199.069 181.531L185.061 156.922L184.005 155.066L182.947 156.922L178.28 165.115L178.28 165.115L169.57 180.417C166.187 186.208 161.362 189.109 154.746 189.109H136.895H136.894C136.208 189.109 135.533 188.926 134.936 188.576C134.34 188.227 133.842 187.723 133.496 187.113L132.44 187.714L133.496 187.113C133.149 186.504 132.966 185.811 132.966 185.105C132.967 184.399 133.15 183.707 133.498 183.098L133.498 183.097L157.263 141.336C157.263 141.336 157.263 141.336 157.263 141.336C157.61 140.727 158.108 140.223 158.705 139.874C159.301 139.525 159.976 139.341 160.663 139.341C161.349 139.341 162.025 139.525 162.621 139.874L163.236 138.824L162.621 139.874C163.218 140.223 163.715 140.727 164.062 141.336L176.761 189.109ZM154.454 183.34H154.455C156.699 183.34 158.653 182.952 160.391 181.953C162.126 180.957 163.533 179.417 164.794 177.305L164.801 177.294L164.807 177.283L171.046 166.318L171.388 165.717L171.047 165.116L161.729 148.711L160.672 146.851L159.614 148.71L140.94 181.52L139.905 183.337L141.997 183.338L154.454 183.34Z" stroke="url(#paint6_linear_199_94959)" stroke-opacity="0.2" stroke-width="2.43271"></path><g filter="url(#filter0_f_199_94959)"><path d="M174.667 190.325H203.105C204.009 190.325 204.896 190.084 205.678 189.626C206.461 189.168 207.11 188.509 207.561 187.715C208.013 186.921 208.25 186.021 208.25 185.105C208.25 184.188 208.011 183.288 207.559 182.495L188.461 148.938C188.009 148.145 187.36 147.486 186.578 147.028C185.796 146.57 184.909 146.328 184.006 146.328C183.103 146.328 182.215 146.57 181.433 147.028C180.651 147.486 180.002 148.145 179.551 148.938L174.667 157.524L165.119 140.734C164.668 139.941 164.018 139.282 163.236 138.824C162.453 138.366 161.566 138.125 160.663 138.125C159.76 138.125 158.872 138.366 158.09 138.824C157.308 139.282 156.658 139.941 156.206 140.734L132.441 182.495C131.989 183.288 131.75 184.188 131.75 185.105C131.75 186.021 131.987 186.921 132.439 187.715C132.89 188.509 133.539 189.168 134.322 189.626C135.104 190.084 135.991 190.325 136.895 190.325H154.746C161.819 190.325 167.035 187.173 170.624 181.025L179.337 165.717L184.004 157.524L198.011 182.133H179.337L174.667 190.325ZM154.455 182.124L141.997 182.121L160.671 149.312L169.989 165.717L163.75 176.681C161.367 180.671 158.659 182.124 154.455 182.124Z" fill="#00DC82"></path><path d="M176.761 189.109H203.105H203.106C203.792 189.109 204.467 188.926 205.064 188.576C205.66 188.227 206.158 187.723 206.504 187.113L207.561 187.715L206.504 187.113C206.851 186.504 207.034 185.811 207.034 185.105C207.033 184.399 206.85 183.707 206.502 183.098L206.502 183.097L187.404 149.54L187.404 149.54C187.057 148.93 186.56 148.427 185.963 148.077C185.367 147.728 184.692 147.545 184.006 147.545C183.32 147.545 182.645 147.728 182.048 148.077C181.452 148.427 180.954 148.93 180.608 149.539C180.608 149.539 180.608 149.54 180.608 149.54L175.725 158.126L174.667 159.985L173.61 158.125L164.062 141.336L176.761 189.109ZM176.761 189.109L180.044 183.349H198.011H200.103L199.069 181.531L185.061 156.922L184.005 155.066L182.947 156.922L178.28 165.115L178.28 165.115L169.57 180.417C166.187 186.208 161.362 189.109 154.746 189.109H136.895H136.894C136.208 189.109 135.533 188.926 134.936 188.576C134.34 188.227 133.842 187.723 133.496 187.113L132.44 187.714L133.496 187.113C133.149 186.504 132.966 185.811 132.966 185.105C132.967 184.399 133.15 183.707 133.498 183.098L133.498 183.097L157.263 141.336C157.263 141.336 157.263 141.336 157.263 141.336C157.61 140.727 158.108 140.223 158.705 139.874C159.301 139.525 159.976 139.341 160.663 139.341C161.349 139.341 162.025 139.525 162.621 139.874L163.236 138.824L162.621 139.874C163.218 140.223 163.715 140.727 164.062 141.336L176.761 189.109ZM154.454 183.34H154.455C156.699 183.34 158.653 182.952 160.391 181.953C162.126 180.957 163.533 179.417 164.794 177.305L164.801 177.294L164.807 177.283L171.046 166.318L171.388 165.717L171.047 165.116L161.729 148.711L160.672 146.851L159.614 148.71L140.94 181.52L139.905 183.337L141.997 183.338L154.454 183.34Z" stroke="url(#paint7_linear_199_94959)" stroke-opacity="0.2" stroke-width="2.43271"></path></g><defs><filter id="filter0_f_199_94959" x="124.176" y="130.551" width="91.6485" height="67.3485" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="3.78713" result="effect1_foregroundBlur_199_94959"></feGaussianBlur></filter><linearGradient id="paint0_linear_199_94959" x1="167.875" y1="74.375" x2="88" y2="261" gradientUnits="userSpaceOnUse"><stop stop-color="#0F172A"></stop><stop offset="1" stop-color="#0F172A" stop-opacity="0"></stop></linearGradient><radialGradient id="paint1_radial_199_94959" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(167.875 167.875) rotate(-90) scale(100.596 107.502)"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><linearGradient id="paint2_linear_199_94959" x1="247.183" y1="96.4978" x2="194.172" y2="229.234" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_199_94959" x1="267.01" y1="78.6537" x2="200.746" y2="244.574" gradientUnits="userSpaceOnUse"><stop stop-color="#00DC82"></stop><stop offset="1" stop-opacity="0"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear_199_94959" x1="292.405" y1="57.8159" x2="209.877" y2="264.463" gradientUnits="userSpaceOnUse"><stop stop-color="#00DC82"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear_199_94959" x1="314.196" y1="40.2232" x2="217.813" y2="281.562" gradientUnits="userSpaceOnUse"><stop stop-color="#00DC82"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint6_linear_199_94959" x1="202.444" y1="144.3" x2="191.546" y2="184.293" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint7_linear_199_94959" x1="202.444" y1="144.3" x2="191.546" y2="184.293" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-og-image/dist/runtime/nuxt/components/Templates/Community/Nuxt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Nuxt-Tot6dO8Z.mjs.map
