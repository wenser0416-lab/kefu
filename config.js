// 雲端版設定
// 只有一間分校用這個網址：把 Apps Script 部署後的網址（…/exec）貼在 api 的引號裡。
// 多間分校共用同一個網址：改填 branches，每間分校一行（id 用英文小寫，網址可加 ?b=id 直接進該分校）。
//   各分校的資料都在自己的雲端硬碟，這裡只記錄「去哪裡找」。
window.YL_CLOUD = {
  api: '',
  branches: [
    // { id: 'ytu', name: '東華分校', api: 'https://script.google.com/macros/s/AKfycbzQPsMG4wJxqK_tsNdZ1wNOPLZgQIWax8CsXaWMGLPvmNS6CsV_1klaZgvJuKnHtkL9NQ/exec' },
  ],
};
