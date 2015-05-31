var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(255, 64, 64, 0.2)",
					strokeColor : "rgba(255, 64, 64, 1)",
					pointColor : "rgba(255, 64, 64, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}
		
	var barChartData = {
			labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			datasets : [
				{
					fillColor : "rgba(255,64,64,0.5)",
					strokeColor : "rgba(255,64,64,0.8)",
					highlightFill: "rgba(255,64,64,0.75)",
					highlightStroke: "rgba(255,64,64,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(220,220,220, 0.2)",
					strokeColor : "rgba(220,220,220, 0.8)",
					highlightFill : "rgba(220,220,220, 0.75)",
					highlightStroke : "rgba(220,220,220, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color:"#BF4834",
					highlight: "#62b9fb",
					label: "Toes"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#7F3022",
					label: "Back"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#FF5F45",
					label: "Heel"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#401811",
					label: "Midfoot"
				}

			];
			
	var doughnutData = [
				{
					value: 300,
					color:"#011C26",
					highlight: "#ffffff",
					label: "Toes"
				},
				{
					value: 50,
					color: "#630C00",
					highlight: "#ffffff",
					label: "Back"
				},
				{
					value: 100,
					color: "#A20064",
					highlight: "#ffffff",
					label: "Heel"
				},
				{
					value: 120,
					color: "#B7745B",
					highlight: "#ffffff",
					label: "Midfoot"
				}
			];
			
	var radarData = {
	    labels: ["Normal Pronation", "Underpronation", "Over Pronation"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 90, 57]
	        },
	        {
	            label: "My Second dataset",
	            fillColor : "rgba(255, 64, 64, 0.2)",
	            strokeColor : "rgba(255, 64, 64, 0.8)",
	            pointColor : "rgba(255, 64, 64, 1)",
	            pointStrokeColor : "#fff",
	            pointHighlightFill : "#fff",
	            pointHighlightStroke : "rgba(48, 164, 255, 1)",
	            data: [28, 100, 40]
	        }
	    ]
	};
	var polarData = [
		    {
		    	value: 300,
		    	color:"#011C26",
		    	highlight: "#011C26",
		    	label: "adsfadfasdfa"
		    },
		    {
		    	value: 140,
		    	color: "#D9042B",
		    	highlight: "#D9042B",
		    	label: "Orange"
		    },
		    {
		    	value: 220,
		    	color: "#F4CB89",
		    	highlight: "#F4CB89",
		    	label: "Teal"
		    },
		    {
		    	value: 250,
		    	color: "#588C8C",
		    	highlight: "#588C8C",
		    	label: "Red"
		    }
		
	];