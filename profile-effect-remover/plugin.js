(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/profile-effect-remover/index.tsx
  var profile_effect_remover_exports = {};
  __export(profile_effect_remover_exports, {
    onUnload: () => onUnload
  });

  // plugins/profile-effect-remover/styles.css
  var styles_default = `
.avatarDecoration_cf681a {
    display: none;
}
.avatarDecoration__8a0c2 {
    display: none;
}
.profileEffects__9b664 {
    display: none;
}`;

  // plugins/profile-effect-remover/index.tsx
  var uninjectCss = shelter.ui.injectCss(styles_default);
  function onUnload() {
    uninjectCss();
  }
  return __toCommonJS(profile_effect_remover_exports);
})();
