import { _ as _export_sfc, d as useUI, e as __nuxt_component_0$2, a as __nuxt_component_0$4 } from './server.mjs';
import { useSSRContext, defineComponent, computed, toRef, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, renderSlot, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { twJoin } from 'tailwind-merge';
import { _ as _sfc_main$3 } from './LandingSection-Drmm2wk1.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'nitropack/dist/runtime/plugin';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingHero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config = computed(() => {
      const container = twJoin(
        "gap-16 sm:gap-y-24",
        props.orientation === "vertical" && "flex flex-col",
        props.orientation === "horizontal" && "grid lg:grid-cols-2 lg:items-center"
      );
      const base = props.orientation === "vertical" ? "text-center" : "";
      const links = twJoin(
        "mt-10 flex flex-wrap gap-x-6 gap-y-3",
        props.orientation === "vertical" && "justify-center"
      );
      return {
        wrapper: "py-24 sm:py-32 md:py-40 relative",
        container,
        base,
        headline: "mb-10",
        title: "text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",
        description: "mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",
        links
      };
    });
    const { ui, attrs } = useUI("landing.hero", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).base)}"${_scopeId}>`);
            if (_ctx.$slots.headline) {
              _push2(`<div class="${ssrRenderClass(unref(ui).headline)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</h1>`);
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
              _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index2) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index2,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).base
              }, [
                _ctx.$slots.headline ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).headline
                }, [
                  renderSlot(_ctx.$slots, "headline")
                ], 2)) : createCommentVNode("", true),
                createVNode("h1", {
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                ((_b = __props.links) == null ? void 0 : _b.length) || _ctx.$slots.links ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index2) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index2,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/landing/LandingHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4" }, _attrs))}><div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"><img src="https://4habe7.p3cdn1.secureserver.net/wp-content/uploads/2023/08/Campus-Exterior_05_1200X500.jpg" alt="Cardinal Stritch University" class="absolute inset-0 h-full w-full object-cover"><svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none"><defs><pattern id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path></pattern></defs><rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%"></rect></svg></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImagePlaceholder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/Faith_08_1200X500-1536x640.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = {
      "title": "Stritch University",
      "description": "",
      "navigation": "False",
      "hero": {
        "title": "Cardinal Stritch University"
      },
      "sections": [
        {
          "title": "GREAT HALL",
          "description": "The Great Hall at Stritch University stands as a testament to the institution's commitment to fostering a vibrant and inclusive community. This grand and elegant space, with its high vaulted ceilings and stunning architectural details, serves as the heart of the university's social and academic life. The hall is adorned with beautiful chandeliers that cast a warm, inviting glow over the polished wooden floors and intricately designed walls.",
          "id": "features",
          "img": "/greathall.png",
          "align": "left"
        },
        {
          "title": "BONAVENTURE HALL",
          "description": "Bonaventure Hall is a cornerstone of Stritch University, embodying the spirit of academic excellence and community engagement. As one of the primary buildings on campus, Bonaventure Hall serves as a central hub for a variety of academic and administrative functions, playing a crucial role in the daily life of our students, faculty, and staff.",
          "align": "right",
          "img": "/BONAVENTUREHALL.png"
        },
        {
          "title": "LIBRARY",
          "description": "Welcome to the Stritch University Library, a vibrant hub of learning and research at the heart of our campus. Our library is dedicated to providing a welcoming and resource-rich environment that supports the academic and personal growth of our students, faculty, and staff.",
          "align": "left",
          "img": "/LIBRARY.png"
        },
        {
          "title": "CAMPUS CENTER",
          "description": "The Campus Center at Stritch University serves as the heart of student life and a central hub for the university community. This vibrant space is designed to foster a sense of belonging and engagement among students, faculty, and staff.",
          "align": "right",
          "img": "/CAMPUSCENTER.png"
        },
        {
          "title": "CONFERENCE CENTER",
          "description": "The Stritch University Conference Center is a premier venue designed to host a wide range of events, from academic conferences and corporate meetings to social gatherings and workshops. Nestled within the picturesque campus of Stritch University, the center offers state-of-the-art facilities, exceptional services, and a serene environment conducive to productive and memorable events.",
          "align": "left",
          "img": "/CONFERENCECENTER.png"
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingHero = _sfc_main$2;
      const _component_ULandingSection = _sfc_main$3;
      const _component_ImagePlaceholder = __nuxt_component_2;
      if (page) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-60d42613>`);
        _push(ssrRenderComponent(_component_ULandingHero, {
          title: page.hero.title,
          ui: { title: "text-3xl font-serif font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" data-v-60d42613${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ULandingSection, { class: "!pt-0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ImagePlaceholder, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ImagePlaceholder)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(page.sections, (section, index2) => {
          _push(ssrRenderComponent(_component_ULandingSection, {
            key: index2,
            title: section.title,
            description: section.description,
            align: section.align
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="container" data-v-60d42613${_scopeId}><img class="image"${ssrRenderAttr("src", section.img)} alt="Cardinal Stritch University" data-v-60d42613${_scopeId}></div>`);
              } else {
                return [
                  createVNode("div", { class: "container" }, [
                    createVNode("img", {
                      class: "image",
                      src: section.img,
                      alt: "Cardinal Stritch University"
                    }, null, 8, ["src"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_ULandingSection, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="container1" data-v-60d42613${_scopeId}><img class="image1"${ssrRenderAttr("src", _imports_0)} alt="Cardinal Stritch University" data-v-60d42613${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "container1" }, [
                  createVNode("img", {
                    class: "image1",
                    src: _imports_0,
                    alt: "Cardinal Stritch University"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60d42613"]]);

export { index as default };
//# sourceMappingURL=index-CV-2LuCD.mjs.map
