import { f as useState, u as useToast, b as _sfc_main$6, a as __nuxt_component_0$4 } from './server.mjs';
import { _ as _sfc_main$1 } from './LandingSection-Drmm2wk1.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4, s as supabase } from './supabase-BV0SOpkw.mjs';
import { defineComponent, reactive, ref, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { object, string } from 'yup';
import { useRouter } from 'vue-router';
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
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@supabase/supabase-js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inquery",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const recorddeatil = useState("recorddeatil");
    const schema = object({
      name: string().required("Required"),
      id: string().required("Required")
    });
    const state = reactive({
      name: void 0,
      id: void 0
    });
    const toast = useToast();
    const record = ref([]);
    function replaceSpacesWithHyphens(input) {
      return input.replace(/ /g, "_");
    }
    async function getrecord(id) {
      const { data } = await supabase.from("stritch").select().eq("id", id);
      record.value = data;
      console.log(record.value[0], "312312312");
      if (record.value.length > 0) {
        toast.add({ title: "Inquery Success!!" });
        recorddeatil.value = JSON.stringify(
          {
            datebirth: record.value[0].datebirth,
            dateofattendence: record.value[0].dateofattendence,
            dateofgraduation: record.value[0].dateofgraduation,
            degree: record.value[0].degree,
            gender: record.value[0].gender,
            gpa: record.value[0].gpa,
            id: record.value[0].id,
            imgperson: record.value[0].imgperson,
            imgscore: record.value[0].imgscore,
            major: record.value[0].major,
            name: record.value[0].name,
            nationality: record.value[0].nationality,
            registrationnumber: record.value[0].registrationnumber,
            totalcredits: record.value[0].totalcredits
          }
        );
        router.push(`/record/${replaceSpacesWithHyphens(record.value[0].name)}`);
      } else {
        toast.add({ title: "Inquery Failed. No data!!" });
      }
    }
    async function onSubmit(event) {
      const id = event.data.id;
      getrecord(id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$6;
      const _component_ULandingSection = _sfc_main$1;
      const _component_UForm = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_0$4;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULandingSection, { class: "!pt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="container1"${_scopeId2}><img class="image1" src="https://4habe7.p3cdn1.secureserver.net/wp-content/uploads/2023/08/Campus-Exterior_05_1200X500.jpg" alt="Cardinal Stritch University"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "overlay",
                    schema: unref(schema),
                    state: unref(state),
                    onSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1${_scopeId3}>Check your degree here</h1>`);
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Name",
                          name: "name",
                          ui: { label: {
                            wrapper: "flex content-center items-center justify-between",
                            base: "block font-medium text-white dark:text-white-200",
                            required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                          } }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                placeholder: "Enter your name",
                                style: { "width": "20rem" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  modelValue: unref(state).name,
                                  "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                  placeholder: "Enter your name",
                                  style: { "width": "20rem" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "ID",
                          name: "id",
                          ui: { label: {
                            wrapper: "flex content-center items-center justify-between",
                            base: "block font-medium text-white dark:text-white-200",
                            required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                          } }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                modelValue: unref(state).id,
                                "onUpdate:modelValue": ($event) => unref(state).id = $event,
                                placeholder: "Enter your ID",
                                style: { "width": "20rem" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  modelValue: unref(state).id,
                                  "onUpdate:modelValue": ($event) => unref(state).id = $event,
                                  placeholder: "Enter your ID",
                                  style: { "width": "20rem" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UButton, { type: "submit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Inquery`);
                                  } else {
                                    return [
                                      createTextVNode("Inquery")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UButton, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Inquery")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", null, "Check your degree here"),
                          createVNode(_component_UFormGroup, {
                            label: "Name",
                            name: "name",
                            ui: { label: {
                              wrapper: "flex content-center items-center justify-between",
                              base: "block font-medium text-white dark:text-white-200",
                              required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                            } }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                placeholder: "Enter your name",
                                style: { "width": "20rem" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "ID",
                            name: "id",
                            ui: { label: {
                              wrapper: "flex content-center items-center justify-between",
                              base: "block font-medium text-white dark:text-white-200",
                              required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                            } }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                modelValue: unref(state).id,
                                "onUpdate:modelValue": ($event) => unref(state).id = $event,
                                placeholder: "Enter your ID",
                                style: { "width": "20rem" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, { type: "submit" }, {
                                default: withCtx(() => [
                                  createTextVNode("Inquery")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "container1" }, [
                      createVNode("img", {
                        class: "image1",
                        src: "https://4habe7.p3cdn1.secureserver.net/wp-content/uploads/2023/08/Campus-Exterior_05_1200X500.jpg",
                        alt: "Cardinal Stritch University"
                      }),
                      createVNode(_component_UForm, {
                        class: "overlay",
                        schema: unref(schema),
                        state: unref(state),
                        onSubmit
                      }, {
                        default: withCtx(() => [
                          createVNode("h1", null, "Check your degree here"),
                          createVNode(_component_UFormGroup, {
                            label: "Name",
                            name: "name",
                            ui: { label: {
                              wrapper: "flex content-center items-center justify-between",
                              base: "block font-medium text-white dark:text-white-200",
                              required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                            } }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                placeholder: "Enter your name",
                                style: { "width": "20rem" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "ID",
                            name: "id",
                            ui: { label: {
                              wrapper: "flex content-center items-center justify-between",
                              base: "block font-medium text-white dark:text-white-200",
                              required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                            } }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                modelValue: unref(state).id,
                                "onUpdate:modelValue": ($event) => unref(state).id = $event,
                                placeholder: "Enter your ID",
                                style: { "width": "20rem" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, { type: "submit" }, {
                                default: withCtx(() => [
                                  createTextVNode("Inquery")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["schema", "state"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ULandingSection, { class: "!pt-5" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "container1" }, [
                    createVNode("img", {
                      class: "image1",
                      src: "https://4habe7.p3cdn1.secureserver.net/wp-content/uploads/2023/08/Campus-Exterior_05_1200X500.jpg",
                      alt: "Cardinal Stritch University"
                    }),
                    createVNode(_component_UForm, {
                      class: "overlay",
                      schema: unref(schema),
                      state: unref(state),
                      onSubmit
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, "Check your degree here"),
                        createVNode(_component_UFormGroup, {
                          label: "Name",
                          name: "name",
                          ui: { label: {
                            wrapper: "flex content-center items-center justify-between",
                            base: "block font-medium text-white dark:text-white-200",
                            required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                          } }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              modelValue: unref(state).name,
                              "onUpdate:modelValue": ($event) => unref(state).name = $event,
                              placeholder: "Enter your name",
                              style: { "width": "20rem" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "ID",
                          name: "id",
                          ui: { label: {
                            wrapper: "flex content-center items-center justify-between",
                            base: "block font-medium text-white dark:text-white-200",
                            required: "after:content-[" * "] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
                          } }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              modelValue: unref(state).id,
                              "onUpdate:modelValue": ($event) => unref(state).id = $event,
                              placeholder: "Enter your ID",
                              style: { "width": "20rem" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, null, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Inquery")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["schema", "state"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inquery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=inquery-BCFvv025.mjs.map
