$(document).ready(function($) {
    var Container = joint.shapes.container.Parent;
    var Disconnector = joint.shapes.container.Disconnector;
    /*Анимация сайдбара*/
    $("#openbtn").click(function() {

            $('#sidebarContainer').toggleClass('sidebarAnimate');
            $('#Sidebar').toggleClass('openSidebar');
            $('#toolbarbtn').toggleClass('openSidebar');
        })
        /*/Анимация сайдбара*/
    $("#closeinfo").click(function() {
        $('#Sidebar1').removeClass('sidebar1Animate');
        $('#info').empty();
    })

    document.getElementById('todownload').onclick = function() {
            let text = JSON.stringify(graph.toJSON());
            let myData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
            this.href = myData;
            this.download = 'data.txt';
        }
        //Функция созхранения схемы
    document.getElementById("tostore").onchange = function() {

            let file = this.files[0];

            let reader = new FileReader();

            reader.readAsText(file);

            reader.onload = function() {
                graph.fromJSON(JSON.parse(reader.result));
            }
        }
        //Двойной клик на объект спавнит его на полотне
    $('#Sidebar').on("dblclick", function(event) {

        createClone(event.target.id, 200, 100);
    });
    //Центрует объект при двойном клике в дереве иерархий
    $('ul').dblclick(function() {
        var temp = graph.getCell(event.target.className);
        var tempcord = temp.prop('position');

        var wh = $(window).height() / 2;
        var ww = $(window).width() / 2;
        var scale = paper.scale();
        var scx = (ww) - tempcord.x * scale.sx - temp.prop('size/width');
        var scy = (wh) - tempcord.y * scale.sx - temp.prop('size/height');
        paper.translate(scx, scy);

    });
    //Появление и скрытие окна выбора фазы(2-х фазный, 3-х фазный)
    $('#button2faza').click(function() {
        $('#kzclose').toggleClass('active');
        $('#RaschetTP').toggleClass('active');
        let obj = graph.getCells();
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].prop('attrs/label/text') != 'Разъединитель' && obj[i].prop('attrs/label/text') != 'Контейнер') {

                if (obj[i].prop('Name') != 2) {
                    for (let j = 0; j < infoArrayTest.length; j++) {
                        if (infoArrayTest[j][14] != 0 && typeof(infoArrayTest[j][14]) == "number") {
                            if (obj[i].id == infoArrayTest[j][1]) {
                                if (infoArrayTest[j][15] != 0 && typeof(infoArrayTest[j][15]) == "number" && infoArrayTest[j][15] === infoArrayTest[j][15]) {
                                    obj[i].prop('attrs/label/text', infoArrayTest[j][15]);
                                    obj[i].prop('attrs/label/refX', '0%');
                                    obj[i].prop('attrs/label/refY', '75%');
                                } else {
                                    obj[i].prop('attrs/label/text', infoArrayTest[j][14]);
                                    obj[i].prop('attrs/label/refX', '0%');
                                    obj[i].prop('attrs/label/refY', '75%');
                                }
                            }
                        }
                    }
                } else {
                    for (let j = 0; j < infoArrayTest.length; j++) {

                        if (obj[i].id == infoArrayTest[j][1]) {
                            if (infoArrayTest[j][15] != 0 && typeof(infoArrayTest[j][15]) == "number" && infoArrayTest[j][15] === infoArrayTest[j][15]) {
                                obj[i].prop('attrs/label/text', infoArrayTest[j][15]);
                                obj[i].prop('attrs/label/refX', '0%');
                                obj[i].prop('attrs/label/refY', '75%');
                            }
                        }

                    }
                }
            }
        }

    });
    //Кнопка закрытия окна результатов расчёта КЗ
    $('#kzclose').click(function() {
        $('#kzclose').toggleClass('active');
        let obj = graph.getCells();
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].prop('attrs/label/text') != 'Разъединитель' && obj[i].prop('attrs/label/text') != 'Контейнер')
                obj[i].prop('attrs/label/text', '');
        }
    });

    let rkz = 0;

    var SubgraphShape = joint.shapes.standard.BorderedImage;
    //Создание массива для хранения объектов
    var objArray = [];
    /*Объявление каждого объекта*/
    objArray[0] = new Disconnector({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,

        size: { width: 500, height: 500 },

        elementToolsDisconnect: true,
        attrs: { label: { text: "Разъединитель", class: "containerText" } }

    });
    objArray[14] = new Disconnector({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        elementToolsDisconnect: true,
        size: { width: 500, height: 500 },

        attrs: { label: { text: "Разъединитель", class: "containerText" } }

    });
    objArray[15] = new Disconnector({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,

        size: { width: 500, height: 500 },

        elementToolsDisconnect: true,
        attrs: { label: { text: "Разъединитель", class: "containerText" } }

    });
    objArray[16] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 1,
        size: {
            width: 70,
            height: 70
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
                xlinkHref: 'assets/img/Источник.png'
            }
        },
        ports: {
            items: [{
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[17] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 3,
        size: {
            width: 70,
            height: 70
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
                xlinkHref: 'assets/img/резистор.png'
            }
        },
        ports: {
            items: [{
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[17] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 3,
        size: {
            width: 70,
            height: 70
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
                xlinkHref: 'assets/img/резистор.png'
            }
        },
        ports: {
            items: [{
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[1] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 8,
        size: {
            width: 70,
            height: 70
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
                id: 'top',
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
                        args: { dr: 0, dx: 26, dy: -5 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });

    objArray[2] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 7,
        size: {
            width: 70,
            height: 70
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[3] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 13,
        size: {
            width: 70,
            height: 70
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[4] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 11,
        size: {
            width: 70,
            height: 70
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[5] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 12,
        size: {
            width: 70,
            height: 70
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
                xlinkHref: 'assets/img/Выпрямитель.png'
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[6] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 9,
        size: {
            width: 70,
            height: 70
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[7] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 6,
        size: {
            width: 70,
            height: 70
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[8] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 10,
        size: {
            width: 70,
            height: 70
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[9] = new joint.shapes.standard.Circle({
        z: 2,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 2,
        size: {
            width: 70,
            height: 70
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
                id: 'top',
                group: 'port'
            }],
            groups: {
                port: {
                    id: 'port',
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody'
                    }],
                    position: {
                        name: 'top',
                        args: { dr: 0, dx: 4, dy: -16 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[10] = new joint.shapes.standard.Image({
        z: 1,
        R_Sopr: 0,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        size: {
            width: 70,
            height: 70
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
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[11] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0.001,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 5,
        size: {
            width: 70,
            height: 70
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
                xlinkHref: 'assets/img/ВыклРазъед.png'
            }
        },
        ports: {

            items: [{
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[12] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0.001,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 5,
        size: {
            width: 65,
            height: 70
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
                xlinkHref: 'assets/img/Сзаземлением.png'
            }
        },
        ports: {

            items: [{
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    objArray[13] = new joint.shapes.standard.Image({
        z: 2,
        R_Sopr: 0.001,
        X_Sopr: 0,
        Volume: 0,
        Section: 0,
        Pos: 0,
        Rank: 0,
        Modul: 0,
        inid1: 0,
        inid2: 0,
        inid3: 0,
        inid4: 0,
        Name: 5,
        size: {
            width: 70,
            height: 70
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
                xlinkHref: 'assets/img/ВыклРазъед1.png'
            }
        },
        ports: {

            items: [{
                id: 'top',
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
                        args: { dr: 0, dx: 27, dy: 0 }
                    },
                    attrs: {
                        portBody: {
                            r: 9,
                            magnet: 'active',
                            fill: '#FFFFFF',
                            stroke: '#187BD3',
                            'in.id': 1
                        }
                    }
                }
            }
        }
    });
    /*******************/
    //Создание графа на котором хранятся объекты
    var graph = new joint.dia.Graph;
    //Создание полотная для взаимодейтсвия с объектами
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
        //Функция встраивания объекта в другой объект
        validateEmbedding: function(childView, parentView) {
            if (parentView.model instanceof joint.shapes.container.Disconnector)
                return parentView.model instanceof joint.shapes.container.Disconnector;
            if (childView === parentView || (childView.model instanceof joint.shapes.standard.Image && parentView.model instanceof joint.shapes.standard.Image) || (childView.model instanceof joint.shapes.container.Disconnector && parentView.model instanceof joint.shapes.standard.Image)) return false;
            var parent = parentView.model;
            var parentTree = document.getElementsByClassName(parent.id);
            var child = childView.model;
            var childTree = document.getElementsByClassName(child.id);
            console.log(child);
            if (child.prop('type') == parent.prop('type')) parentTree[0].append(childTree[0]);
            else {
                var obj = parentTree[0].firstChild;
                parentTree[0].prepend(childTree[0]);
                parentTree[0].prepend(obj);
            }
            return parentView.model instanceof joint.shapes.container.Parent, joint.shapes.container.Disconnector;
        },
        //Функция извлечение объекта из другого объекта
        validateUnembedding: function(childView) {
            var child = childView.model;
            var childTree = document.getElementsByClassName(child.id);
            var obj = document.getElementById('TreeUl');
            if (childTree[0] != undefined)
                obj.prepend(childTree[0]);
            return true;

        },
        //Функция ожидания подключения одно объекта к другому
        validateConnection: function(cellViewS, magnetS /*Порт от которого идёт*/ , cellViewT, magnetT /*Порт к которому идёт*/ , end, linkView) { //Добавлять к cellview атрибут model, иначе выводит всю сетку объекта
            if (cellViewS === cellViewT) return false;
            cellViewS.model.prop('inid' + magnetS.getAttribute("in.id"), cellViewT.model.id);
            cellViewT.model.prop('inid' + magnetT.getAttribute("in.id"), cellViewS.model.id);
            return magnetT;
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
    //Сворачиваение уровня в дереве иерархии
    $('ul').click(function() {
        if (event.target.id == "NotExpand") return;
        var elem = event.target;
        for (var i = 0; i < elem.childNodes.length; i++) {
            if (elem.childNodes[i].id == "NotExpand" || elem.childNodes[i].id == "UlTree") {
                if (elem.childNodes[i].classList.contains('expand') == false) {
                    elem.classList.remove('show');
                    elem.classList.add('hide');
                } else {
                    elem.classList.add('show');
                    elem.classList.remove('hide');
                }
                elem.childNodes[i].classList.toggle('expand');

            }
        }

    });
    //Функция создания линий между двумя объектами
    var connect = function(source, sourcePort, target, targetPort) {

        var link = new joint.shapes.devs.Link({
            z: 2,
            source: {
                id: source.id,
                port: sourcePort
            },
            target: {
                id: target.id,
                port: targetPort
            }
        });
        link.addTo(graph).reparent();
    };
    //Создание пустого контейнера на полотне
    document.getElementById('crtCont').addEventListener('click', () => {
        var container_a = new Container({
            z: 2,
            size: { width: 500, height: 500 },

            elementTools: false,
            attrs: { label: { text: "Контейнер", class: "containerText" } }
        });
        container_a.translate($(window).width() / 3, $(window).height() / 4);
        var articleDiv = document.getElementById("TreeUl");
        var info = document.createElement('ul');
        info.setAttribute('class', container_a.id);
        info.setAttribute('id', 'UlTree');
        info.setAttribute('style', ' padding-left:10px;');
        info.classList.add('show');
        info.innerHTML = container_a.prop('attrs/label/text') + ":";
        articleDiv.append(info);
        graph.addCell(container_a);
    });
    //Сворачивание разъединителя
    paper.on('element:disconnect:pointerdown', function(elementView) {
        var element = elementView.model;
        element.toggle();
        fitAncestors(element);
    });
    //Появление кнопки с информацией о контейнере
    paper.on('element:button:pointerdown', function(elementView) {
        var obj = elementView.model;
        var close = document.getElementById("infoCont");
        if (close.getAttribute('class') == "active") {
            close.classList.remove('active');
            $('#infoCont').empty();
        } else {
            close.classList.add('active');
            var articleDiv = document.getElementById('Tree');
            var label = document.createElement("label");
            label.setAttribute('for', 'input1');
            label.setAttribute('unselectable', 'on');
            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'R_Sopr');
            input.setAttribute('id', 'input1');
            input.setAttribute('value', obj.prop('attrs/label/text'));
            input.setAttribute('info', obj.id);
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
            input1.setAttribute('value', obj.prop('size/width'));
            input1.setAttribute('info', obj.id);
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
            input2.setAttribute('value', obj.prop('size/height'));
            input2.setAttribute('info', obj.id);
            input2.setAttribute('class', 'login-input');
            close.append(label2);
            label2.innerHTML = "</br>Введите высоту: </br>";
            close.append(input2);
            input.onchange = function() {
                var value = document.getElementById(event.target.id);
                var obj = graph.getCell(value.getAttribute('info'));
                obj.prop('attrs/label/text', event.target.value);
                console.log(obj);
                var valueobj = document.getElementsByClassName(obj.id);
                // var infoText = document.createTextNode(event.target.value);
                var valuetemp = valueobj[0].firstChild;
                valuetemp.data = event.target.value + ":";
                //value.remove();
                //var close = document.getElementById("infoCont");
                //close.classList.remove('active');
                //$('#infoCont').empty();
            };
            var labeldel = document.createElement("label");
            labeldel.innerHTML = "</br>";
            var DeleteButton = document.createElement('button');
            DeleteButton.setAttribute('object', obj.id);
            DeleteButton.setAttribute('type', 'submit');
            var buttonText = document.createTextNode("Удалить контейнер");
            DeleteButton.setAttribute('id', 'Deleteutton');
            DeleteButton.append(buttonText);
            close.append(labeldel);
            close.append(DeleteButton);
            //Функция удаления объекта при нажатии на кнопку
            DeleteButton.onclick = function() {
                    var value = document.getElementById(event.target.id);
                    console.log(value);
                    var obj = graph.getCell(value.getAttribute('object'));
                    obj.remove();
                    var cont = document.getElementsByClassName(obj.id);
                    cont[0].remove();
                    var close = document.getElementById("infoCont");
                    close.classList.remove('active');
                    $('#infoCont').empty();
                }
                //Функция изменения высоты контейнера
            input1.onchange = function() {
                var value = document.getElementById(event.target.id);
                var obj = graph.getCell(value.getAttribute('info'));
                var height = obj.prop('size/height');
                obj.resize(event.target.value, height);

                //value.remove();
                //var close = document.getElementById("infoCont");
                //close.classList.remove('active');
                //$('#infoCont').empty();
            };
            //Функция изменения ширины контейнера
            input2.onchange = function() {
                var value = document.getElementById(event.target.id);
                var obj = graph.getCell(value.getAttribute('info'));
                var width = obj.prop('size/width');
                obj.resize(width, event.target.value);

                //	value.remove();
                var close = document.getElementById("infoCont");
                close.classList.remove('active');
                $('#infoCont').empty();
            };
        }
    });
    //Массив хранящий изображения объектов
    var imageArray = [];
    //Присваивание изображений
    imageArray[0] = "background-image:url('assets/img/Razedinitel1.png');";
    imageArray[1] = "background-image:url('assets/img/Vyklyuchatel.png');";
    imageArray[2] = "background-image:url('assets/img/трансформатор1.png');";
    imageArray[3] = "background-image:url('assets/img/amper.png');";
    imageArray[4] = "background-image:url('assets/img/предохранитель.png');";
    imageArray[5] = "background-image:url('assets/img/Выпрямитель.png');";
    imageArray[6] = "background-image:url('assets/img/img21 (2).png');";
    imageArray[7] = "background-image:url('assets/img/ТТ.png');";
    imageArray[8] = "background-image:url('assets/img/транформатор2.png');";
    imageArray[9] = "background-image:url('assets/img/узел.jpg');";
    imageArray[10] = "background-image:url('assets/img/ZsHrp2ivBS0.jpg');";
    imageArray[13] = "background-image:url('assets/img/ВыклРазъед1.png');";
    imageArray[14] = "background-image:url('assets/img/Razedinitel1.png');";
    imageArray[15] = "background-image:url('assets/img/Razedinitel1.png');";
    imageArray[16] = "background-image:url('assets/img/Источник.png');";
    imageArray[17] = "background-image:url('assets/img/резистор.png');";
    //imageArray[11] = "background-image:url('assets/img/ZsHrp2ivBS0.jpg');";
    // Функция для создания нод
    function createNode(idd) {
        var articleDiv = document.querySelector("div.sidebar");
        var elem = document.createElement("div");
        elem.classList.add('block');
        elem.id = idd;
        elem.setAttribute('style', imageArray[idd]);
        // добавляем элемент в блок div
        articleDiv.append(elem);
    }
    //Создание портов для объектов
    objArray[1].addPort({ id: 'left', group: 'port', args: { x: -5, y: 34 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[1].addPort({ id: 'right', group: 'port', args: { x: 75, y: 34 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[1].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 74 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[2].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[2].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[2].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[3].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[3].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[3].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[4].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[4].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[4].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[5].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[5].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[5].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[6].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[6].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[6].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[7].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[7].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[7].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[8].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[8].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[8].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[9].addPort({ id: 'left', group: 'port', args: { x: -15, y: 4 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[9].addPort({ id: 'right', group: 'port', args: { x: 25, y: 4 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[9].addPort({ id: 'bot', group: 'port', args: { x: 5, y: 25 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[10].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[10].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[10].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[11].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[11].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[11].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[12].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[12].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[12].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[13].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[13].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[13].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[16].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[16].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[16].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    objArray[17].addPort({ id: 'left', group: 'port', args: { x: 0, y: 35 }, attrs: { portBody: { 'in.id': 3 } } });
    objArray[17].addPort({ id: 'right', group: 'port', args: { x: 70, y: 35 }, attrs: { portBody: { 'in.id': 4 } } });
    objArray[17].addPort({ id: 'bot', group: 'port', args: { x: 35, y: 70 }, attrs: { portBody: { 'in.id': 2 } } });
    //Функция создания объектов на полотне
    function createClone(idd, cordX, yCoord) {
        let str;
        if (idd >= 0 && idd <= 17) {
            var rect = objArray[idd].clone();
            rect.position(cordX, yCoord);
            if (idd == 9) {
                rect.resize(11, 11);
            }
            //Если объект разъединитель с 3 ключами
            if (idd == 0 || idd == 14 || idd == 15) {
                if (idd == 0) {
                    var switch1 = objArray[13].clone();
                    var switch2 = objArray[12].clone();
                    var switch3 = objArray[12].clone();
                    var node1 = objArray[9].clone();
                    node1.resize(11, 11);
                    switch2.prop('Grounding', 1);
                    switch3.prop('Grounding', 1);
                    var node2 = objArray[9].clone();
                    node2.resize(11, 11);

                    node1.prop('inid2', switch1.id);
                    node1.prop('inid4', switch2.id);
                    switch1.prop('inid1', node1.id);
                    switch1.prop('inid4', node2.id);
                    switch2.prop('inid3', node1.id);
                    switch3.prop('inid3', node2.id);
                    node2.prop('inid1', switch1.id);
                    node2.prop('inid4', switch3.id);
                    rect.resize(270, 400);
                    var articleDiv = document.getElementById("TreeUl");
                    var info = document.createElement('li');
                    info.setAttribute('class', rect.id);
                    info.setAttribute('id', 'NotExpand');
                    info.setAttribute('style', 'padding-left:10px;');
                    var infoText = document.createTextNode(rect.id);
                    info.append(infoText);
                    articleDiv.append(info);
                    switch1.position(250, 300);
                    switch2.position(350, 200);
                    switch3.position(350, 400);
                    node1.position(280, 230);
                    node2.position(280, 430);
                    //objArray[0].embed(clone);
                    graph.addCells([rect, switch1, switch2, switch3, node1, node2]);
                    str = switch1.id + switch2.id + switch3.id;
                    switch1.prop('str', str);
                    switch2.prop('str', str);
                    switch3.prop('str', str);
                    rect.embed(switch1);
                    rect.embed(switch2);
                    rect.embed(switch3);
                    rect.embed(node1);
                    rect.embed(node2);
                    connect(node1, 'bot', switch1, 'top');
                    connect(node1, 'right', switch2, 'left');
                    connect(node2, 'top', switch1, 'bot');
                    connect(node2, 'right', switch3, 'left');
                }
                //Если объект разъединитель с 2 ключами
                if (idd == 14) {
                    var switch1 = objArray[11].clone();
                    var switch2 = objArray[12].clone();
                    var node1 = objArray[9].clone();
                    node1.resize(11, 11);
                    node1.prop('inid2', switch1.id);
                    node1.prop('inid4', switch2.id);
                    switch1.prop('inid1', node1.id);
                    switch2.prop('inid3', node1.id);
                    switch2.prop('Grounding', 1);
                    switch1.prop('Grounding', 0);
                    switch1.prop('Vertical', 1);
                    rect.resize(270, 300);
                    var articleDiv = document.getElementById("TreeUl");
                    var info = document.createElement('li');
                    info.setAttribute('class', rect.id);
                    info.setAttribute('id', 'NotExpand');
                    info.setAttribute('style', 'padding-left:10px;');
                    var infoText = document.createTextNode(rect.id);
                    info.append(infoText);
                    articleDiv.append(info);
                    switch1.position(250, 300);
                    switch2.position(350, 200);
                    node1.position(277, 227);
                    //objArray[0].embed(clone);
                    graph.addCells([rect, switch1, switch2, node1]);
                    str = switch1.id + switch2.id;
                    switch1.prop('str', str);
                    switch2.prop('str', str);
                    rect.embed(switch1);
                    rect.embed(switch2);
                    rect.embed(node1);
                    connect(node1, 'bot', switch1, 'top');
                    connect(node1, 'right', switch2, 'left');
                }
                //Если объект разъединитель с 1 ключём и узлом
                if (idd == 15) {
                    var switch1 = objArray[13].clone();
                    switch1.prop("attrs/image/xlinkHref", "assets/img/СзаземлениемГоризонт.png");
                    switch1.resize(70, 60);
                    var node1 = objArray[9].clone();
                    node1.resize(11, 11);
                    node1.prop('inid2', switch1.id);
                    switch1.prop('inid1', node1.id);
                    switch1.prop('Grounding', 1);
                    switch1.prop('Vertical', 1);
                    rect.resize(150, 300);
                    var articleDiv = document.getElementById("TreeUl");
                    var info = document.createElement('li');
                    info.setAttribute('class', rect.id);
                    info.setAttribute('id', 'NotExpand');
                    info.setAttribute('style', 'padding-left:10px;');
                    var infoText = document.createTextNode(rect.id);
                    info.append(infoText);
                    articleDiv.append(info);
                    switch1.position(250, 300);
                    node1.position(277, 227);
                    graph.addCells([rect, switch1, node1]);
                    str = switch1.id;
                    switch1.prop('str', str);
                    rect.embed(switch1);
                    rect.embed(node1);
                    connect(node1, 'bot', switch1, 'top');
                }
            }
            //Все остальные объекты
            else {
                //rect.resize(70, 70);
                //Уже кастомные!!
                var articleDiv = document.getElementById("TreeUl");
                var info = document.createElement('li');
                info.setAttribute('class', rect.id);
                info.setAttribute('id', 'NotExpand');
                info.setAttribute('style', 'padding-left:10px;');
                var infoText = document.createTextNode(rect.id);
                info.append(infoText);
                articleDiv.append(info);
                rect.addTo(graph);
            }
        }
    }
    //функция инициализации бокового меню
    function initMenu(blockCount) {
        for (var i = 0; i < blockCount; i++) {
            createNode(i);
            if (i == blockCount - 1) {
                createNode(14);
                createNode(13);
                createNode(15);
                createNode(16);
                createNode(17);
            }
        }
    }
    // инициализация скриптов
    function initialize() {
        initMenu(10);

    }
    initialize();
    //

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
        x: '82%',
        y: '78%',
        offset: {
            x: 0,
            y: 0
        },
        rotate: false,
        //Функция появления информации о объекте при нажатии на кнопку
        action: function(event, elementView) {
            if ($("#Sidebar1").hasClass('sidebar1Animate') === true) {

                $('#info').empty();
            }
            $("#Sidebar1").addClass("sidebar1Animate");

            let cells = graph.getCells();
            var articleDiv = document.querySelector("div.info");
            // создаем элемент
            //articleDiv.setAttribute('style', "display:flex");
            var obj = graph.getCell(this.model.id);
            var h2 = document.createElement('h2');
            //создаём input 1
            var label = document.createElement("label");
            label.setAttribute('for', 'input1');
            label.setAttribute('unselectable', 'on');
            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'R_Sopr');
            input.setAttribute('id', 'input1');
            input.setAttribute('value', obj.prop('R_Sopr'));
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
            input1.setAttribute('value', obj.prop('X_Sopr'));
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
            input2.setAttribute('value', obj.prop('Volume'));
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
            input3.setAttribute('value', obj.prop('Section'));
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
            input4.setAttribute('value', obj.prop('Pos'));
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
            input5.setAttribute('value', obj.prop('Rank'));
            input5.setAttribute('info', this.model.id);
            input5.setAttribute('class', 'login-input');
            var label6 = document.createElement("label");
            label6.setAttribute('for', 'input7');
            label6.setAttribute('unselectable', 'on');
            var input6 = document.createElement("input");
            input6.setAttribute('type', 'text');
            input6.setAttribute('name', 'Modul');
            input6.setAttribute('id', 'input7');
            input6.setAttribute('value', obj.prop('Modul'));
            input6.setAttribute('info', this.model.id);
            input6.setAttribute('class', 'login-input');
            var button = document.createElement("button");
            button.setAttribute('type', 'submit');
            button.setAttribute('class', 'custombtn');
            var buttonText = document.createTextNode("Сохранить");
            var button1 = document.createElement("button");
            button1.setAttribute('type', 'submit');
            button1.setAttribute('class', 'custombtn');
            button1.setAttribute('info', this.model.id);
            button1.setAttribute('id', 'raschetTP');
            var buttonText1 = document.createTextNode("Рассчитать КЗ");
            // добавляем текст в лейбл
            label.innerHTML = "Активное сопротивление:";
            label1.innerHTML = "Реактивное сопротивление:";
            label2.innerHTML = "Напряжение:";
            label3.innerHTML = "Секция:";
            label4.innerHTML = "Положение:";
            label5.innerHTML = "Ранк:";
            label6.innerHTML = "Модуль:";
            button.append(buttonText);
            button1.append(buttonText1);
            // добавляем элементы в блок div
            articleDiv.append(h2);
            articleDiv.append(label);
            articleDiv.append(input);
            articleDiv.append(label1);
            articleDiv.append(input1);
            articleDiv.append(label2);
            articleDiv.append(input2);
            articleDiv.append(label6);
            articleDiv.append(input6);
            articleDiv.append(label3);
            articleDiv.append(input3);
            articleDiv.append(label4);
            articleDiv.append(input4);
            articleDiv.append(label5);
            articleDiv.append(input5);
            //Если у объекта есть заземление, добавляем ему ещё один input
            if (elementView.model.prop('Grounding') == 1 || elementView.model.prop('Grounding') == 0) {
                var inputGround = document.createElement("input");
                inputGround.setAttribute('type', 'text');
                inputGround.setAttribute('name', 'Grounding');
                inputGround.setAttribute('id', 'inputGround');
                inputGround.setAttribute('value', obj.prop('Grounding'));
                inputGround.setAttribute('info', this.model.id);
                inputGround.setAttribute('class', 'login-input');
                var labelGround = document.createElement("label");
                labelGround.innerHTML = "Заземление";
                articleDiv.append(labelGround);
                articleDiv.append(inputGround);
                inputGround.onchange = function(event) {
                    var value = document.getElementById(event.target.id);
                    var obj = graph.getCell(value.getAttribute('info'));
                    if (obj.prop('Vertical') == 1) {
                        if (event.target.value == 1)
                            obj.prop('attrs/image/xlinkHref', 'assets/img/СзаземлениемГоризонт.png');
                        if (event.target.value == 0)
                            obj.prop('attrs/image/xlinkHref', 'assets/img/ВыклРазъед1.png');
                    } else {
                        if (event.target.value == 1)
                            obj.prop('attrs/image/xlinkHref', 'assets/img/Сзаземлением.png');
                        if (event.target.value == 0)
                            obj.prop('attrs/image/xlinkHref', 'assets/img/ВыклРазъедГоризонт.png');
                    }
                    obj.prop(value.name, event.target.value);


                }
            }
            articleDiv.append(button);
            articleDiv.append(button1);
            //Запуск сбора информации о всех элементах
            button1.onclick = function(event) {
                $('#RaschetTP').toggleClass('active');
                var obj;
                let evt = document.getElementById(event.target.id);

                let i = 0;
                for (obj of graph.attributes.cells.models) {
                    if (obj.attributes.Name) {
                        console.log(obj.attributes.Name);
                        infoArray[i] = [];
                        infoArray[i][0] = 0;
                        infoArray[i][1] = obj.attributes.id;
                        infoArray[i][2] = parseFloat(obj.attributes.Name);
                        if (obj.attributes.Name == 3) {
                            if (obj.attributes.X_Sopr == 0 && obj.attributes.R_Sopr != 0) {
                                infoArray[i][2] = 4;
                            }
                        }
                        infoArray[i][3] = parseFloat(obj.attributes.Volume);
                        infoArray[i][4] = parseFloat(obj.attributes.Section);
                        infoArray[i][5] = parseFloat(obj.attributes.Modul);
                        infoArray[i][6] = parseFloat(obj.attributes.Pos);
                        infoArray[i][7] = parseFloat(obj.attributes.R_Sopr);
                        infoArray[i][8] = parseFloat(obj.attributes.X_Sopr);
                        infoArray[i][9] = parseFloat(obj.attributes.Rank);
                        if (evt.getAttribute('info') === obj.attributes.id) {
                            infoArray[i][9] = 5;
                        }
                        infoArray[i][10] = obj.attributes.inid1;
                        infoArray[i][11] = obj.attributes.inid2;
                        infoArray[i][12] = obj.attributes.inid3;
                        infoArray[i][13] = obj.attributes.inid4;
                        infoArray[i][14] = 0;
                        i++;

                    }
                }
                RaschetTP();
            }

            //Задаём функцию для формы input
            input.onchange = input1.onchange = input2.onchange = input3.onchange = input6.onchange = input5.onchange = function(event) {
                    var value = document.getElementById(event.target.id);
                    var obj = graph.getCell(value.getAttribute('info'));
                    obj.prop(value.name, event.target.value);
                }
                //Логика включенных элементов, если у объекта есть заземление
            input4.onchange = function(event) {
                var value = document.getElementById(event.target.id);
                var obj = graph.getCell(value.getAttribute('info'));
                if (obj.prop('Name') == 5) {
                    let str = obj.prop('str');
                    let cell1;
                    let cell2;
                    let cell3;
                    for (let i = 0; i < cells.length; i++) {
                        if (cells[i].prop('str') == str) {
                            //console.log(cells[i]);
                            if (cells[i].prop('Grounding') == 1 || cells[i].prop('Grounding') == 0) {
                                if (!cell2) {
                                    cell2 = cells[i]
                                    continue;
                                }
                                if (!cell3) {
                                    cell3 = cells[i];
                                    continue;
                                }
                            } else {
                                cell1 = cells[i];
                                continue;
                            }
                        }
                    }
                    //Если ключ с заземлением один
                    if (!cell1 && !cell3) {
                        obj.prop(value.name, event.target.value);
                    }
                    //Если ключа 2, но с заземлением 1
                    if (cell1 && !cell3) {
                        if (!obj.prop('Grounding')) {
                            if (event.target.value == 1) {
                                cell1.prop('Pos', 1);
                                cell2.prop('Pos', 0);
                            } else {
                                cell1.prop('Pos', 0);
                                cell2.prop('Pos', 1);
                            }
                        } else {
                            if (event.target.value == 1) {
                                cell1.prop('Pos', 0);
                                cell2.prop('Pos', 1);
                            } else {
                                cell2.prop('Pos', 0);
                                cell1.prop('Pos', 1);

                            }
                        }
                    }
                    //Если ключей 3, а с заземлением 2
                    if (cell1 && cell3) {
                        if (!obj.prop('Grounding')) {
                            if (event.target.value == 1) {
                                cell1.prop('Pos', 1);
                                cell2.prop('Pos', 0);
                                cell3.prop('Pos', 0);
                            } else {
                                cell1.prop('Pos', 0);
                                cell2.prop('Pos', 1);
                                cell3.prop('Pos', 1);
                            }
                        } else {
                            if (event.target.value == 1) {
                                cell1.prop('Pos', 0);
                                cell2.prop('Pos', 1);
                                cell3.prop('Pos', 1);
                            } else {
                                cell1.prop('Pos', 1);
                                cell2.prop('Pos', 0);
                                cell3.prop('Pos', 0);
                            }
                        }
                    }

                } else {
                    obj.prop(value.name, event.target.value);
                }
            }
        }
    });
    var infoArray = [
        []
    ];
    //Создание кнопки поворота объекта
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
        x: '82%',
        y: '20%',
        offset: {
            x: 0,
            y: 0
        },
        rotate: false,
        //Функция поворота объекта
        action: function(event) {
            var obj = graph.getCell(this.model.id);
            obj.rotate(90);
        }
    });
    //Создание границ элемента
    var boundaryTool = new joint.elementTools.Boundary({
        padding: 14,
        strokeDasharray: '4 4',
        rotate: false,
        useModelGeometry: true,
    });
    //Создание кнопки удаления объекта
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
        x: '17%',
        y: '20%',
        rotate: false,
        //Функция удаления объекта(из дерева иерархии тоже)
        action: function(evt, elementView, toolView) {
            elementView.model.remove({ ui: true, tool: toolView.cid });
            var obj = document.getElementsByClassName(this.model.id);
            obj[0].remove();
        }
    });
    //Создание объектов для соединительной линии
    var verticesTool = new joint.linkTools.Vertices();
    var segmentsTool = new joint.linkTools.Segments();
    var sourceAnchorTool = new joint.linkTools.SourceAnchor();
    var targetAnchorTool = new joint.linkTools.TargetAnchor();
    var LinkboundaryTool = new joint.linkTools.Boundary();
    var LinkremoveButton = new joint.linkTools.Remove();
    //Кнопка информации о соединительной линии
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
        //Функция отображения информации при нажатии на кнопку
        action: function(event) {
            if (document.getElementById("Sidebar1").style.width == "250px") closeNav1();
            document.getElementById("Sidebar1").style.width = "250px";
            var articleDiv = document.querySelector("div.info");
            // создаем элемент
            var obj = graph.getCell(this.model.id);
            var h2 = document.createElement('h2');

            //создаём input 1
            var label = document.createElement("label");
            label.setAttribute('for', 'input1');
            label.setAttribute('unselectable', 'on');
            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'R_Sopr');
            input.setAttribute('id', 'input1');
            input.setAttribute('value', obj.prop('R_Sopr'));
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
            input1.setAttribute('value', obj.prop('X_Sopr'));
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
            input2.setAttribute('value', obj.prop('Volume'));
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
            input3.setAttribute('value', obj.prop('Section'));
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
            input4.setAttribute('value', obj.prop('Pos'));
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
            input5.setAttribute('value', obj.prop('Rank'));
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
            button.append(buttonText);
            // добавляем элементы в блок div
            articleDiv.append(h2);
            articleDiv.append(label);
            articleDiv.append(input);
            articleDiv.append(label1);
            articleDiv.append(input1);
            articleDiv.append(label2);
            articleDiv.append(input2);
            articleDiv.append(label3);
            articleDiv.append(input3);
            articleDiv.append(label4);
            articleDiv.append(input4);
            articleDiv.append(label5);
            articleDiv.append(input5);
            articleDiv.append(button);
            //Задаём функцию для формы input
            input.onchange = input1.onchange = input2.onchange = input3.onchange = input4.onchange = input5.onchange = function(event) {
                var value = document.getElementById(event.target.id);
                var obj = graph.getCell(value.getAttribute('info'));
                obj.prop(value.name, event.target.value);
            }
        }
    });
    //Создание инструментов редактирования объекта
    var toolsView = new joint.dia.ToolsView({
        tools: [boundaryTool, removeButton, infoButton, info1Button]
    });
    //Создание инструментов для разъединителя
    var toolsViewForDisconnect = new joint.dia.ToolsView({
        tools: [removeButton]
    });
    //При наведении на объект включает и отключает инструменты редактирования объекта
    paper.on({
        'element:mouseenter': function(elementView) {
            if (elementView.model.prop('elementToolsDisconnect') == true) { elementView.addTools(toolsViewForDisconnect); return; }
            if (elementView.model.prop('elementTools') == false) return;
            elementView.addTools(toolsView);
        },
        'element:mouseleave': function(elementView) {
            elementView.removeTools();
        }
    });
    //Создание инструментов редактирования соединительных линий
    var LinktoolView = new joint.dia.ToolsView({
        tools: [
            verticesTool, segmentsTool,
            sourceAnchorTool, targetAnchorTool,
            LinkboundaryTool, LinkremoveButton, LinkinfoButton
        ]
    });
    ////При наведении на объект включает и отключает инструменты редактирования линии
    paper.on('link:mouseenter', function(linkView) {
        linkView.addTools(LinktoolView);
    });
    paper.on('link:mouseleave', function(linkView) {
        linkView.removeTools();
    });
    var scale = 1;
    //Масштабирование рабочего полотна
    paper.on({
        'blank:mousewheel': function(event, x, y, delta) {

            if (delta > 0) scale += 0.1;
            else scale -= 0.1;
            paper.scale(scale);
        }
    });
    //Перемещение полотна при нажатой левой клавише компьютерной мыши
    paper.on({
        'blank:pointerdown': function(event, x, y) {
            paper.$el.addClass('connecting');
            var scale = paper.scale();
            dragStartPosition = { x: x * scale.sx, y: y * scale.sy };
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
    //Функция проверки соответствия родителя
    function fitAncestors(element) {
        element.getAncestors().forEach(function(container) {
            container.fitChildren();
        });
    }
    let infoArrayTest = [
        []
    ];
    let TestArray = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 110, 1, 1, 1, 0, 18.15, 1, 0, 0, 3, 0, 'LIN'],
        [0, 2, 1, 110, 2, 1, 1, 0, 18.15, 1, 0, 0, 7, 0, 'LIN'],
        [0, 3, 2, 110, 1, 1, 1, 0, 0, 2, 1, 4, 8, 0, 'XT'],
        [0, 4, 5, 110, 3, 1, 0, 0.001, 0, 2, 0, 5, 0, 3, 'QS'],
        [0, 5, 6, 110, 3, 1, 1, 0, 0, 2, 0, 6, 0, 4, 'TA'],
        [0, 6, 5, 110, 3, 1, 0, 0.001, 0, 2, 0, 7, 0, 5, 'QS'],
        [0, 7, 2, 110, 2, 1, 1, 0, 0, 2, 2, 0, 9, 6, 'XT'],
        [0, 8, 5, 110, 1, 1, 1, 0.001, 0, 2, 3, 0, 12, 0, 'QS'],
        [0, 9, 5, 110, 2, 1, 1, 0.001, 0, 2, 7, 0, 17, 0, 'QS'],
        [0, 10, 7, 110, 1, 2, 0, 0.1, 0.5, 3, 0, 11, 0, 0, 'TV'],
        [0, 11, 5, 110, 1, 2, 1, 0.001, 0, 2, 0, 12, 0, 10, 'QS'],
        [0, 12, 2, 110, 1, 1, 1, 0, 0, 2, 8, 13, 20, 11, 'XT'],
        [0, 13, 5, 110, 4, 1, 1, 0.001, 0, 2, 0, 14, 0, 12, 'QS'],
        [0, 14, 6, 110, 4, 1, 1, 0, 0, 2, 0, 15, 0, 13, 'TA'],
        [0, 15, 8, 110, 4, 1, 1, 0, 0, 2, 0, 16, 0, 14, 'QW'],
        [0, 16, 5, 110, 4, 1, 1, 0.001, 0, 2, 0, 17, 0, 15, 'QS'],
        [0, 17, 2, 110, 2, 1, 1, 0, 0, 2, 9, 18, 21, 16, 'XT'],
        [0, 18, 5, 110, 2, 2, 1, 0.001, 0, 2, 0, 19, 0, 17, 'QS'],
        [0, 19, 7, 110, 2, 2, 0, 0.1, 0.5, 3, 0, 0, 0, 18, 'TV'],
        [0, 20, 5, 110, 1, 3, 1, 0.001, 0, 2, 12, 0, 22, 0, 'QS'],
        [0, 21, 5, 110, 2, 3, 1, 0.001, 0, 2, 17, 0, 23, 0, 'QS'],
        [0, 22, 8, 110, 1, 3, 1, 0, 0, 2, 20, 0, 24, 0, 'QW'],
        [0, 23, 8, 110, 2, 3, 1, 0, 0, 2, 21, 0, 25, 0, 'QW'],
        [0, 24, 6, 110, 1, 3, 1, 0, 0, 2, 22, 0, 27, 0, 'TA'],
        [0, 25, 6, 110, 2, 3, 1, 0, 0, 2, 23, 0, 28, 0, 'TA'],
        [0, 26, 9, 110, 1, 3, 0, 0, 0, 4, 0, 27, 0, 0, 'FV'],
        [0, 27, 2, 110, 1, 3, 1, 0, 0, 2, 24, 0, 30, 26, 'XT'],
        [0, 28, 2, 110, 2, 3, 1, 0, 0, 2, 25, 29, 31, 0, 'XT'],
        [0, 29, 9, 110, 2, 3, 0, 0, 0, 4, 0, 0, 0, 28, 'FV'],
        [0, 30, 10, 110, 1, 3, 1, 0, 131.3, 2, 27, 0, 34, 0, 'T'],
        [0, 31, 10, 110, 2, 3, 1, 0, 131.3, 2, 28, 0, 35, 0, 'T'],
        [0, 32, 5, 35, 1, 1, 0, 0.001, 0, 2, 0, 33, 0, 0, 'QS'],
        [0, 33, 10, 35, 1, 1, 1, 0, 0.5, 2, 0, 34, 0, 32, 'T'],
        [0, 34, 2, 110, 1, 3, 1, 0, 0, 2, 30, 0, 38, 33, 'XT'],
        [0, 35, 2, 110, 2, 3, 1, 0, 0, 2, 31, 36, 39, 0, 'XT'],
        [0, 36, 10, 35, 2, 1, 1, 0, 1.2, 2, 0, 37, 0, 35, 'T'],
        [0, 37, 5, 35, 2, 1, 0, 0.001, 0, 2, 0, 0, 0, 36, 'QS'],
        [0, 38, 10, 10, 1, 1, 1, 0, 0.715, 2, 34, 0, 40, 0, 'T'],
        [0, 39, 10, 10, 2, 1, 1, 0, 0.715, 2, 35, 0, 41, 0, 'T'],
        [0, 40, 5, 10, 1, 1, 1, 0.001, 0, 2, 38, 0, 43, 0, 'QS'],
        [0, 41, 5, 10, 2, 1, 1, 0.001, 0, 2, 39, 0, 44, 0, 'QS'],
        [0, 42, 9, 10, 1, 1, 0, 0, 0, 4, 0, 43, 0, 0, 'FV'],
        [0, 43, 2, 10, 1, 1, 1, 0, 0, 2, 40, 0, 46, 42, 'XT'],
        [0, 44, 2, 10, 2, 1, 1, 0, 0, 2, 41, 45, 47, 0, 'XT'],
        [0, 45, 9, 10, 2, 1, 0, 0, 0, 4, 0, 0, 0, 44, 'FV'],
        [0, 46, 6, 10, 1, 1, 1, 0, 0, 2, 43, 0, 48, 0, 'TA'],
        [0, 47, 6, 10, 2, 1, 1, 0, 0, 2, 44, 0, 49, 0, 'TA'],
        [0, 48, 8, 10, 1, 1, 1, 0, 0, 5, 46, 0, 50, 0, 'QW'],
        [0, 49, 8, 10, 2, 1, 1, 0, 0, 2, 47, 0, 51, 0, 'QW'],
        [0, 50, 5, 10, 1, 1, 1, 0.001, 0, 2, 48, 0, 55, 0, 'QS'],
        [0, 51, 5, 10, 2, 1, 1, 0.001, 0, 2, 49, 0, 59, 0, 'QS'],
        [0, 52, 2, 10, 1, 5, 1, 0, 0, 2, 0, 53, 63, 0, 'XT'],
        [0, 53, 2, 10, 1, 4, 1, 0, 0, 2, 0, 54, 64, 52, 'XT'],
        [0, 54, 2, 10, 1, 3, 1, 0, 0, 2, 0, 55, 65, 53, 'XT'],
        [0, 55, 2, 10, 1, 1, 1, 0, 0, 2, 50, 56, 66, 54, 'XT'],
        [0, 56, 5, 10, 3, 1, 0, 0.001, 0, 2, 0, 57, 0, 55, 'QS'],
        [0, 57, 8, 10, 3, 1, 0, 0, 0, 2, 0, 58, 0, 56, 'QW'],
        [0, 58, 5, 10, 3, 1, 0, 0.001, 0, 2, 0, 59, 0, 57, 'QS'],
        [0, 59, 2, 10, 2, 1, 1, 0, 0, 2, 51, 60, 67, 58, 'XT'],
        [0, 60, 2, 10, 2, 3, 1, 0, 0, 2, 0, 61, 68, 59, 'XT'],
        [0, 61, 2, 10, 2, 4, 1, 0, 0, 2, 0, 62, 69, 60, 'XT'],
        [0, 62, 2, 10, 2, 5, 1, 0, 0, 2, 0, 0, 70, 61, 'XT'],
        [0, 63, 5, 10, 1, 5, 1, 0.001, 0, 2, 52, 0, 71, 0, 'QS'],
        [0, 64, 5, 10, 1, 4, 1, 0.001, 0, 2, 53, 0, 72, 0, 'QS'],
        [0, 65, 5, 10, 1, 3, 1, 0.001, 0, 2, 54, 0, 73, 0, 'QS'],
        [0, 66, 5, 10, 1, 2, 1, 0.001, 0, 2, 55, 0, 74, 0, 'QS'],
        [0, 67, 5, 10, 2, 2, 1, 0.001, 0, 2, 59, 0, 75, 0, 'QS'],
        [0, 68, 5, 10, 2, 3, 1, 0.001, 0, 2, 60, 0, 76, 0, 'QS'],
        [0, 69, 5, 10, 2, 4, 1, 0.001, 0, 2, 61, 0, 77, 0, 'QS'],
        [0, 70, 5, 10, 2, 5, 1, 0.001, 0, 2, 62, 0, 78, 0, 'QS'],
        [0, 71, 8, 10, 1, 5, 1, 0, 0, 2, 63, 0, 79, 0, 'QW'],
        [0, 72, 8, 10, 1, 4, 1, 0, 0, 2, 64, 0, 80, 0, 'QW'],
        [0, 73, 11, 10, 1, 3, 1, 0, 0, 2, 65, 0, 82, 0, 'FU'],
        [0, 74, 8, 10, 1, 2, 1, 0, 0, 2, 66, 0, 83, 0, 'QW'],
        [0, 75, 8, 10, 2, 2, 1, 0, 0, 2, 67, 0, 84, 0, 'QW'],
        [0, 76, 11, 10, 2, 3, 1, 0, 0, 2, 68, 0, 85, 0, 'FU'],
        [0, 77, 8, 10, 2, 4, 1, 0, 0, 2, 69, 0, 87, 0, 'QW'],
        [0, 78, 8, 10, 2, 5, 1, 0, 0, 2, 70, 0, 88, 0, 'QW'],
        [0, 79, 6, 10, 1, 5, 1, 0, 0, 2, 71, 0, 89, 0, 'TA'],
        [0, 80, 6, 10, 1, 4, 1, 0, 0, 2, 72, 0, 90, 0, 'TA'],
        [0, 81, 9, 10, 1, 3, 0, 0, 0, 4, 0, 82, 0, 0, 'FV'],
        [0, 82, 2, 10, 1, 3, 1, 0, 0, 2, 73, 0, 92, 81, 'XT'],
        [0, 83, 6, 10, 1, 2, 1, 0, 0, 2, 74, 0, 93, 0, 'TA'],
        [0, 84, 6, 10, 2, 2, 1, 0, 0, 2, 75, 0, 96, 0, 'TA'],
        [0, 85, 2, 10, 2, 3, 1, 0, 0, 2, 76, 86, 97, 0, 'XT'],
        [0, 86, 9, 10, 2, 3, 0, 0, 0, 4, 0, 0, 0, 85, 'FV'],
        [0, 87, 6, 10, 2, 4, 1, 0, 0, 2, 77, 0, 99, 0, 'TA'],
        [0, 88, 6, 10, 2, 5, 1, 0, 0, 2, 78, 0, 100, 0, 'TA'],
        [0, 89, 5, 10, 1, 5, 1, 0.001, 0, 2, 79, 0, 101, 0, 'QS'],
        [0, 90, 2, 10, 1, 4, 1, 0, 0, 2, 80, 91, 102, 0, 'XT'],
        [0, 91, 5, 10, 1, 4, 0, 0.001, 0, 4, 0, 0, 0, 90, 'QS'],
        [0, 92, 7, 10, 1, 3, 0, 0.1, 0.5, 3, 82, 0, 0, 0, 'TV'],
        [0, 93, 2, 10, 1, 2, 1, 0, 0, 2, 83, 94, 103, 0, 'XT'],
        [0, 94, 5, 10, 1, 2, 0, 0.001, 0, 4, 0, 95, 0, 93, 'QS'],
        [0, 95, 5, 10, 2, 2, 0, 0.001, 0, 4, 0, 96, 0, 94, 'QS'],
        [0, 96, 2, 10, 2, 2, 1, 0, 0, 2, 84, 0, 104, 95, 'XT'],
        [0, 97, 7, 10, 2, 3, 0, 0.1, 0.5, 3, 85, 0, 0, 0, 'TV'],
        [0, 98, 5, 10, 2, 4, 0, 0.001, 0, 4, 0, 99, 0, 0, 'QS'],
        [0, 99, 2, 10, 2, 4, 1, 0, 0, 2, 87, 0, 105, 98, 'XT'],
        [0, 100, 5, 10, 2, 5, 1, 0.001, 0, 2, 88, 0, 106, 0, 'QS'],
        [0, 101, 3, 10, 1, 5, 0, 10, 5, 3, 89, 0, 0, 0, 'Z'],
        [0, 102, 10, 0.4, 1, 1, 1, 0.1, 0.5, 2, 90, 0, 107, 0, 'T'],
        [0, 103, 10, 3, 1, 1, 1, 0.1, 1, 2, 93, 0, 108, 0, 'T'],
        [0, 104, 10, 3, 2, 1, 1, 0.05, 0.8, 2, 96, 0, 109, 0, 'T'],
        [0, 105, 10, 0.4, 2, 1, 1, 0.1, 0.5, 2, 99, 0, 110, 0, 'T'],
        [0, 106, 3, 10, 2, 5, 0, 10, 5, 3, 100, 0, 0, 0, 'Z'],
        [0, 107, 3, 0.4, 1, 1, 0, 10, 5, 3, 102, 0, 0, 0, 'Z'],
        [0, 108, 12, 3.5, 1, 1, 1, 1, 2, 2, 103, 0, 111, 0, 'VD'],
        [0, 109, 12, 3.5, 2, 1, 1, 0.5, 1.5, 2, 104, 0, 113, 0, 'VD'],
        [0, 110, 3, 0.4, 2, 1, 0, 10, 5, 3, 105, 0, 0, 0, 'Z'],
        [0, 111, 2, 3.5, 1, 1, 1, 0, 0, 2, 108, 112, 114, 0, 'XT'],
        [0, 112, 5, 3.5, 3, 1, 1, 0.001, 0, 2, 0, 113, 0, 111, 'QS'],
        [0, 113, 2, 3.5, 2, 1, 1, 0, 0, 2, 109, 0, 115, 112, 'XT'],
        [0, 114, 5, 3.5, 1, 1, 1, 0.001, 0, 2, 111, 0, 116, 0, 'QS'],
        [0, 115, 5, 3.5, 2, 1, 1, 0.001, 0, 2, 113, 0, 117, 0, 'QS'],
        [0, 116, 8, 3.5, 1, 1, 1, 0, 0, 2, 114, 0, 118, 0, 'QW'],
        [0, 117, 8, 3.5, 2, 1, 1, 0, 0, 2, 115, 0, 119, 0, 'QW'],
        [0, 118, 13, 3.5, 1, 1, 1, 0, 0, 2, 116, 0, 120, 0, 'A'],
        [0, 119, 13, 3.5, 2, 1, 1, 0, 0, 2, 117, 0, 121, 0, 'A'],
        [0, 120, 5, 3.5, 1, 1, 1, 0.001, 0, 2, 118, 0, 122, 0, 'QS'],
        [0, 121, 5, 3.5, 2, 1, 1, 0.001, 0, 2, 119, 0, 123, 0, 'QS'],
        [0, 122, 4, 3.5, 1, 1, 0, 10, 0, 4, 120, 0, 0, 0, 'R'],
        [0, 123, 4, 3.5, 2, 1, 0, 10, 0, 3, 121, 0, 0, 0, 'R']

    ];



    function RaschetTP() {
        //console.log(infoArray);//Сюда надо передавать массив данных Resist
        infoArray.unshift('');
        console.log(infoArray);
        var i, j, k, l, m, n, v, volt, s, s1; //счетчики числа элементов в массиве;
        //   точка к.з. не должна быть на узле, только на промежуточных элементах!!!!!!!!!!!!!;
        volt = 0; //рабочее напряжение в точке к.з.;
        s = 2; //счетчик элементов в массиве данных;
        //   подсчет элементов для загрузки;
        //Do Until Loop - заменить на while только с обратным условием
        //Do Loop Until - заменить на do while только с обратным условием
        s = infoArray.length + 2;
        s1 = s;
        let a = [
            []
        ]; //Создание массива для использования
        var u1 = true;
        var u2 = true;
        for (i = 0; i < s - 2; i++) {
            a[i] = [];
        }
        for (i = 0; i < s - 2; i++) {
            for (j = 0; j < 14; j++) {
                //console.log(infoArray);
                if (infoArray[i][8] == 3 || infoArray[i][8] == 4) {
                    infoArray[i][5] = 0;
                }

                a[i][j] = infoArray[i][j];

                //   для расчетов к.з. все нагрузки отключаем, поскольку они будут зашунтированы к.з.;

            }
            if (a[i][9] == 5) {

                volt = a[i][3]; //напряжение в точке к.з.;
                n = i;
            }

            //Задаёт ID если элемент узел
            if (a[i][2] == 2) {
                a[i][14] = a[i][1];
            }
            //
        }
        i = n;
        //   ввод новых элементов - узел + точка к.з.;//Добавляет элемент в конец массива
        a[s - 2] = [];
        a[s - 2][1] = s - 2; //было s+1
        a[s - 2][2] = 2;
        a[s - 2][3] = a[i][3];
        a[s - 2][4] = a[i][4];
        a[s - 2][5] = a[i][5];
        a[s - 2][6] = 1;
        a[s - 2][7] = 0;
        a[s - 2][8] = 0;
        a[s - 2][9] = 1;
        a[s - 2][10] = 0;
        for (j = 13; j >= 10; j--) {

            if (a[i][j] != 0 && u1) {

                //   поиск связанного элемента;
                k = 1;
                while ((a[k][1] != a[i][j]) && (k != s - 1)) {
                    k = k + 1;
                }
                for (m = 10; m <= 13; m++) {
                    if (a[k][m] == a[i][1]) {
                        l = m;
                    }
                }
                //   меняем связи, вставляя узел;
                a[s - 2][10] = a[i][1];
                a[s - 2][12] = a[k][1];
                a[k][l] = s - 2;
                a[i][j] = s - 2;
                a[i][9] = 2;
                u1 = false;
            }
        }

        a[s - 2][11] = s - 1;
        a[s - 2][13] = 0;
        a[s - 2][14] = s - 2;
        a[s - 1] = [];
        a[s - 1][1] = s - 1;
        a[s - 1][2] = 4;
        a[s - 1][3] = a[i][3];
        a[s - 1][4] = a[i][4];
        a[s - 1][5] = a[i][5];
        a[s - 1][6] = 1;
        a[s - 1][7] = 1;
        a[s - 1][8] = 0;
        a[s - 1][9] = 5;
        a[s - 1][10] = s - 2;
        a[s - 1][11] = 0;
        a[s - 1][12] = 0;
        a[s - 1][13] = 0; //заменить
        //    For k = 1 To s - 1;
        //        For j = 1 To 15;
        //            infoArray(k + 1, j + 38) = a(k, j);
        //        Next j;
        //    Next k;
        // поиск отключенных ветвей;
        do {
            i = 1;
            u1 = true;
            while (a[i][6] != 0 && i != s - 1) {
                i = i + 1;
                if (a[i][2] == 12 && (volt <= 3 || volt > 4)) {
                    //если к.з. не на постоянке, то выпрямитель отключаем;
                    a[i][6] = 0;
                }
            }
            if (a[i][6] == 0) {
                //   перебор всех связей;
                for (j = 10; j <= 13; j++) {
                    if (a[i][j] != 0) {
                        k = 1;
                        //   поиск связанного элемента;
                        while (a[k][1] != a[i][j] && k != s) {
                            k = k + 1;
                        }
                        for (m = 10; m <= 13; m++) {
                            if (a[k][m] == a[i][1]) {
                                l = m;
                            }
                        }
                        // удаляем связь с отключенным элементом;
                        a[k][l] = 0;
                        if (a[k][2] == 2) {
                            //   если связанный элемент узел;

                            n = 0;
                            //   проверяем наличие других связей;
                            for (m = 10; m <= 13; m++) {
                                if (a[k][m] > 0) {
                                    n = n + 1;
                                }
                            }
                            if (n <= 1) {
                                //   если связь остается только одна, то узел отключается;

                                a[k][6] = 0;
                            }
                        } else if (a[k][9] != 5) {
                            //если конечный элемент не точка к.з., то отключаем его;

                            a[k][6] = 0;
                        }
                    }
                }
                //   сдвиг отключенного элемента в конец, чтобы не мешал;
                if (i < s - 1) {
                    for (k = i; k <= s - 2; k++) {
                        for (l = 1; l <= 15; l++) {
                            b = a[k][l];
                            a[k][l] = a[k + 1][l];
                            a[k + 1][l] = b;
                        }
                    }
                    a[s - 1][14] = 0; //ток в отключенном элементе будет равен нулю;
                    s = s - 1;
                    u1 = false;
                } else {
                    s = s - 1;
                    u1 = false;
                }
            }
        }
        //    For k = 1 To s - 1;
        //        For j = 1 To 15;
        //            infoArray(k + 1, j + 38) = a(k, j);
        //        Next j;
        //    Next k;
        while (i != s - 1 && !u1); // проблема с остановом;
        //    For k = 1 To s1 - 1;
        //        For j = 1 To 15;
        //            infoArray(k + 1, j + 38) = a(k, j);
        //        Next j;
        //    Next k;
        //Вспомогательный массив для расчётов
        var a1 = [
            []
        ];
        let s2 = s;
        for (i = 0; i <= s - 1; i++) {
            a1[i] = [];
            a1[i][15] = 0;

        }
        //   заполняется массив схемы без отключенных элементов;
        for (i = 1; i <= s - 1; i++) {
            for (j = 1; j < 15; j++) {
                if (a[i][j] === undefined) {
                    a[i][j] = 0;
                }

                a1[i][j] = a[i][j];

            }
            a1[i][16] = 0;
        }
        //   свертка нулевых элементов;
        i = 1;
        var x = [];
        while (i != s - 1) {
            x = [];
            u1 = false;
            if (a[i][2] == 2) {
                k = 0;
                for (j = 10; j <= 13; j++) {
                    if (a[i][j] != 0 && a[i][j] !== undefined) {
                        k = k + 1;
                    }
                }
                if (k == 2) {
                    //если у узла только один вход и один выход, то он не нужен;
                    u1 = true;
                }
            }
            if (((a[i][8] + a[i][7]) == 0 && a[i][2] != 2 && a[i][9] != 5) || (a[i][2] == 2 && u1)) {
                //   перебор всех связей;
                k = 0;
                for (j = 10; j <= 13; j++) {
                    if (a[i][j] != 0) {
                        k = k + 1;
                        x[k] = 1;
                        x[k + 4] = j;
                        //   поиск связанного элемента;
                        while (a[x[k]][1] != a[i][j] && x[k] != s) {
                            x[k] = x[k] + 1;
                        }
                        //   у связанного элемента ищется место координаты отключаемого;
                        for (l = 10; l <= 13; l++) {
                            if (a[x[k]][l] == a[i][1]) {
                                x[k + 2] = l;
                            }
                        }
                    }
                }

                //   перезапись связей;
                a[x[1]][x[3]] = a[i][x[6]];
                a[x[2]][x[4]] = a[i][x[5]];
                //   сдвиг отключенного элемента в конец, чтобы не мешал;
                if (i < s - 1) {
                    for (k = i; k <= s - 2; k++) {
                        for (l = 1; l <= 15; l++) {
                            b = a[k][l];
                            a[k][l] = a[k + 1][l];
                            a[k + 1][l] = a[k][l];
                        }
                    }
                    s = s - 1;
                    u1 = false;
                    i = i - 1;
                } else {
                    s = s - 1;
                    u1 = false;
                    i = i - 1;
                }
            } else if ((a[i][8] + a[i][7]) != 0 && a[i][2] != 2) {
                a[i][8] = a[i][8] / (a[i][3] * a[i][3]) * volt * volt;
                a[i][7] = a[i][7] / (a[i][3] * a[i][3]) * volt * volt;
                //a(i, 3) = volt                                                 отключил;
            }
            i = 1 + i;
        }
        //    For k = 1 To s2 - 1;
        //        For j = 1 To 15;
        //            infoArray(k + 1, j + 38) = a1(k, j);
        //        Next j;
        //    Next k;
        //   свертка последовательных элементов;
        i = 1;

        while (i != s - 1) {
            x = [];
            u1 = false;
            if ((a[i][2] != 2) && (a[i][2] != 1) && (a[i][9] != 5)) {
                k = 0;
                for (j = 10; j <= 13; j++) {
                    if (a[i][j] != 0 && a[i][j] !== undefined) {
                        k = k + 1;
                        x[k] = 1;
                        x[k + 4] = j;
                        //   поиск связанного элемента;
                        while (a[x[k]][1] != a[i][j] && x[k] != s) {
                            x[k] = x[k] + 1;
                        }
                        //   у связанного элемента ищется место координаты нулевого;
                        for (l = 10; l <= 13; l++) {
                            if (a[x[k]][l] == a[i][1]) {
                                x[k + 2] = l;
                            }
                        }
                    }
                }
                if (a[x[1]][2] != 2) {
                    //   сложение сопротивлений;
                    a[x[1]][7] = a[i][7] + a[x[1]][7];
                    a[x[1]][8] = a[i][8] + a[x[1]][8];
                    //   перезапись связей;
                    a[x[1]][x[3]] = a[i][x[6]];
                    a[x[2]][x[4]] = a[i][x[5]];
                    //   обнуление отключенного элемента и сдвиг данных;
                    if (i < s - 1) {
                        for (k = i; k <= s - 2; k++) {
                            for (l = 1; l < 15; l++) {
                                b = a[k][l];
                                a[k][l] = a[k + 1][l];
                                a[k + 1][l] = b;
                            }
                        }
                        s = s - 1;
                        u1 = false;
                        i = i - 1;
                    } else {
                        s = s - 1;
                        u1 = false;
                        i = i - 1;
                    }
                } else if (k > 1) {
                    if (a[x[2]][2] != 2) {
                        //   сложение сопротивлений;
                        a[x[2]][7] = a[i][7] + a[x[2]][7];
                        a[x[2]][8] = a[i][8] + a[x[2]][8];
                        //   перезапись связей;
                        a[x[1]][x[3]] = a[i][x[6]];
                        a[x[2]][x[4]] = a[i][x[5]];
                        //   обнуление отключенного элемента и сдвиг данных;
                        if (i < s - 1) {
                            for (k = i; k <= s - 2; k++) {
                                for (l = 1; l < 15; l++) {
                                    b = a[k][l];
                                    a[k][l] = a[k + 1][l];
                                    a[k + 1][l] = b;
                                }
                            }
                            s = s - 1;
                            u1 = false;
                            i = i - 1;
                        } else {
                            s = s - 1;
                            u1 = false;
                            i = i - 1;
                        }
                    }
                }
            }
            i = i + 1;
        }
        //   объединение узлов;
        var uz = 0;
        var fi = [
            []
        ];
        for (i = 0; i <= s; i++) {
            fi[i] = [];
            for (j = 0; j <= s + 2; j++) {
                fi[i][j] = 0;
            }
        }
        for (i = 1; i <= s - 1; i++) {
            if (a[i][2] == 2) {
                uz = uz + 1;
                fi[uz][s + 1] = a[i][1]; //в столбце s+1 записываются номера узлов;
                //fi(uz, s + 2) = i           //в столбце s+2 записываются номера узлов исходной матрицы;
                //   перебор всех связей;
                for (j = 10; j <= 13; j++) {
                    if (a[i][j] != 0 && a[i][j] !== undefined) {
                        k = 1;
                        //   поиск связанного элемента;
                        while (a[k][1] != a[i][j] && k != s) {
                            k = k + 1;
                        }
                        if (a[k][9] == 5) {
                            fi[s][1] = uz; //это чтобы потом найти нужный ток, хотя красивее сделать обратное разворачивание с токами во всех элементах;
                            fi[s][2] = Math.pow((Math.pow(a[k][7], 2) + Math.pow(a[k][8], 2)), 0.5);
                        }
                        if (a[k][2] == 2 && a[k][1] != a[i][1]) {
                            //   если связанный элемент узел и еще не обработан;
                            uz = uz - 1;
                            if (uz < 0) {
                                uz = 0;
                            }
                            //   проверяем его связи;
                            for (m = 10; m <= 13; m++) {
                                if (a[k][m] > 0 && a[k][m] !== undefined) {
                                    n = 1;
                                    for (n = 1; n <= s; n++) {
                                        if (a[n][1] == a[k][m]) {
                                            for (let o = 10; o <= 13; o++) {
                                                if (a[n][o] = a[k][1]) {
                                                    a[n][o] = a[i][1];
                                                }
                                            }
                                        }
                                    }
                                    //   поиск связанного элемента;
                                    /*while( a[n][1] != a[k][m] || n != s){
                                    n = n + 1;
                                    }*/
                                    //   изменение у связанного элемента адреса связанного узла;
                                    /*for(o=10; o<=13; o++){
                                    if(a[n][o] == a[k][1] ){
                                    a[n][o] = a[i][1];
                                    }
                                    }*/
                                }
                            }
                            //   заменяем сам узел;
                            a[k][1] = a[i][1];
                            a[i][j] = a[i][1];
                        }
                    }
                }
            }
        }

        for (k = 1; k <= s - 1; k++) {
            for (j = 1; j <= 15; j++) {
                infoArray[k + 1][j + 38] = fi[k][j];
            }
        }
        var ikz;
        let f1 = 0;
        let f2 = 0;
        //   составляем систему уравнений методом узловых потенциалов;
        if (uz > 0) {
            for (i = 1; i <= uz; i++) {
                for (l = i; l <= uz; l++) {
                    for (j = 1; j <= s - 1; j++) {
                        if (a[j][2] != 2) {
                            //   если этот элемент не узел;
                            n = 0;
                            for (k = 10; k <= 13; k++) {
                                if (i == l) {
                                    //   если заполняется главная диагональ матрицы;

                                    if (a[j][k] == fi[i][s + 1]) {
                                        //   если нашел связь с узлом строчки;
                                        fi[i][l] = fi[i][l] + 1 / Math.pow((Math.pow(a[j][7], 2) + Math.pow(a[j][8], 2)), 0.5);
                                        if (a[j][2] == 1) {
                                            //   если это питающая линия;
                                            fi[i][uz + 1] = fi[i][uz + 1] + volt * 1000 / Math.pow((Math.pow(a[j][7], 2) + Math.pow(a[j][8], 2)), 0.5); //   если напряжение в киловольтах, то домножаем на 1000;
                                        }
                                    }
                                } else { //   если остальные элементы матрицы, то ищутся межузловые элементы;
                                    if (a[j][k] == fi[i][s + 1] || a[j][k] == fi[l][s + 1]) {
                                        n = n + 1;
                                    }
                                }
                            }
                            if (n == 2) {
                                fi[i][l] = fi[i][l] - 1 / Math.pow((Math.pow(a[j][7], 2) + Math.pow(a[j][8], 2)), 0.5);
                                fi[l][i] = fi[i][l];
                            }
                        }
                    }
                }
            }
            //   решение системы линейных уравнений;
            for (k = 1; k <= uz - 1; k++) {
                for (i = k + 1; i <= uz; i++) {
                    for (j = k + 1; j <= uz; j++) {
                        fi[i][j] = fi[i][j] - fi[i][k] / fi[k][k] * fi[k][j];
                    }
                    fi[i][uz + 1] = fi[i][uz + 1] - fi[i][k] / fi[k][k] * fi[k][uz + 1];
                    fi[i][k] = 0;
                }
            }
            fi[uz][uz + 2] = fi[uz][uz + 1] / fi[uz][uz];
            if (uz > 2) {
                for (k = uz - 1; k <= 1; k--) {
                    Sum = fi[k][uz + 1];
                    for (j = uz; j <= k + 1; j--) {
                        Sum = Sum - fi[k][j] * fi[j][uz + 2];
                    }
                    fi[k][uz + 2] = Sum / fi[k][k];
                }
            }
            //нужно записать найденный потенциал узла в исходную матрицу;
            for (i = 1; i <= s - 1; i++) {
                if (a[i][2] == 2) {
                    for (j = 1; j <= uz; j++) {
                        if (a[i][1] == fi[j][s + 1]) {
                            a[i][15] = fi[j][uz + 2];
                        }
                    }
                }
            }

            for (i = 1; i <= s - 1; i++) {
                if (a[i][2] != 2) {
                    f1 = 0;
                    f2 = 0;
                    for (j = 10; j <= 13; j++) {
                        if (a[i][j] != 0 && a[i][j] !== undefined) {
                            k = 1;
                            //   поиск связанного элемента;
                            while (a[k][1] != a[i][j] && k != s) {
                                k = k + 1;
                            }
                            if (a[k][2] == 2) {
                                //если связанный элемент узел;

                                if (f1 == 0) {
                                    f1 = a[k][15];
                                } else {
                                    f2 = a[k][15];
                                }
                            }
                        }
                    }
                    if (a[i][2] == 1) {
                        a[i][14] = Math.abs(f1 - f2 - volt * 1000) / Math.pow((Math.pow(a[i][7], 2) + Math.pow(a[i][8], 2)), 0.5) * volt / a[i][3];
                    } else {
                        a[i][14] = Math.abs(f1 - f2) / Math.pow((Math.pow(a[i][7], 2) + Math.pow(a[i][8], 2)), 0.5) * volt / a[i][3];
                    }
                }
            }
            valuek = 0;

            ikz = fi[fi[s][1]][uz + 2] / fi[s][2];
        } else {
            if (s == 3) {
                a[1][14] = volt * 1000 / ((Math.pow((Math.pow((a[1][7] + a[2][7]), 2) + Math.pow((a[1][8] + a[2][8]), 2)), 0.5)) * volt / a[1][3]);
                a[2][15] = volt * 1000 / (Math.pow((Math.pow((a[1][7] + a[2][7]), 2) + Math.pow((a[1][8] + a[2][8]), 2)), 0.5));
                ikz = a[2][14];
            }
        }
        //    For i = 1 To uz;
        //        infoArray(i + 1, 53) = fi(i, uz + 2);
        //        infoArray(i + 1, 54) = fi(i, s + 1);
        //    Next i;
        //==========================================;
        //infoArray(1, 17) = ikz;
        //   ввод в промежуточный массив данных, которые рассчитали;
        for (i = 1; i <= s; i++) {
            if (a[i][1] != a[i][14] && a[i][2] == 2) {
                a[i][1] = a[i][14];
            }
            j = 1;
            while (a[i][1] != a1[j][1]) {
                j = j + 1;
            }
            a1[j][14] = a[i][14];
            a1[j][15] = a[i][15] * a[i][3] / volt;
        }
        var y = [
            []
        ];
        for (i = 1; i < s2 - 1; i++) {
            y[i] = [];
        }
        k = 0;
        n = 0;
        let p = 0;
        //   заполнение токов последовательных элементов;
        do {
            i = 1;
            u1 = true;
            while ((a1[i][14] == 0 || a1[i][14] == a1[i][1] || a1[i][16] != 0) && (i != s2 - 1)) {
                i = i + 1;
            }
            if (i < s2 - 1 || (i == s2 - 1 && a1[i][14] != 0 && a1[i][14] != a1[i][1] && a1[i][16] == 0)) {
                //если известен ток, протекающий через этот элемент;

                for (j = 10; j <= 13; j++) {
                    if (a1[i][j] != 0) {
                        //   поиск связей;

                        k = 1;
                        while (a1[k][1] != a1[i][j]) {
                            k = k + 1;
                        }
                        if (a1[k][2] == 2) {
                            //если связанный элемент узел;

                            l = 0;
                            for (m = 10; m <= 13; m++) {
                                if (a1[k][m] != 0) {
                                    //проверяем число входов узла;

                                    l = l + 1;
                                }
                            }
                        }
                        if (a1[k][2] != 2 || (a1[k][2] == 2 && l == 2)) {
                            //если это не узел или узел с двумя входами, то ток будет равным;
                            a1[k][14] = a1[i][14] * a1[i][3] / a1[k][3];
                            a1[i][16] = 1;
                            u1 = false;
                        } else if (a1[k][2] != 2 || (a1[k][2] == 2 && l > 2)) {
                            a1[i][16] = 1;
                            u1 = false;
                        }

                    }
                }
            }
            if (u1 && i == s2 - 1) {
                for (i = 1; i <= s2 - 1; i++) {

                    if (a1[i][2] == 2 && a1[i][16] == 0) {
                        k = 0;
                        n = 0;
                        p = 0; //   маркер нулевой ветки;
                        for (j = 10; j <= 13; j++) {
                            if (a1[i][j] != 0) {
                                //   поиск связей;
                                k = k + 1;
                                l = 1;
                                while (a1[l][1] != a1[i][j]) {
                                    l = l + 1;
                                }
                                y[k][1] = a1[l][14] * a1[l][3]; // ' записываем его ток;
                                y[k][2] = l;
                                if (y[k][1] != 0) {
                                    n = n + 1;
                                } else {
                                    p = k;
                                }
                            }
                        }

                        if (k == 3 && n == 2) {
                            Sum = 0;
                            if (p == 1) {
                                Sum = y[2][1] - y[3][1];
                            } else if (p == 2) {
                                Sum = y[1][1] - y[3][1];
                            } else if (p == 3) {
                                Sum = y[1][1] - y[2][1];
                            }
                            if (Sum != 0) {
                                a1[y[p][2]][14] = Math.abs(Sum) / a1[y[p][2]][3];
                                a1[i][16] = 1;
                                u1 = false;
                            }
                        } else if (k == 4 && n == 3) {
                            a1[i][14] = a1[i][14];
                        }
                    }
                }
            }
        }
        while (i < s2 - 1 || !u1);
        //   исходный массив до s2 калечится, поэтому делается перезапись его куска. Хотя так даже и быстрее;
        for (k = 1; k < s2; k++) {
            for (j = 1; j <= 15; j++) {
                a[k][j] = a1[k][j];
            }
        }
        for (k = 1; k <= s1 - 1; k++) {
            infoArrayTest[k] = [];
            for (j = 1; j <= 15; j++) {
                infoArrayTest[k][j] = a[k][j];
            }
        }
        console.log(infoArrayTest);
    }



})