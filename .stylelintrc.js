module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    // Ensure CSS properties are ordered
    "order/properties-alphabetical-order": null, 
    // Stylelint won"t flag if it finds any of these strings
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "layer"], 
    }],
    // Ensure there is a semi-colon at the end of a declaration block
    "declaration-block-trailing-semicolon": "always",
    "selector-list-comma-newline-after": null,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-single-line-max-declarations": null,
    "value-keyword-case": null
  },
};
