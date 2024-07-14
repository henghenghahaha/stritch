import { _ as __nuxt_component_0 } from './Divider-DNEvqXW6.mjs';
import { _ as _export_sfc, f as useState } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const recorddeatil = useState("recorddeatil");
    const record = JSON.parse(recorddeatil.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f5d04418><h1 data-v-f5d04418>Student&#39;s Registration Information</h1><div class="profile" data-v-f5d04418><img${ssrRenderAttr("src", unref(record).imgperson)} alt="Student Photo" data-v-f5d04418><table data-v-f5d04418><tr data-v-f5d04418><th data-v-f5d04418>Student Name</th><td data-v-f5d04418>${ssrInterpolate(unref(record).name)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Gender</th><td data-v-f5d04418>${ssrInterpolate(unref(record).gender)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Date of Birth</th><td data-v-f5d04418>${ssrInterpolate(unref(record).datebirth)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Nationality</th><td data-v-f5d04418>${ssrInterpolate(unref(record).nationality)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Reg Number</th><td data-v-f5d04418>${ssrInterpolate(unref(record).registrationnumber)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>ID/Passport No.</th><td data-v-f5d04418>${ssrInterpolate(unref(record).id)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Major of Study</th><td data-v-f5d04418>${ssrInterpolate(unref(record).major)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Degrees Awarded</th><td data-v-f5d04418>${ssrInterpolate(unref(record).degree)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Total Credits for Completion</th><td data-v-f5d04418>${ssrInterpolate(unref(record).totalcredits)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>The Grade Point Average (The GPA)</th><td data-v-f5d04418>${ssrInterpolate(unref(record).gpa)}</td></tr><tr data-v-f5d04418><th data-v-f5d04418>Date of Attendance &amp; Date of Graduation</th><td data-v-f5d04418>${ssrInterpolate(unref(record).dateofattendence)} - ${ssrInterpolate(unref(record).dateofgraduation)}</td></tr></table></div>`);
      _push(ssrRenderComponent(_component_UDivider, {
        label: "Student's Score Information",
        class: "mt-4 mb-2",
        ui: { label: "text-lg text-primary-500 dark:text-primary-400" }
      }, null, _parent));
      _push(`<div data-v-f5d04418><img${ssrRenderAttr("src", unref(record).imgscore)} data-v-f5d04418></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/record/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5d04418"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-dgleoD-j.mjs.map
