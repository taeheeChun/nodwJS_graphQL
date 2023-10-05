// eslint 설정파일
// 모듈로 설정
// eslint 설정
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb-base", "plugin:node/recommended", "prettier"],
  rules: {
    "import/prefer-default-export": ["off"],
  },
}
