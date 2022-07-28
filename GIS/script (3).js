$(document).ready(function($) {

var Container = joint.shapes.container.Parent;
    var Child = joint.shapes.container.Child;
    /*Анимация сайдбара*/
    $("#openbtn").click(function() {
        
        $('#sidebarContainer').toggleClass('sidebarAnimate');
        $('#Sidebar').toggleClass('openSidebar');
       
    })
    /*/Анимация сайдбара*/


    document.getElementById('todownload').onclick = function() {
        let text = JSON.stringify(graph.toJSON());
        let myData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
        this.href = myData;
        this.download = 'data.txt';
    }

    document.getElementById("tostore").onchange = function() {

        let file = this.files[0];

        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function() {
            graph.fromJSON(JSON.parse(reader.result));
        }


    }



    $('#Sidebar').on("dblclick", function(event) {

        createClone(event.target.id, 300, 100);
    });
    var SubgraphShape = joint.shapes.standard.BorderedImage;
    var objArray = [];
    objArray[0] = new joint.shapes.standard.Rectangle({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/Razedinitel1.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[1] = new joint.shapes.standard.Image({
        z: 2,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0',
                pointerEvents: 'bounding-box'
            },
            image: {
                xlinkHref: 'assets/img/Vyklyuchatel.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[2] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/трансформатор1.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[3] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/amper.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[4] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/предохранитель.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[5] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/преобразователь.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[6] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/img21 (2).png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[7] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/ТТ.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[8] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/транформатор2.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[9] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/img21 (2).jpg'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    objArray[10] = new joint.shapes.standard.Image({
        z: 1,
        size: {
            width: 60,
            height: 60
        },
        removable: false,
        attrs: {
            root: {
                magnet: false
            },
            body: {
                fill: '#FFFFFF',
                stroke: '#A0A0A0'
            },
            image: {
                xlinkHref: 'assets/img/resistor.png'
            }
        },
        ports: {
            items: [{
                id: 'ports',
                group: 'port'
            }],
            groups: {
                port: {
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 38, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3'
                        }
                    }
                }
            }
        }
    });
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: document.getElementById('paper'),
        width: 2000,
        height: 2000,
        model: graph,
        gridSize: 10,
        drawGrid: true,
        async: true,
		cursor: 'move',
		 embeddingMode: true,
        sorting: joint.dia.Paper.sorting.APPROX,
        linkPinning: false,
        background: { color: '#F3F7F6' },
        defaultConnectionPoint: { name: 'boundary' },
        validateConnection: function(view1, _magnet1, view2, _magnet2) {
            // Do not allow loop links (Element to Link, Element A to Element B is valid).
            return view1 !== view2;
        },
		 validateEmbedding: function(childView, parentView) {
			 var papa = parentView.model;
			 var papaTree = document.getElementsByClassName(papa.id);
			 var sinok = childView.model;
			 var sinokTree = document.getElementsByClassName(sinok.id);
			 console.log(sinok);
			 if(sinok.prop('type')==papa.prop('type')) papaTree[0].append(sinokTree[0]);
			 else {
				 var k = papaTree[0].firstChild;
				 papaTree[0].prepend(sinokTree[0]);
				 papaTree[0].prepend(k);
		 }
			  
        return parentView.model instanceof joint.shapes.container.Parent;
    },
	validateUnembedding: function(childView){
		 var sinok = childView.model;
		
			 var sinokTree = document.getElementsByClassName(sinok.id);
			 var k = document.getElementById('TreeUl');
			 
			 k.prepend(sinokTree[0]);
			 return true;
	},
        highlighting: {
            'default': {
                name: 'stroke',
                options: {
                    padding: 8,
                    attrs: {
                        'stroke': '#187BD3',
                        'stroke-width': 3
                    }
                }
            }
        },
        defaultLink: function() {
            return new joint.shapes.standard.Link({
				  'R_Sopr': 0,
                    'X_Sopr': 0,
                    'Volume': 0,
                    'Section': 0,
                    'Pos': 0,
                    'Rank': 0,
                attrs: {
                    line: {
                        stroke: 'black',
                        strokeWidth: 2,
                        targetMarker: {
                            'type': 'path',
                            'fill': 'none',
                            'stroke-width': 0,
                        }
                    },
                  
                }
            });
        },
		viewport: function(view) {
            var element = view.model;
            // Hide any element or link which is embedded inside a collapsed parent (or parent of the parent).
            var hidden = element.getAncestors().some(function(ancestor) {
                return ancestor.isCollapsed();
            });
            return !hidden;
        }
    });
	$("ul").click(function(){
		$('li').toggleClass('expand');
	});
 document.getElementById('crtCont').addEventListener('click', () => {

         var container_a = new Container({
        z: 2,
		size: { width: 500, height: 500 },
		
		elementTools: false,
        attrs: { headerText: { text: "123",class:"zalupa" }}
    });
	container_a.translate($(window).width() / 3,$(window).height() / 4);
	 var child_1 = new Child({
        z: 2,
        position: { x: 250, y: 150 },
        attrs: { label: { text: 1 }}
    });
	var articleDiv = document.getElementById("TreeUl");
	
			 var info = document.createElement('ul');
			 info.setAttribute('class',container_a.id);
			 info.setAttribute('style','list-style-type:none; padding-left:10px;');
			 info.innerHTML =  container_a.prop('attrs/headerText/text')+":";
			 //info.appendChild(infoText);
			
			 articleDiv.append(info);
	graph.addCell(container_a);	
    });
paper.on('element:button:pointerdown', function(elementView) {
	
       var k = elementView.model;
	   
	   var close = document.getElementById("infoCont");
		 if(close.getAttribute('class')=="active")return;
	 close.classList.add('active');
	   var articleDiv = document.getElementById('Tree');
	    var label = document.createElement("label");
            label.setAttribute('for', 'input1');
            label.setAttribute('unselectable', 'on');
            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'R_Sopr');
            input.setAttribute('id', 'input1');
            input.setAttribute('info', k.id);
            input.setAttribute('class', 'login-input');
			close.append(label);
			label.innerHTML = "Введите название: </br>";
			close.append(input);
			var label1 = document.createElement("label");
            label1.setAttribute('for', 'input2');
            label1.setAttribute('unselectable', 'on');
            var input1 = document.createElement("input");
            input1.setAttribute('type', 'text');
            input1.setAttribute('name', 'R_Sopr');
            input1.setAttribute('id', 'input2');
            input1.setAttribute('info', k.id);
            input1.setAttribute('class', 'login-input');
			close.append(label1);
			label1.innerHTML = "</br>Введите ширину: </br>";
			close.append(input1);
			var label2 = document.createElement("label");
            label2.setAttribute('for', 'input3');
            label2.setAttribute('unselectable', 'on');
            var input2 = document.createElement("input");
            input2.setAttribute('type', 'text');
            input2.setAttribute('name', 'R_Sopr');
            input2.setAttribute('id', 'input3');
            input2.setAttribute('info', k.id);
            input2.setAttribute('class', 'login-input');
			close.append(label2);
			label2.innerHTML = "</br>Введите высоту: </br>";
			close.append(input2);
			input.onchange = function(){
				var kk = document.getElementById(event.target.id);
                var k = graph.getCell(kk.getAttribute('info'));
				k.prop('attrs/headerText/text', event.target.value);
				console.log(k);
				var kkk = document.getElementsByClassName(k.id);	
				var infoText = document.createTextNode(event.target.value);
				var kkkk = kkk[0].firstChild;
				kkkk.data = event.target.value + ":";
				//kk.remove();
				//var close = document.getElementById("infoCont");
				//close.classList.remove('active');
				//$('#infoCont').empty();
			};
			input1.onchange =  function(){
				var kk = document.getElementById(event.target.id);
                var k = graph.getCell(kk.getAttribute('info'));
				var height = k.prop('size/height');
				k.resize(event.target.value,height);
				console.log(k);
				
				//kk.remove();
				//var close = document.getElementById("infoCont");
				//close.classList.remove('active');
				//$('#infoCont').empty();
			};	
			input2.onchange =  function(){
				var kk = document.getElementById(event.target.id);
                var k = graph.getCell(kk.getAttribute('info'));
				var width = k.prop('size/width');
				k.resize(width,event.target.value);
				
			//	kk.remove();
				var close = document.getElementById("infoCont");
				close.classList.remove('active');
				$('#infoCont').empty();
			};
    });
    var imageArray = [];
    imageArray[0] = "background-image:url('assets/img/Razedinitel1.png');";
    imageArray[1] = "background-image:url('assets/img/Vyklyuchatel.png');";
    imageArray[2] = "background-image:url('assets/img/трансформатор1.png');";
    imageArray[3] = "background-image:url('assets/img/amper.png');";
    imageArray[4] = "background-image:url('assets/img/предохранитель.png');";
    imageArray[5] = "background-image:url('assets/img/преобразователь.png');";
    imageArray[6] = "background-image:url('assets/img/img21 (2).png');";
    imageArray[7] = "background-image:url('assets/img/ТТ.png');";
    imageArray[8] = "background-image:url('assets/img/транформатор2.png');";
    imageArray[9] = "background-image:url('assets/img/ZsHrp2ivBS0.jpg');";
    imageArray[10] = "background-image:url('assets/img/ZsHrp2ivBS0.jpg');";
    imageArray[11] = "background-image:url('assets/img/ZsHrp2ivBS0.jpg');";
    // Функция для создания нод
    function createNode(idd) {
        var articleDiv = document.querySelector("div.sidebar");
        var elem = document.createElement("div");
        elem.classList.add('block');
        elem.id = idd;
        elem.setAttribute('style', imageArray[idd]);

        // добавляем элемент в блок div
        articleDiv.appendChild(elem);
    }
    objArray[0].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[0].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[0].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[1].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[1].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[1].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[2].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[2].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[2].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[3].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[3].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[3].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[4].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[4].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[4].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[5].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[5].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[5].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[6].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[6].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[6].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[7].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[7].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[7].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[8].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[8].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[8].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[9].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[9].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[9].addPort({ group: 'port', args: { x: 50, y: 100 } });
    objArray[10].addPort({ group: 'port', args: { x: 0, y: 50 } });
    objArray[10].addPort({ group: 'port', args: { x: 100, y: 50 } });
    objArray[10].addPort({ group: 'port', args: { x: 50, y: 100 } });

    function createClone(idd, cordX, yCoord) {
        if (idd >= 0 && idd <= 12) {
            var rect = objArray[idd].clone();
            rect.position(cordX, yCoord);
            rect.resize(100, 100);
            rect.prop('R_Sopr', 0);
            rect.prop('X_Sopr', 0);
            rect.prop('Volume', 0);
            rect.prop('Section', 0);
            rect.prop('Pos', 0);
            rect.prop('Rank', 0);
            //Уже кастомные!!
			 var articleDiv = document.getElementById("TreeUl");
			 var info = document.createElement('li');
			 info.setAttribute('class',rect.id);
			 info.setAttribute('style','padding-left:10px;');
			 var infoText = document.createTextNode(rect.id);
			 info.appendChild(infoText);
			 articleDiv.appendChild(info);
            rect.addTo(graph);
        }
    }
    //функция инициализации бокового меню
    function initMenu(blockCount) {
        for (var i = 0; i < blockCount; i++) {
            createNode(i);
        }
    }
    // инициализация скриптов
    function initialize() {
        initMenu(9);
		 
    }
    initialize();
    var infoButton = new joint.elementTools.Button({

        markup: [{
            tagName: 'circle',
            selector: 'button',
            attributes: {
                'r': 10,
                'fill': '#001DFF',
                'cursor': 'pointer'
            }
        }, {
            tagName: 'path',
            selector: 'icon',
            attributes: {
                'd': 'M -2 4 2 4 M 0 3 0 0 M -2 -1 1 -1 M -1 -4 1 -4',
                'fill': 'none',
                'stroke': '#FFFFFF',
                'stroke-width': 2,
                'pointer-events': 'none'
            }
        }],
        x: '92%',
        y: '82%',
        offset: {
            x: 0,
            y: 0
        },
        rotate: false,
        action: function(event) {
            if (document.getElementById("Sidebar1").style.width == "250px") closeNav1();
            document.getElementById("Sidebar1").style.width = "250px";
            var articleDiv = document.querySelector("div.info");
            // создаем элемент
            var ii = graph.getCell(this.model.id);
            var h2 = document.createElement('h2');
           
            //создаём input 1
            var label = document.createElement("label");
            label.setAttribute('for', 'input1');
            label.setAttribute('unselectable', 'on');
            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'R_Sopr');
            input.setAttribute('id', 'input1');
            input.setAttribute('value', ii.prop('R_Sopr'));
            input.setAttribute('info', this.model.id);
            input.setAttribute('class', 'login-input');
            //создаём input 2
            var label1 = document.createElement("label");
            label1.setAttribute('for', 'input2');
            label1.setAttribute('unselectable', 'on');
            var input1 = document.createElement("input");
            input1.setAttribute('type', 'text');
            input1.setAttribute('name', 'X_Sopr');
            input1.setAttribute('id', 'input2');
            input1.setAttribute('value', ii.prop('X_Sopr'));
            input1.setAttribute('info', this.model.id);
            input1.setAttribute('class', 'login-input');
            //создаём input 3
            var label2 = document.createElement("label");
            label2.setAttribute('for', 'input3');
            label2.setAttribute('unselectable', 'on');
            var input2 = document.createElement("input");
            input2.setAttribute('type', 'text');
            input2.setAttribute('name', 'Volume');
            input2.setAttribute('id', 'input3');
            input2.setAttribute('value', ii.prop('Volume'));
            input2.setAttribute('info', this.model.id);
            input2.setAttribute('class', 'login-input');
            //создаём input 4
            var label3 = document.createElement("label");
            label3.setAttribute('for', 'input4');
            label3.setAttribute('unselectable', 'on');
            var input3 = document.createElement("input");
            input3.setAttribute('type', 'text');
            input3.setAttribute('name', 'Section');
            input3.setAttribute('id', 'input4');
            input3.setAttribute('value', ii.prop('Section'));
            input3.setAttribute('info', this.model.id);
            input3.setAttribute('class', 'login-input');
            //создаём input 5
            var label4 = document.createElement("label");
            label4.setAttribute('for', 'input5');
            label4.setAttribute('unselectable', 'on');
            var input4 = document.createElement("input");
            input4.setAttribute('type', 'text');
            input4.setAttribute('name', 'Pos');
            input4.setAttribute('id', 'input5');
            input4.setAttribute('value', ii.prop('Pos'));
            input4.setAttribute('info', this.model.id);
            input4.setAttribute('class', 'login-input');
            //создаём input 6
            var label5 = document.createElement("label");
            label5.setAttribute('for', 'input6');
            label5.setAttribute('unselectable', 'on');
            var input5 = document.createElement("input");
            input5.setAttribute('type', 'text');
            input5.setAttribute('name', 'Rank');
            input5.setAttribute('id', 'input6');
            input5.setAttribute('value', ii.prop('Rank'));
            input5.setAttribute('info', this.model.id);
            input5.setAttribute('class', 'login-input');
            var button = document.createElement("button");
            button.setAttribute('type', 'submit');
            button.setAttribute('class', 'custombtn');
            var buttonText = document.createTextNode("Сохранить");
			            var button1 = document.createElement("button");
            button1.setAttribute('type', 'submit');
            button1.setAttribute('class', 'custombtn');
			button1.setAttribute('info', this.model.id);
			button1.onclick = function(event)
			{
				console.log(event.currentTarget.id);
				var kk = document.getElementById(event.target.id);
                var k = graph.getCell(kk.getAttribute('info'));
				k.rotate(90);
			}
            var buttonText1 = document.createTextNode("Повернуть объект");
            // добавляем текст в лейбл
            label.innerHTML = "Активное сопротивление:";
            label1.innerHTML = "Реактивное сопротивление:";
            label2.innerHTML = "Напряжение:";
            label3.innerHTML = "Секция:";
            label4.innerHTML = "Положение:";
            label5.innerHTML = "Ранк:";
            button.appendChild(buttonText);
            button1.appendChild(buttonText1);
            // добавляем элементы в блок div
            articleDiv.appendChild(h2);
            articleDiv.appendChild(label);
            articleDiv.appendChild(input);
            articleDiv.appendChild(label1);
            articleDiv.appendChild(input1);
            articleDiv.appendChild(label2);
            articleDiv.appendChild(input2);
            articleDiv.appendChild(label3);
            articleDiv.appendChild(input3);
            articleDiv.appendChild(label4);
            articleDiv.appendChild(input4);
            articleDiv.appendChild(label5);
            articleDiv.appendChild(input5);
            articleDiv.appendChild(button);
            articleDiv.appendChild(button1);
            //Задаём функцию для формы input
            input.onchange = input1.onchange = input2.onchange = input3.onchange = input4.onchange = input5.onchange = function(event) {
                var kk = document.getElementById(event.target.id);
                var k = graph.getCell(kk.getAttribute('info'));
                k.prop(kk.name, event.target.value);
				console.log(k);
            }
        }
    });
	var info1Button = new joint.elementTools.Button({

        markup: [{
            tagName: 'circle',
            selector: 'button',
            attributes: {
                'r': 10,
                'fill': '#001DFF',
                'cursor': 'pointer'
            }
        }, {
            tagName: 'path',
            selector: 'icon',
            attributes: {
                'd': 'M -3 4 4 4 M 4 2 3 2 M -3 -4 4 -4 M -2 -2 -3 -2 M -4 -4 -4 -4 M -2 -2 -3 -2',
                'fill': 'none',
                'stroke': '#FFFFFF',
                'stroke-width': 2,
                'pointer-events': 'none'
            }
        }],
        x: '90%',
        y: '14%',
        offset: {
            x: 0,
            y: 0
        },
        rotate: false,
        action: function(event) {
			
			var k = graph.getCell(this.model.id);
			console.log(k);
		k.rotate(90);
		}
    });

    var boundaryTool = new joint.elementTools.Boundary({
        padding: 15,
        strokeDasharray: '4 2',
        rotate: false,
        useModelGeometry: true,
    });
    var removeButton = new joint.elementTools.Remove({
        markup: [{
            tagName: 'circle',
            selector: 'button',
            attributes: {
                'r': 10,
                'fill': '#FFFFFF',
                'cursor': 'pointer',
                'stroke': 'black'
            }
        }, {
            tagName: 'path',
            selector: 'icon',
            attributes: {
                'd': 'M -4 -4 4 4 M -4 4 4 -4',
                'fill': '#000000',
                'stroke': '#000000',
                'stroke-width': 2,
                'pointer-events': 'none'
            }
        }],
        x: '8%',
        y: '8%',
        rotate: false,
		action: function(evt, elementView, toolView) {
		
    elementView.model.remove({ ui: true, tool: toolView.cid });
	var k = document.getElementsByClassName(this.model.id);
	k[0].remove();
} 
    });

    var verticesTool = new joint.linkTools.Vertices();
    var segmentsTool = new joint.linkTools.Segments();
    var sourceArrowheadTool = new joint.linkTools.SourceArrowhead();
    var targetArrowheadTool = new joint.linkTools.TargetArrowhead();
    var sourceAnchorTool = new joint.linkTools.SourceAnchor();
    var targetAnchorTool = new joint.linkTools.TargetAnchor();
    var LinkboundaryTool = new joint.linkTools.Boundary();
    var LinkremoveButton = new joint.linkTools.Remove();
    var LinkinfoButton = new joint.linkTools.Button({

        markup: [{
            tagName: 'circle',
            selector: 'button',
            attributes: {
                'r': 10,
                'fill': '#001DFF',
                'cursor': 'pointer'
            }
        }, {
            tagName: 'path',
            selector: 'icon',
            attributes: {
                'd': 'M -2 4 2 4 M 0 3 0 0 M -2 -1 1 -1 M -1 -4 1 -4',
                'fill': 'none',
                'stroke': '#FFFFFF',
                'stroke-width': 2,
                'pointer-events': 'none'
            }
        }],
        distance: 11,
        offset: 0,
        rotate: false,
        action: function(event) {
            if (document.getElementById("Sidebar1").style.width == "250px") closeNav1();
            document.getElementById("Sidebar1").style.width = "250px";
            var articleDiv = document.querySelector("div.info");
            // создаем элемент
            var ii = graph.getCell(this.model.id);
            var h2 = document.createElement('h2');
           
            //создаём input 1
            var label = document.createElement("label");
            label.setAttribute('for', 'input1');
            label.setAttribute('unselectable', 'on');
            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'R_Sopr');
            input.setAttribute('id', 'input1');
            input.setAttribute('value', ii.prop('R_Sopr'));
            input.setAttribute('info', this.model.id);
            input.setAttribute('class', 'login-input');
            //создаём input 2
            var label1 = document.createElement("label");
            label1.setAttribute('for', 'input2');
            label1.setAttribute('unselectable', 'on');
            var input1 = document.createElement("input");
            input1.setAttribute('type', 'text');
            input1.setAttribute('name', 'X_Sopr');
            input1.setAttribute('id', 'input2');
            input1.setAttribute('value', ii.prop('X_Sopr'));
            input1.setAttribute('info', this.model.id);
            input1.setAttribute('class', 'login-input');
            //создаём input 3
            var label2 = document.createElement("label");
            label2.setAttribute('for', 'input3');
            label2.setAttribute('unselectable', 'on');
            var input2 = document.createElement("input");
            input2.setAttribute('type', 'text');
            input2.setAttribute('name', 'Volume');
            input2.setAttribute('id', 'input3');
            input2.setAttribute('value', ii.prop('Volume'));
            input2.setAttribute('info', this.model.id);
            input2.setAttribute('class', 'login-input');
            //создаём input 4
            var label3 = document.createElement("label");
            label3.setAttribute('for', 'input4');
            label3.setAttribute('unselectable', 'on');
            var input3 = document.createElement("input");
            input3.setAttribute('type', 'text');
            input3.setAttribute('name', 'Section');
            input3.setAttribute('id', 'input4');
            input3.setAttribute('value', ii.prop('Section'));
            input3.setAttribute('info', this.model.id);
            input3.setAttribute('class', 'login-input');
            //создаём input 5
            var label4 = document.createElement("label");
            label4.setAttribute('for', 'input5');
            label4.setAttribute('unselectable', 'on');
            var input4 = document.createElement("input");
            input4.setAttribute('type', 'text');
            input4.setAttribute('name', 'Pos');
            input4.setAttribute('id', 'input5');
            input4.setAttribute('value', ii.prop('Pos'));
            input4.setAttribute('info', this.model.id);
            input4.setAttribute('class', 'login-input');
            //создаём input 6
            var label5 = document.createElement("label");
            label5.setAttribute('for', 'input6');
            label5.setAttribute('unselectable', 'on');
            var input5 = document.createElement("input");
            input5.setAttribute('type', 'text');
            input5.setAttribute('name', 'Rank');
            input5.setAttribute('id', 'input6');
            input5.setAttribute('value', ii.prop('Rank'));
            input5.setAttribute('info', this.model.id);
            input5.setAttribute('class', 'login-input');
            var button = document.createElement("button");
            button.setAttribute('type', 'submit');
            button.setAttribute('class', 'custombtn');
            var buttonText = document.createTextNode("Сохранить");
            // добавляем текст в лейбл
            label.innerHTML = "Активное сопротивление:";
            label1.innerHTML = "Реактивное сопротивление:";
            label2.innerHTML = "Напряжение:";
            label3.innerHTML = "Секция:";
            label4.innerHTML = "Положение:";
            label5.innerHTML = "Ранк:";
            button.appendChild(buttonText);
            // добавляем элементы в блок div
            articleDiv.appendChild(h2);
            articleDiv.appendChild(label);
            articleDiv.appendChild(input);
            articleDiv.appendChild(label1);
            articleDiv.appendChild(input1);
            articleDiv.appendChild(label2);
            articleDiv.appendChild(input2);
            articleDiv.appendChild(label3);
            articleDiv.appendChild(input3);
            articleDiv.appendChild(label4);
            articleDiv.appendChild(input4);
            articleDiv.appendChild(label5);
            articleDiv.appendChild(input5);
            articleDiv.appendChild(button);
            //Задаём функцию для формы input
            input.onchange = input1.onchange = input2.onchange = input3.onchange = input4.onchange = input5.onchange = function(event) {
                var kk = document.getElementById(event.target.id);
                var k = graph.getCell(kk.getAttribute('info'));
                k.prop(kk.name, event.target.value);
				console.log(k);
            }
        }
    });

    var toolsView = new joint.dia.ToolsView({
        tools: [boundaryTool, removeButton, infoButton,info1Button]
    });
    paper.on({
        'element:mouseenter': function(elementView) {
			if(elementView.model.prop('elementTools')==false) return;
            elementView.addTools(toolsView);
        },
        'element:mouseleave': function(elementView) {
            elementView.removeTools();
        }
    });

    var LinktoolView = new joint.dia.ToolsView({
        tools: [
            verticesTool, segmentsTool,
            sourceAnchorTool, targetAnchorTool,
            LinkboundaryTool, LinkremoveButton, LinkinfoButton
        ]
    });
    paper.on('link:mouseenter', function(linkView) {
	        linkView.addTools(LinktoolView);
    });

    paper.on('link:mouseleave', function(linkView) {
        linkView.removeTools();
    });
	var scale = 1;
paper.on({
        'blank:mousewheel': function(event, x, y,delta) {
			
         if (delta > 0) scale += 0.1;
      else scale -= 0.1;
	  paper.scale(scale);
        }
});
paper.on({
        'blank:pointerdown': function(event, x, y) {
			paper.$el.addClass('connecting');
			 var scale = paper.scale();
		dragStartPosition = { x: x * scale.sx, y: y * scale.sy};
          $("#paper").mousemove(function(event) {
        if (dragStartPosition)
            paper.translate(
                event.offsetX - dragStartPosition.x, 
                event.offsetY - dragStartPosition.y);
    });	
        },
	'blank:pointerup': function(cellView, x, y) {
    delete dragStartPosition;
        paper.$el.removeClass('connecting')
         }
});
  paper.on('element:pointermove', function(elementView) {
        var element = elementView.model;
        fitAncestors(element);
    });

    function fitAncestors(element) {
        element.getAncestors().forEach(function(container) {
            container.fitChildren();
        });
	}

})