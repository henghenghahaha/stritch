import { _ as _sfc_main$1 } from './LandingSection-Drmm2wk1.mjs';
import { s as supabase, _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4 } from './supabase-BV0SOpkw.mjs';
import { u as useToast, a as __nuxt_component_0$4, b as _sfc_main$6 } from './server.mjs';
import { _ as __nuxt_component_0 } from './Divider-DNEvqXW6.mjs';
import { defineComponent, reactive, ref, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { object, string } from 'yup';
import 'tailwind-merge';
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
import '@supabase/supabase-js';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dist",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = object({
      id: string().required("Required")
    });
    const state = reactive({
      id: void 0
    });
    const record = ref([]);
    const toast = useToast();
    const statedata = reactive({
      datebirth: void 0,
      dateofattendence: void 0,
      dateofgraduation: void 0,
      degree: void 0,
      gender: void 0,
      gpa: void 0,
      id: void 0,
      imgperson: void 0,
      imgscore: void 0,
      major: void 0,
      name: void 0,
      nationality: void 0,
      registrationnumber: void 0,
      totalcredits: void 0
    });
    function clearstate() {
      statedata.datebirth = void 0;
      statedata.dateofattendence = void 0;
      statedata.dateofgraduation = void 0;
      statedata.degree = void 0;
      statedata.gender = void 0;
      statedata.gpa = void 0;
      statedata.id = void 0;
      statedata.imgperson = void 0;
      statedata.imgscore = void 0;
      statedata.major = void 0;
      statedata.name = void 0;
      statedata.nationality = void 0;
      statedata.registrationnumber = void 0;
      statedata.totalcredits = void 0;
    }
    async function getrecord(id) {
      const { data } = await supabase.from("stritch").select().eq("id", id);
      record.value = data;
      statedata.datebirth = record.value[0].datebirth;
      statedata.dateofattendence = record.value[0].dateofattendence;
      statedata.dateofgraduation = record.value[0].dateofgraduation;
      statedata.degree = record.value[0].degree;
      statedata.gender = record.value[0].gender;
      statedata.gpa = record.value[0].gpa;
      statedata.id = record.value[0].id;
      statedata.imgperson = record.value[0].imgperson;
      statedata.imgscore = record.value[0].imgscore;
      statedata.major = record.value[0].major;
      statedata.name = record.value[0].name;
      statedata.nationality = record.value[0].nationality;
      statedata.registrationnumber = record.value[0].registrationnumber;
      statedata.totalcredits = record.value[0].totalcredits;
    }
    async function onSubmit(event) {
      const id = event.data.id;
      getrecord(id);
    }
    const onimgpersonChange = (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          statedata.imgperson = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const onimgscoreChange = (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          statedata.imgscore = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    async function submitchange() {
      await supabase.from("stritch").update({
        "datebirth": statedata.datebirth,
        "dateofattendence": statedata.dateofattendence,
        "dateofgraduation": statedata.dateofgraduation,
        "degree": statedata.degree,
        "gender": statedata.gender,
        "gpa": statedata.gpa,
        "id": statedata.id,
        "imgperson": statedata.imgperson,
        "imgscore": statedata.imgscore,
        "major": statedata.major,
        "name": statedata.name,
        "nationality": statedata.nationality,
        "registrationnumber": statedata.registrationnumber,
        "totalcredits": statedata.totalcredits
      }).eq("id", statedata.id);
      clearstate();
      toast.add({ title: "Submit Success!!" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingSection = _sfc_main$1;
      const _component_UForm = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_0$4;
      const _component_UPage = _sfc_main$6;
      const _component_UDivider = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingSection, { class: "!pt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              schema: unref(schema),
              state: unref(state),
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, { ui: { container: "mt-3" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).id,
                          "onUpdate:modelValue": ($event) => unref(state).id = $event,
                          type: "id",
                          placeholder: "Enter your email",
                          ui: { icon: { trailing: { pointer: "" } } },
                          required: "",
                          size: "xl",
                          autocomplete: "off",
                          class: "max-w-sm mx-auto",
                          "input-class": "rounded-full"
                        }, {
                          trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                color: "primary",
                                label: "submit"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UButton, {
                                  type: "submit",
                                  size: "xs",
                                  color: "primary",
                                  label: "submit"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).id,
                            "onUpdate:modelValue": ($event) => unref(state).id = $event,
                            type: "id",
                            placeholder: "Enter your email",
                            ui: { icon: { trailing: { pointer: "" } } },
                            required: "",
                            size: "xl",
                            autocomplete: "off",
                            class: "max-w-sm mx-auto",
                            "input-class": "rounded-full"
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UButton, {
                                type: "submit",
                                size: "xs",
                                color: "primary",
                                label: "submit"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormGroup, { ui: { container: "mt-3" } }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).id,
                          "onUpdate:modelValue": ($event) => unref(state).id = $event,
                          type: "id",
                          placeholder: "Enter your email",
                          ui: { icon: { trailing: { pointer: "" } } },
                          required: "",
                          size: "xl",
                          autocomplete: "off",
                          class: "max-w-sm mx-auto",
                          "input-class": "rounded-full"
                        }, {
                          trailing: withCtx(() => [
                            createVNode(_component_UButton, {
                              type: "submit",
                              size: "xs",
                              color: "primary",
                              label: "submit"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_UForm, {
                schema: unref(schema),
                state: unref(state),
                onSubmit
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormGroup, { ui: { container: "mt-3" } }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).id,
                        "onUpdate:modelValue": ($event) => unref(state).id = $event,
                        type: "id",
                        placeholder: "Enter your email",
                        ui: { icon: { trailing: { pointer: "" } } },
                        required: "",
                        size: "xl",
                        autocomplete: "off",
                        class: "max-w-sm mx-auto",
                        "input-class": "rounded-full"
                      }, {
                        trailing: withCtx(() => [
                          createVNode(_component_UButton, {
                            type: "submit",
                            size: "xs",
                            color: "primary",
                            label: "submit"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["schema", "state"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              class: "container student-registration",
              state: unref(statedata)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1${_scopeId2}>Student&#39;s Registration Information</h1><div class="profile"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "photo" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(statedata).imgperson)} alt="Student Photo"${_scopeId3}><input type="file" size="sm"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(statedata).imgperson,
                            alt: "Student Photo"
                          }, null, 8, ["src"]),
                          createVNode("input", {
                            type: "file",
                            size: "sm",
                            onChange: onimgpersonChange
                          }, null, 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="info"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Student Name</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).name,
                          "onUpdate:modelValue": ($event) => unref(statedata).name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Student Name"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).name,
                            "onUpdate:modelValue": ($event) => unref(statedata).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Date of Birth</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).datebirth,
                          "onUpdate:modelValue": ($event) => unref(statedata).datebirth = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Date of Birth"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).datebirth,
                            "onUpdate:modelValue": ($event) => unref(statedata).datebirth = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Nationality</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).nationality,
                          "onUpdate:modelValue": ($event) => unref(statedata).nationality = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Nationality"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).nationality,
                            "onUpdate:modelValue": ($event) => unref(statedata).nationality = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Reg Number</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).registrationnumber,
                          "onUpdate:modelValue": ($event) => unref(statedata).registrationnumber = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Reg Number"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).registrationnumber,
                            "onUpdate:modelValue": ($event) => unref(statedata).registrationnumber = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>ID/Passport No.</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).id,
                          "onUpdate:modelValue": ($event) => unref(statedata).id = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "ID/Passport No."),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).id,
                            "onUpdate:modelValue": ($event) => unref(statedata).id = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Major of Study</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).major,
                          "onUpdate:modelValue": ($event) => unref(statedata).major = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Major of Study"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).major,
                            "onUpdate:modelValue": ($event) => unref(statedata).major = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Degrees Awarded</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).degree,
                          "onUpdate:modelValue": ($event) => unref(statedata).degree = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Degrees Awarded"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).degree,
                            "onUpdate:modelValue": ($event) => unref(statedata).degree = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Total Credits for Completion</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).totalcredits,
                          "onUpdate:modelValue": ($event) => unref(statedata).totalcredits = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Total Credits for Completion"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).totalcredits,
                            "onUpdate:modelValue": ($event) => unref(statedata).totalcredits = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The Grade Point Average (The GPA)</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).gpa,
                          "onUpdate:modelValue": ($event) => unref(statedata).gpa = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "The Grade Point Average (The GPA)"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).gpa,
                            "onUpdate:modelValue": ($event) => unref(statedata).gpa = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Date of Attendance</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).dateofattendence,
                          "onUpdate:modelValue": ($event) => unref(statedata).dateofattendence = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Date of Attendance"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).dateofattendence,
                            "onUpdate:modelValue": ($event) => unref(statedata).dateofattendence = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "field" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Date of Graduation</p>`);
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(statedata).dateofgraduation,
                          "onUpdate:modelValue": ($event) => unref(statedata).dateofgraduation = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Date of Graduation"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).dateofgraduation,
                            "onUpdate:modelValue": ($event) => unref(statedata).dateofgraduation = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UDivider, {
                    label: "Student's Score Information",
                    class: "mt-4 mb-2",
                    ui: { label: "text-lg text-primary-500 dark:text-primary-400" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(statedata).imgscore)}${_scopeId3}><input type="file" size="sm"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(statedata).imgscore
                          }, null, 8, ["src"]),
                          createVNode("input", {
                            type: "file",
                            size: "sm",
                            onChange: onimgscoreChange
                          }, null, 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { class: "flex justify-center mt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: submitchange
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`submit`);
                            } else {
                              return [
                                createTextVNode("submit")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: submitchange
                          }, {
                            default: withCtx(() => [
                              createTextVNode("submit")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", null, "Student's Registration Information"),
                    createVNode("div", { class: "profile" }, [
                      createVNode(_component_UFormGroup, { class: "photo" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(statedata).imgperson,
                            alt: "Student Photo"
                          }, null, 8, ["src"]),
                          createVNode("input", {
                            type: "file",
                            size: "sm",
                            onChange: onimgpersonChange
                          }, null, 32)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "info" }, [
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Student Name"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).name,
                              "onUpdate:modelValue": ($event) => unref(statedata).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Date of Birth"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).datebirth,
                              "onUpdate:modelValue": ($event) => unref(statedata).datebirth = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Nationality"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).nationality,
                              "onUpdate:modelValue": ($event) => unref(statedata).nationality = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Reg Number"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).registrationnumber,
                              "onUpdate:modelValue": ($event) => unref(statedata).registrationnumber = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "ID/Passport No."),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).id,
                              "onUpdate:modelValue": ($event) => unref(statedata).id = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Major of Study"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).major,
                              "onUpdate:modelValue": ($event) => unref(statedata).major = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Degrees Awarded"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).degree,
                              "onUpdate:modelValue": ($event) => unref(statedata).degree = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Total Credits for Completion"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).totalcredits,
                              "onUpdate:modelValue": ($event) => unref(statedata).totalcredits = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "The Grade Point Average (The GPA)"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).gpa,
                              "onUpdate:modelValue": ($event) => unref(statedata).gpa = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Date of Attendance"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).dateofattendence,
                              "onUpdate:modelValue": ($event) => unref(statedata).dateofattendence = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { class: "field" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Date of Graduation"),
                            createVNode(_component_UInput, {
                              modelValue: unref(statedata).dateofgraduation,
                              "onUpdate:modelValue": ($event) => unref(statedata).dateofgraduation = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_UDivider, {
                      label: "Student's Score Information",
                      class: "mt-4 mb-2",
                      ui: { label: "text-lg text-primary-500 dark:text-primary-400" }
                    }),
                    createVNode(_component_UFormGroup, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(statedata).imgscore
                        }, null, 8, ["src"]),
                        createVNode("input", {
                          type: "file",
                          size: "sm",
                          onChange: onimgscoreChange
                        }, null, 32)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, { class: "flex justify-center mt-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: submitchange
                        }, {
                          default: withCtx(() => [
                            createTextVNode("submit")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
                class: "container student-registration",
                state: unref(statedata)
              }, {
                default: withCtx(() => [
                  createVNode("h1", null, "Student's Registration Information"),
                  createVNode("div", { class: "profile" }, [
                    createVNode(_component_UFormGroup, { class: "photo" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(statedata).imgperson,
                          alt: "Student Photo"
                        }, null, 8, ["src"]),
                        createVNode("input", {
                          type: "file",
                          size: "sm",
                          onChange: onimgpersonChange
                        }, null, 32)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "info" }, [
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Student Name"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).name,
                            "onUpdate:modelValue": ($event) => unref(statedata).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Date of Birth"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).datebirth,
                            "onUpdate:modelValue": ($event) => unref(statedata).datebirth = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Nationality"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).nationality,
                            "onUpdate:modelValue": ($event) => unref(statedata).nationality = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Reg Number"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).registrationnumber,
                            "onUpdate:modelValue": ($event) => unref(statedata).registrationnumber = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "ID/Passport No."),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).id,
                            "onUpdate:modelValue": ($event) => unref(statedata).id = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Major of Study"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).major,
                            "onUpdate:modelValue": ($event) => unref(statedata).major = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Degrees Awarded"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).degree,
                            "onUpdate:modelValue": ($event) => unref(statedata).degree = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Total Credits for Completion"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).totalcredits,
                            "onUpdate:modelValue": ($event) => unref(statedata).totalcredits = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "The Grade Point Average (The GPA)"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).gpa,
                            "onUpdate:modelValue": ($event) => unref(statedata).gpa = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Date of Attendance"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).dateofattendence,
                            "onUpdate:modelValue": ($event) => unref(statedata).dateofattendence = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { class: "field" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Date of Graduation"),
                          createVNode(_component_UInput, {
                            modelValue: unref(statedata).dateofgraduation,
                            "onUpdate:modelValue": ($event) => unref(statedata).dateofgraduation = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_UDivider, {
                    label: "Student's Score Information",
                    class: "mt-4 mb-2",
                    ui: { label: "text-lg text-primary-500 dark:text-primary-400" }
                  }),
                  createVNode(_component_UFormGroup, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(statedata).imgscore
                      }, null, 8, ["src"]),
                      createVNode("input", {
                        type: "file",
                        size: "sm",
                        onChange: onimgscoreChange
                      }, null, 32)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, { class: "flex justify-center mt-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: submitchange
                      }, {
                        default: withCtx(() => [
                          createTextVNode("submit")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["state"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dist-BIP6d53I.mjs.map
