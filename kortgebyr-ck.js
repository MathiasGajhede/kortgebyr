function init(){transactions=document.getElementById("transactions").value;value=document.getElementById("value").value;PSP=[{name:"paypal",logo:"paypal.png",komplet:!0,link:"paypal.com",setupFee:0,monthlyFee:0,fixedTransactionFee:2.6,variableTransactionFee:3.4,totalTransactionCosts:0,totalCosts:0},{name:"ewire",logo:"ewire.png",komplet:!0,link:"paypal.com",setupFee:1195,monthlyFee:99.58,fixedTransactionFee:.7,variableTransactionFee:2.45,totalTransactionCosts:0,totalCosts:0},{name:"ewire",logo:"ewire.png",komplet:!0,link:"paypal.com",setupFee:395,monthlyFee:0,fixedTransactionFee:1.1,variableTransactionFee:2.45,totalTransactionCosts:0,totalCosts:0},{name:"skrill",logo:"skrill.png",komplet:!0,link:"paypal.com",setupFee:0,monthlyFee:148.75,fixedTransactionFee:1.86,variableTransactionFee:1.9,totalTransactionCosts:0,totalCosts:0},{name:"quickpay",logo:"quickpay.png",komplet:!1,link:"paypal.com",setupFee:0,monthlyFee:150,fixedTransactionFee:0,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ePay Light",logo:"epay.png",komplet:!1,link:"epay.dk",setupFee:399,monthlyFee:99,fixedTransactionFee:.25,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ePay Pro",logo:"epay.png",komplet:!1,link:"epay.dk",setupFee:599,monthlyFee:199,fixedTransactionFee:.25,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ePay Business",logo:"epay.png",komplet:!1,link:"epay.dk",setupFee:999,monthlyFee:299,fixedTransactionFee:.25,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"DIBS Entrepreneur",logo:"dibs.png",komplet:!1,link:"dibs.dk",setupFee:0,monthlyFee:149,fixedTransactionFee:3,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"DIBS Business",logo:"dibs.png",komplet:!1,link:"dibs.dk",setupFee:0,monthlyFee:249,fixedTransactionFee:3,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"DIBS Professional",logo:"dibs.png",komplet:!1,link:"dibs.dk",setupFee:0,monthlyFee:249,fixedTransactionFee:1.5,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Netaxept start",logo:"netaxept.png",komplet:!1,link:"terminalshop.dk",setupFee:1e3,monthlyFee:180,fixedTransactionFee:1.5,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Netaxept plus",logo:"netaxept.png",komplet:!1,link:"terminalshop.dk",setupFee:3e3,monthlyFee:500,fixedTransactionFee:1,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Netaxept advanced",logo:"netaxept.png",komplet:!1,link:"terminalshop.dk",setupFee:7500,monthlyFee:700,fixedTransactionFee:.7,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Dandomain",logo:"dandomain.png",komplet:!1,link:"dandomain.dk",setupFee:199,monthlyFee:149,fixedTransactionFee:0,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"FreePay",logo:"freepay.png",komplet:!1,link:"freepay.dk",setupFee:0,monthlyFee:349,fixedTransactionFee:0,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Wannafind",logo:"wannafind.png",komplet:!1,link:"wannafind.dk",setupFee:0,monthlyFee:149,fixedTransactionFee:0,variableTransactionFee:0,totalTransactionCosts:0,totalCosts:0}];nets_setupFee=1e3;nets_monthlyFee=83.33;nets_fixedTransactionFee=.7;nets_variableTransactionFee=0;nets_total=0;seb_setupFee=0;seb_monthlyFee=0;seb_fixedTransactionFees=0;seb_variableTransactionFees=1.6;seb_total=0;oms=transactions*value;calc()}function calc(){oms<2e4?PSP[0].variableTransactionFee=3.4:oms<=8e4?PSP[0].variableTransactionFee=2.9:oms<=4e5?PSP[0].variableTransactionFee=2.7:oms<=8e5?PSP[0].variableTransactionFee=2.4:PSP[0].variableTransactionFee=1.9;if(value<=50)nets_fixedTransactionFee=.7;else if(value<=100)nets_fixedTransactionFee=1.1;else if(value<=500)nets_fixedTransactionFee=1.45;else{nets_fixedTransactionFee=1.45;nets_percentages=.001}nets_total=83.33+.8*(transactions*nets_fixedTransactionFee+oms*nets_variableTransactionFee);seb_total=.2*oms*.016;for(var e=0;e<PSP.length;e++)if(PSP[e].komplet==1){PSP[e].totalTransactionCosts=PSP[e].fixedTransactionFee*transactions+PSP[e].variableTransactionFee/100*oms;PSP[e].totalCosts=PSP[e].monthlyFee+PSP[e].totalTransactionCosts}else{e==5?transactions>500?PSP[e].totalTransactionCosts=PSP[e].fixedTransactionFee*(transactions-500)+nets_total+seb_total:PSP[e].totalTransactionCosts=nets_total+seb_total:PSP[e].totalTransactionCosts=PSP[e].fixedTransactionFee*transactions+nets_total+seb_total;PSP[e].totalCosts=PSP[e].monthlyFee+PSP[e].totalTransactionCosts}build()}function build(){PSP.sort(function(e,t){return t.totalCosts-e.totalCosts});var e=document.getElementById("data"),t;e.innerHTML="";for(var n=0;n<PSP.length;n++){t=e.insertRow(0);var r=t.insertCell(0),i=t.insertCell(1),s=t.insertCell(2),o=t.insertCell(3),u=t.insertCell(4);r.innerHTML="<img style='margin:3px 0 3px;' height='40' src='logo/"+PSP[n].logo+"' />"+PSP[n].name;i.innerHTML=Math.round(PSP[n].setupFee)+" kr";s.innerHTML=Math.round(PSP[n].monthlyFee)+" kr";o.innerHTML=Math.round(PSP[n].totalTransactionCosts)+" kr";u.innerHTML=Math.round(PSP[n].totalCosts)+" kr"}}function gateways(){for(var e=0;e<gateway_monthly.length;e++){var t=gateway_monthly[e]+nets+seb;if(e==0&&transactions>500){var n=0;if(transactions<601)n+=(transactions-500)*.5;else if(transactions<1001){n+=49.5;n+=(transactions-600)*.4}else if(transactions<3001){n+=49.5;n+=160}t+=n}else e==1&&transactions>500?t+=(transactions-500)*.25:e==2?t+=transactions*1.5:e==3?t+=transactions*1:e==4&&(t+=transactions*.7);document.getElementById("gateway_total_"+e).innerHTML=t}};