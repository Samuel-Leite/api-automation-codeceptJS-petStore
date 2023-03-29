/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type validation_api = typeof import('./src/resource/responseValidation.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, validation_api: validation_api }
  interface Methods extends REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
