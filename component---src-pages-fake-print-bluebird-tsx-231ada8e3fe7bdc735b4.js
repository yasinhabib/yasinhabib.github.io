"use strict";(self.webpackChunkyasin_habib_s_portofolio=self.webpackChunkyasin_habib_s_portofolio||[]).push([[695],{9514:function(e,l,t){t.r(l),t.d(l,{Head:function(){return r}});var n=t(7294),a=t(2597),i=t.n(a);const o={color:"#232129",fontFamily:"-apple-system, Roboto, sans-serif, serif",padding:"50px 0"};l.default=()=>{const[e,l]=n.useState(),t=t=>{l({...e,[t.target.name]:t.target.value})};return n.createElement("main",{style:o},n.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"start",gap:"1rem"}},n.createElement("label",null,"Struck No"),n.createElement("input",{type:"text",name:"struckNo",placeholder:"ex: 0005-00",onChange:t}),n.createElement("label",null,"No Armada"),n.createElement("input",{type:"text",name:"noArmada",placeholder:"ex: LL142",onChange:t}),n.createElement("label",null,"Tanggal"),n.createElement("input",{type:"text",name:"tanggal",placeholder:"ex: 17/01/2016",onChange:t}),n.createElement("label",null,"Waktu Mulai"),n.createElement("input",{type:"text",name:"waktuMulai",placeholder:"ex: 03:01",onChange:t}),n.createElement("label",null,"Waktu Selesai"),n.createElement("input",{type:"text",name:"waktuSelesai",placeholder:"ex: 03:29",onChange:t}),n.createElement("label",null,"Jarak"),n.createElement("input",{type:"text",name:"jarak",placeholder:"ex: 7.150",onChange:t}),n.createElement("label",null,"Wait"),n.createElement("input",{type:"text",name:"wait",placeholder:"ex: 12.11",onChange:t}),n.createElement("label",null,"Ongkos"),n.createElement("input",{type:"text",name:"ongkos",placeholder:"ex: 37660",onChange:t}),n.createElement("button",{type:"button",onClick:()=>(async()=>{var l;const t=await navigator.bluetooth.requestDevice({filters:[{services:["000018f0-0000-1000-8000-00805f9b34fb"]}]}),n=await(null===(l=t.gatt)||void 0===l?void 0:l.connect()),a=await(null==n?void 0:n.getPrimaryService("000018f0-0000-1000-8000-00805f9b34fb")),o=await(null==a?void 0:a.getCharacteristic("00002af1-0000-1000-8000-00805f9b34fb"));if(!o)return!1;let r=new Image;r.src="/blue-bird-logo.png";let u=(new(i())).initialize();r.onload=async()=>{console.log("test"),u.align("center").image(r,64,56,"atkinson"),await(null==o?void 0:o.writeValue(u.encode()));let l=(new(i())).initialize().align("center").size(3).bold(!0).line("BLUE BIRD GROUP",40).bold(!1).size(0).line("Call Center").line("021-7917 1234. 7941234").align("left").line("    Struck no.: "+(null==e?void 0:e.struckNo)).line("    Dari: ..............").line("    Ke: ..............").line("    No Armada: "+(null==e?void 0:e.noArmada)).line("    Tanggal: "+(null==e?void 0:e.tanggal)).line("    Waktu: "+(null==e?void 0:e.waktuMulai)+" - "+(null==e?void 0:e.waktuSelesai)).line("    Jarak: "+(null==e?void 0:e.jarak)+" km").line("    Wait: "+(null==e?void 0:e.wait)+" m.s").line("    Ongkos: Rp. "+(null==e?void 0:e.ongkos)).align("center").line("* TERIMA KASIH *").newline().newline();await(null==o?void 0:o.writeValue(l.encode()))}})()},"Print")))};const r=()=>n.createElement("title",null,"Fake print BlueBird")}}]);
//# sourceMappingURL=component---src-pages-fake-print-bluebird-tsx-231ada8e3fe7bdc735b4.js.map