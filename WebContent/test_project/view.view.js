sap.ui.jsview("test_project.view", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test_project.view
	*/ 
	getControllerName : function() {
		return "test_project.view";
	},
	

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test_project.view
	*/ 
	createContent : function(oController) {
	var v = new sap.m.HBox("hb1",{alignItems:"Center", width:"auto", alignContent:"Center", height:"25%",justifyContent:"Center"});
	var v1 = new sap.m.HBox({alignItems:"Center", width:"100%", alignContent:"Center", height:"25%",justifyContent:"Center"} );
	//var h = new sap.m.TileContainer();
	var vbox = new sap.m.VBox("vb1",{alignContent:"Center",  height:"100%",width:"100%"})
	var h = new sap.m.HBox("hbox1",{justifyContent:"Center",  height:"auto",width:"100%",fitContainer:true});
	var h2 = new sap.m.HBox("hbox2",{justifyContent:"Center",  height:"auto",width:"100%",fitContainer:true });
	var h3 = new sap.m.HBox("hbox3",{justifyContent:"Center",  height:"auto",width:"100%",fitContainer:true });
	var h4 = new sap.m.HBox("hbox4",{justifyContent:"Center",  height:"auto",width:"100%",fitContainer:true });

	
	
	
	
 		var p = new sap.m.Page({
			title: "",height:"100%",
			content: [
			//	oPanel,
				v1,
		    //    h,
			//	h2,
			//	h3,
			//	h4
				vbox
		
			]
		});
 		vbox.addItem(h);
 		vbox.addItem(h2);
 		vbox.addItem(h3);
 		vbox.addItem(h4);
		v.addStyleClass("hbx1");
		v1.addItem(v);
		var blength = b.length - 1;
		var totalmilliseconds = new Date().valueOf();
      //  var twist = totalmilliseconds % blength;
		var twist = b[Math.floor(Math.random()*b.length)]; 
		var randomColor = color[twist];
		//alert(randomColor);
		v.addItem(new sap.m.Title("tc",{text:randomColor}));
		for(i=0;i<2;i++){
	
	//h.addTile(new sap.m.CustomTile("ct"+i).addStyleClass("hbox"+i,"hboxt"+i ));
	//sap.ui.getCore().byId("ct"+i).setContent(new sap.m.Text({text: "blue"}));
	h.addItem(new sap.m.Button("btn"+i,{height:"35%",press:[oController.onPress,oController]}).addStyleClass("hbox"+i));

	//sap.ui.getCore().byId("id0").setText("TEST");

	}	
	return p;
	}

});