sap.ui
		.controller(
				"test_project.view",
				{

					/**
					 * Called when a controller is instantiated and its View controls (if available) are already created.
					 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
					 * @memberOf test_project.view
					 */
					onInit : function() {
						a = [];
						temp = [];
						tmp_tw = "7";
						tw = "0";
//						k = [ "2", "3", "4", "5", "6", "7", "8", "9",  ];
						k=[];
						for(o=2;o<15;o++){
							k.push(o);
						}
						p = 2;
						h = 1;
						randomNo = 0;
						ha1 = [];

					},

					onPress : function(evt) {

						doTimer();
						var oController = this;
						var t = sap.ui.getCore().byId("tc");

						if (h == 1) {
							h = sap.ui.getCore().byId("hbox1");
						}

						var h1 = sap.ui.getCore().byId("hb1");

						if (h.getItems().length >= 4) {
							h = sap.ui.getCore().byId("hbox" + p);
							p = p + 1;
						}
						var str = evt.getSource().getId();
						//alert(str);
						var res = str.split("tn");
						//alert(res[1]);
						var tmp_color = t.getText();
						//alert(tmp_color);
						if (res[1] == color.indexOf(tmp_color)) {
							//  alert("success");
						} else {
							//        alert("Game Over");
							stopCount();
							jQuery.sap.require("sap.m.MessageBox");

							sap.m.MessageBox
									.information(
											"Game Over, Try Again",
											{
												icon : sap.m.MessageBox.Icon.INFORMATION,
												title : "Color Game",
												styleClass : "message",
												onClose : function() {
													window.location.reload();
												}
											});

							//new sap.m.MessageStrip({text:"Game Over"}).show();

						}

						//alert( a.length );
						if (a.length >= 12)//7total - 3

						{

							alert("You have won the game");

							window.location.reload();
						} else {
							rand();
						}

						function rand() {
							//var totalmilliseconds = new Date().valueOf();
							//alert(totalmilliseconds);
							// randomNo = totalmilliseconds%10;
							randomNo = k[Math.floor(Math.random() * k.length)];
							if (a.indexOf(randomNo) >= 0 || randomNo == 0
									|| randomNo == 1) {
								rand();
							} else {
								a.push(randomNo);
								b.push(randomNo);
								//alert(randomNo);
							}
						}

						//k.push(h.getItems());

						//alert(a.length);
						if (a.length >= 13)//8total - 2

						{

							//alert("You have won the game");
						} else {

							h.addItem(new sap.m.Button("btn" + randomNo, {
								press : [ oController.onPress, oController ]
							}));

							var randomColor;
							col();
							cbg();

							function cbg() {
								tw = b[Math.floor(Math.random() * b.length)];
								//alert("TMP="+tmp_tw+"TW="+tw);
								if (tw == tmp_tw) {
									//	alert("func called");
									cbg();
								} else {
									h1.removeStyleClass("hbx" + tmp_tw);
									h1.addStyleClass("hbx" + tw);
									tmp_tw = tw;
								}

							}

							function col() {
								var twist = b[Math.floor(Math.random()
										* b.length)];
								randomColor = color[twist];
								if (temp.indexOf(randomColor) < 0) {

									t.setText(randomColor);
									temp.push(randomColor);

								} else {
									col();
								}
							}

							var style = document.createElement('style');
							style.type = 'text/css';
							style.innerHTML = '.cssClass' + randomNo
									+ '{ color: red; }';
							document.getElementsByTagName('head')[0]
									.appendChild(style);
							var tmpr;
							var ctext1;
							

							setTimeout(
									function() {
										
										for (i = 0; i < ha1.length; i++) {
											tmpr = ha1[i];
											ctext1 = color[tmpr];
											//alert("tmp"+tmpr+"ctxt"+ctext1);
											document.getElementById("btn" + tmpr + "-inner").style.backgroundColor = ctext1;
										}
										
										
										
										var ctext = color[randomNo];
										document.getElementById("btn" + randomNo + "-inner").style.backgroundColor = ctext;
									}, 100);

							ha1.push(randomNo);
						}
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
					 * (NOT before the first rendering! onInit() is used for that one!).
					 * @memberOf test_project.view
					 */
					//	onBeforeRendering: function() {
					//		alert("dlsdls");
					//	},
					/**
					 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
					 * This hook is the same one that SAPUI5 controls get after being rendered.
					 * @memberOf test_project.view
					 */
					//	onAfterRendering: function() {
					//		alert("4545dls");
					//	},
					/**
					 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
					 * @memberOf test_project.view
					 */
					//	onExit: function() {
					//
					//	}
					test : function(evt) {

						//var app = sap.ui.getCore().getControl("AppThis");

						/*var user = "FINREFX09";
						var password = "SAP@bao";*/

						var rModel = new sap.ui.model.odata.ODataModel(
								{
									serviceUrl : "http://services.odata.org/Northwind/Northwind.svc/",//json:true,
								});
						sap.ui.getCore().setModel(rModel);

						rModel
								.read(
										"/",
										{
											method : "GET",
											success : function(dataTile) {

												alert("success to GET");
												alert(JSON.stringify(data));

											},
											error : function(oResponse) {
												jQuery.sap
														.require("sap.m.MessageBox");
												sap.ui.core.BusyIndicator
														.hide();
												sap.m.MessageBox
														.alert(
																"Failed to Communicate with SAP",
																{
																	title : "Alert", // default
																	onClose : null, // default
																	styleClass : "", // default
																	initialFocus : null, // default
																	textDirection : sap.ui.core.TextDirection.LTR, // default
																	verticalScrolling : true, // default
																	horizontalScrolling : true
																// default
																});

											}
										});

						//        alert(sap.ui.getCore().getControl("lv_NotifTypeView2").getValue());
						/*        var aData = jQuery.ajax({
						 type : "GET",
						 url: "http://117.239.152.154:8000/sap/opu/odata/SAP/ZPO_XAMPR_TEST_SRV/",
						 // headers: { "X-Requested-With": "XMLHttpRequest", "sap-user" : "BINDKM", "sap-password" : "SAP@bao",  "Content-Type": "application/atom+xml" },
						 headers: { "X-Requested-With": "XMLHttpRequest", "Authorization" : "Basic " + btoa(user + ":" + password),  "Content-Type": "application/atom+xml" },
						 //url: "https://jsonplaceholder.typicode.com/posts/1",
						 dataType : "json",
						 // data: {email:'shobinsun@gmail.com',firstname:"Sanoop",lastname:"Fingent"},       
						 success : function(data,textStatus, jqXHR) {            
						 alert("success to GET");
						 alert(JSON.stringify(data));                    
						 },
						 error : function(data,textStatus, jqXHR) {  
						 alert("error");
						 alert(JSON.stringify(data));
						 }
						 });*/
					}

				});
