import { m as mergeConfig, i as appConfig, d as useUI, n as useInjectButtonGroup, q as avatar, r as getSlotsChildren, s as __nuxt_component_4, t as nuxtLinkProps, v as getNuxtLinkProps, w as getSlotChildrenText, x as __nuxt_component_0$8, e as __nuxt_component_0$2, l as __nuxt_component_1, a as __nuxt_component_0$4, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, toRef, computed, cloneVNode, h, useSlots, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-img-BOORY6J3.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const avatarGroup = {
  wrapper: "inline-flex flex-row-reverse justify-end",
  ring: "ring-2 ring-white dark:ring-gray-900",
  margin: "-me-1.5 first:me-0"
};
const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    headline: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
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
    const config2 = {
      wrapper: "relative border-b border-gray-200 dark:border-gray-800 py-8",
      container: "flex flex-col lg:flex-row lg:items-center lg:justify-between",
      headline: "mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",
      title: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",
      description: "mt-4 text-lg text-gray-500 dark:text-gray-400",
      icon: {
        wrapper: "flex",
        base: "w-10 h-10 flex-shrink-0 text-primary"
      },
      links: "flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"
    };
    const props = __props;
    const { ui, attrs } = useUI("page.header", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.headline || _ctx.$slots.headline) {
        _push(`<div class="${ssrRenderClass(unref(ui).headline)}">`);
        ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
          _push(`${ssrInterpolate(__props.headline)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col lg:flex-row items-start gap-6">`);
      if (__props.icon || _ctx.$slots.icon) {
        _push(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_UIcon, {
            name: __props.icon,
            class: unref(ui).icon.base
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1"><div class="${ssrRenderClass(unref(ui).container)}"><h1 class="${ssrRenderClass(unref(ui).title)}">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`${ssrInterpolate(__props.title)}`);
      }, _push, _parent);
      _push(`</h1>`);
      if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
        _push(`<div class="${ssrRenderClass(unref(ui).links)}">`);
        ssrRenderSlot(_ctx.$slots, "links", {}, () => {
          _push(`<!--[-->`);
          ssrRenderList(__props.links, (link, index) => {
            _push(ssrRenderComponent(_component_UButton, mergeProps({
              key: index,
              ref_for: true
            }, { ...link, target: link.target || "_blank", color: link.color || "white" }, {
              onClick: link.click
            }), null, _parent));
          });
          _push(`<!--]-->`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.description || _ctx.$slots.description) {
        _push(`<div class="${ssrRenderClass(unref(ui).description)}">`);
        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/page/PageHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PageBody",
  __ssrInlineRender: true,
  props: {
    prose: {
      type: Boolean,
      default: false
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
    const config2 = {
      wrapper: "mt-8 pb-24",
      prose: "prose prose-primary dark:prose-invert max-w-none"
    };
    const props = __props;
    const { ui, attrs } = useUI("page.body", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, __props.prose && unref(ui).prose]
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/page/PageBody.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BlogList",
  __ssrInlineRender: true,
  props: {
    orientation: {
      type: String,
      default: "horizontal"
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
    const config2 = computed(() => {
      const wrapper = {
        horizontal: "flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",
        vertical: "flex flex-col gap-y-16 w-full"
      }[props.orientation];
      return {
        wrapper
      };
    });
    const { ui, attrs } = useUI("blog.list", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/blog/BlogList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    return {
      attrs,
      badgeClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.label)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const avatarConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const avatarGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatarGroup, avatarGroup);
const __nuxt_component_3 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(avatarConfig.size).includes(value);
      }
    },
    max: {
      type: Number,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("avatarGroup", toRef(props, "ui"), avatarGroupConfig, toRef(props, "class"));
    const children = computed(() => getSlotsChildren(slots));
    const max = computed(() => typeof props.max === "string" ? parseInt(props.max, 10) : props.max);
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (!props.max || max.value && index < max.value) {
        if (props.size) {
          vProps.size = props.size;
        }
        vProps.class = node.props.class || "";
        vProps.class = twMerge(twJoin(vProps.class, ui.value.ring, ui.value.margin), vProps.class);
        return cloneVNode(node, vProps);
      }
      if (max.value !== void 0 && index === max.value) {
        return h(__nuxt_component_4, {
          size: props.size || avatarConfig.default.size,
          text: `+${children.value.length - max.value}`,
          class: twJoin(ui.value.ring, ui.value.margin)
        });
      }
      return null;
    }).filter(Boolean).reverse());
    return () => h("div", { class: ui.value.wrapper, ...attrs.value }, clones.value);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BlogPost",
  __ssrInlineRender: true,
  props: {
    ...nuxtLinkProps,
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    date: {
      type: [String, Date],
      default: void 0
    },
    image: {
      type: [String, Object],
      default: void 0
    },
    badge: {
      type: Object,
      default: void 0
    },
    authors: {
      type: Array,
      default: void 0
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
    const slots = useSlots();
    const props = __props;
    const config2 = computed(() => {
      const wrapper = twJoin(
        "relative group flex flex-col w-full gap-y-6",
        props.orientation === "horizontal" && (!!props.image || !!slots.image) ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center" : void 0
      );
      return {
        wrapper,
        image: {
          wrapper: "ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",
          base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
        },
        container: "flex flex-col justify-between flex-1",
        inner: "flex-1",
        badge: {
          wrapper: "mb-3",
          base: ""
        },
        title: "text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",
        description: "text-base text-gray-500 dark:text-gray-400 mt-1",
        date: "text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",
        authors: {
          wrapper: "relative flex items-center gap-x-3 mt-4",
          avatar: {
            base: "relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",
            size: "xs"
          }
        }
      };
    });
    const { ui, attrs } = useUI("blog.post", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const nuxtLinkBind = computed(() => getNuxtLinkProps(props));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Post link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$8;
      const _component_UBadge = __nuxt_component_2;
      const _component_UAvatarGroup = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_4;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.image || _ctx.$slots.image) {
        _push(`<div class="${ssrRenderClass(unref(ui).image.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, () => {
          _push(ssrRenderComponent(_component_NuxtImg, mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
            class: unref(ui).image.base
          }), null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).container)}"><div class="${ssrRenderClass(unref(ui).inner)}">`);
      if (_ctx.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ "aria-label": unref(ariaLabel) }, unref(nuxtLinkBind), {
          class: "focus:outline-none",
          tabindex: "-1"
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.badge || _ctx.$slots.badge) {
        _push(`<div class="${ssrRenderClass(unref(ui).badge.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
          if (__props.badge) {
            _push(ssrRenderComponent(_component_UBadge, mergeProps({ variant: "subtle", ...__props.badge }, {
              class: unref(ui).badge.base
            }), null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.title || _ctx.$slots.title) {
        _push(`<h2 class="${ssrRenderClass(unref(ui).title)}">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          _push(`${ssrInterpolate(__props.title)}`);
        }, _push, _parent);
        _push(`</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description || _ctx.$slots.description) {
        _push(`<div class="${ssrRenderClass(unref(ui).description)}">`);
        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (((_a = __props.authors) == null ? void 0 : _a.length) || __props.date) {
        _push(`<div class="${ssrRenderClass(unref(ui).authors.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "authors", {}, () => {
          var _a2;
          if ((_a2 = __props.authors) == null ? void 0 : _a2.length) {
            _push(ssrRenderComponent(_component_UAvatarGroup, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.authors, (author, index) => {
                    _push2(ssrRenderComponent(_component_UAvatar, mergeProps({
                      key: index,
                      alt: author.name,
                      class: unref(ui).authors.avatar.base,
                      ref_for: true
                    }, { size: unref(ui).authors.avatar.size, ...author.avatar }), {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          if (author.to) {
                            _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({ ref_for: true }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                              class: "focus:outline-none",
                              tabindex: "-1"
                            }), {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`<span class="absolute inset-0" aria-hidden="true"${_scopeId3}></span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "absolute inset-0",
                                      "aria-hidden": "true"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                        } else {
                          return [
                            author.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                              key: 0,
                              ref_for: true
                            }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                              class: "focus:outline-none",
                              tabindex: "-1"
                            }), {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "absolute inset-0",
                                  "aria-hidden": "true"
                                })
                              ]),
                              _: 2
                            }, 1040)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                      return openBlock(), createBlock(_component_UAvatar, mergeProps({
                        key: index,
                        alt: author.name,
                        class: unref(ui).authors.avatar.base,
                        ref_for: true
                      }, { size: unref(ui).authors.avatar.size, ...author.avatar }), {
                        default: withCtx(() => [
                          author.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                            key: 0,
                            ref_for: true
                          }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                            class: "focus:outline-none",
                            tabindex: "-1"
                          }), {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "absolute inset-0",
                                "aria-hidden": "true"
                              })
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040, ["alt", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "date", {}, () => {
          if (__props.date) {
            _push(`<time${ssrRenderAttr("datetime", new Date(__props.date).toISOString())} class="${ssrRenderClass(unref(ui).date)}">${ssrInterpolate(__props.date)}</time>`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/components/blog/BlogPost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "major",
  __ssrInlineRender: true,
  setup(__props) {
    const page = {
      "title": "Majors"
    };
    const posts = [
      {
        "title": "EDUCATION",
        "description": "The Education program at Stritch University is committed to developing compassionate, knowledgeable, and innovative educators who are prepared to make a positive impact in diverse educational settings. Our program emphasizes a holistic approach to teaching and learning, combining rigorous academic coursework with practical, real-world experience.",
        "image": {
          "src": "/education.png"
        }
      },
      {
        "title": "NURSING",
        "description": "The Nursing program at Stritch University is dedicated to preparing compassionate and skilled nursing professionals who are ready to meet the healthcare needs of diverse populations. Our program combines rigorous academic coursework with hands-on clinical experience, ensuring that our graduates are well-equipped to excel in the dynamic and rapidly evolving field of healthcare.",
        "image": {
          "src": "/nursing.png"
        }
      },
      {
        "title": "THEATER",
        "description": "Welcome to the Theater Program at Stritch University, where creativity, passion, and talent come together to create transformative theatrical experiences. Our program is designed to provide students with a comprehensive education in the performing arts, combining rigorous academic coursework with extensive hands-on experience.",
        "image": {
          "src": "/theater.png"
        }
      },
      {
        "title": "BUSSINESS",
        "description": "Welcome to the Business Program at Stritch University, where we prepare the next generation of business leaders and innovators. Our program is designed to provide students with a comprehensive understanding of the business world, combining theoretical knowledge with practical skills to ensure success in today's dynamic and competitive environment.",
        "image": {
          "src": "/bussiness.png"
        }
      },
      {
        "title": "LAW",
        "description": "Welcome to the Law Program at Stritch University, where we are dedicated to cultivating the next generation of legal professionals who are committed to justice, integrity, and service. Our comprehensive and rigorous curriculum is designed to provide students with a deep understanding of the law, critical thinking skills, and practical experience necessary to excel in the legal field.",
        "image": {
          "src": "/law.png"
        }
      },
      {
        "title": "PSYCHOLOGY",
        "description": "The Psychology program at Stritch University offers a comprehensive and dynamic curriculum designed to provide students with a deep understanding of human behavior, mental processes, and psychological principles. Our program is dedicated to fostering intellectual curiosity, critical thinking, and a passion for helping others, preparing students for a wide range of careers and advanced studies in psychology and related fields.",
        "image": {
          "src": "/psychology.png"
        }
      },
      {
        "title": "ART",
        "description": "The Art program at Stritch University is designed to cultivate creativity, critical thinking, and technical skills in students who are passionate about the visual arts. Our comprehensive curriculum offers a balanced blend of traditional techniques and contemporary practices, preparing students for a dynamic and evolving artistic landscape.",
        "image": {
          "src": "/art.png"
        }
      },
      {
        "title": "COMMUNICATION",
        "description": "The Communication program at Stritch University is designed to equip students with the skills and knowledge necessary to excel in a rapidly evolving media landscape. Our program emphasizes both the theoretical foundations and practical applications of communication, preparing graduates for diverse careers in media, public relations, corporate communication, journalism, and more.",
        "image": {
          "src": "/communication.png"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$2;
      const _component_UPageHeader = _sfc_main$5;
      const _component_UPageBody = _sfc_main$4;
      const _component_UBlogList = _sfc_main$3;
      const _component_UBlogPost = _sfc_main$1;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, mergeProps(page, { class: "py-[50px]" }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBlogList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(posts, (post, index) => {
                          _push4(ssrRenderComponent(_component_UBlogPost, {
                            key: index,
                            title: post.title,
                            description: post.description,
                            image: post.image,
                            orientation: index === 0 ? "horizontal" : "vertical",
                            class: [index === 0 && "col-span-full"],
                            ui: { description: "line-clamp-2" }
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(posts, (post, index) => {
                            return createVNode(_component_UBlogPost, {
                              key: index,
                              title: post.title,
                              description: post.description,
                              image: post.image,
                              orientation: index === 0 ? "horizontal" : "vertical",
                              class: [index === 0 && "col-span-full"],
                              ui: { description: "line-clamp-2" }
                            }, null, 8, ["title", "description", "image", "orientation", "class"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBlogList, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(posts, (post, index) => {
                          return createVNode(_component_UBlogPost, {
                            key: index,
                            title: post.title,
                            description: post.description,
                            image: post.image,
                            orientation: index === 0 ? "horizontal" : "vertical",
                            class: [index === 0 && "col-span-full"],
                            ui: { description: "line-clamp-2" }
                          }, null, 8, ["title", "description", "image", "orientation", "class"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHeader, mergeProps(page, { class: "py-[50px]" }), null, 16),
              createVNode(_component_UPageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_UBlogList, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(posts, (post, index) => {
                        return createVNode(_component_UBlogPost, {
                          key: index,
                          title: post.title,
                          description: post.description,
                          image: post.image,
                          orientation: index === 0 ? "horizontal" : "vertical",
                          class: [index === 0 && "col-span-full"],
                          ui: { description: "line-clamp-2" }
                        }, null, 8, ["title", "description", "image", "orientation", "class"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/major.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=major-BE7e55Vq.mjs.map
