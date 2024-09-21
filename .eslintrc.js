module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      files: ['layouts/*.vue', 'pages/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    // 'comma-dangle': ['warn', 'never'],
    'linebreak-style': 0,
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    // semi: ['warn', 'never'],
    'vue/v-on-style': ['warn', 'shorthand'],
    'vue/v-bind-style': ['warn', 'shorthand'],
    'vue/v-slot-style': ['warn', 'shorthand'],
    'vue/html-indent': [
      'warn',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    // "vue/html-self-closing": [
    //     "warn",
    //     {
    //         html: {
    //             void: "always",
    //             normal: "always",
    //             component: "always"
    //         },
    //         svg: "always",
    //         math: "always"
    //     }
    // ],
    'vue/no-static-inline-styles': [
      'warn',
      {
        allowBinding: false
      }
    ],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],

    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: []
      }
    ],
    // "vue/html-indent": [
    //     "warn",
    //     'type',
    //     {
    //         attribute: 1,
    //         baseIndent: 1,
    //         closeBracket: 0,
    //         alignAttributesVertically: true,
    //         ignores: [],
    //     },
    // ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': ['warn'],
    'vue/no-multi-spaces': [
      'warn',
      {
        ignoreProperties: false
      }
    ],
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    'vue/html-quotes': ['warn', 'double', { avoidEscape: false }],
    'vue/no-side-effects-in-computed-properties': ['warn'],
    'vue/component-definition-name-casing': ['warn', 'PascalCase'],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-undef': ['warn'],
    'vue/no-mutating-props': ['warn'],
    'vue/require-v-for-key': ['warn'],
    'vue/no-unused-components': ['warn'],
    'no-extra-boolean-cast': ['warn'],
    'vue/no-deprecated-slot-attribute': ['warn'],
    'valid-typeof': ['warn']
  }
};
