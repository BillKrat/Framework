import { Directive, ElementRef, OnInit } from '@angular/core';
import Drawflow from 'drawflow';

@Directive({
  selector: '[appNgDrawFlow]'
})
export class NgDrawFlowDirective implements OnInit {
  editor: Drawflow;
  constructor(private hostElRef: ElementRef) { 
    this.editor = new Drawflow(this.hostElRef.nativeElement);
  }

  ngOnInit() {
    if (!!this.hostElRef?.nativeElement) {
      const { nativeElement } = this.hostElRef;
      this.initDrawFlow(nativeElement);
    }
  }

  private initDrawFlow(id: HTMLElement): void {
    try {
      if (!!id) {
        this.editor = new Drawflow(id);
        this.editor.reroute = true;
        this.editor.editor_mode = 'edit';
        // this.editor.drawflow = {}

        const dataToImport = {"drawflow":{"Home":{"data":{"1":{"id":1,"name":"welcome","data":{},"class":"welcome","html":"\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n        <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ","typenode": false, "inputs":{},"outputs":{},"pos_x":50,"pos_y":50},"2":{"id":2,"name":"slack","data":{},"class":"slack","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-slack\"></i> Slack chat message</div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1028,"pos_y":87},"3":{"id":3,"name":"telegram","data":{"channel":"channel_2"},"class":"telegram","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-telegram-plane\"></i> Telegram bot</div>\n            <div class=\"box\">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1032,"pos_y":184},"4":{"id":4,"name":"email","data":{},"class":"email","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-at\"></i> Send Email </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"}]}},"outputs":{},"pos_x":1033,"pos_y":439},"5":{"id":5,"name":"template","data":{"template":"Write your template"},"class":"template","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-code\"></i> Template</div>\n              <div class=\"box\">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"6","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":607,"pos_y":304},"6":{"id":6,"name":"github","data":{"name":"https://github.com/jerosoler/Drawflow"},"class":"github","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]}},"pos_x":341,"pos_y":191},"7":{"id":7,"name":"facebook","data":{},"class":"facebook","html":"\n        <div>\n          <div class=\"title-box\"><i class=\"fab fa-facebook\"></i> Facebook Message</div>\n        </div>\n        ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"3","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":347,"pos_y":87},"11":{"id":11,"name":"log","data":{},"class":"log","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"},{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1031,"pos_y":363}}},"Other":{"data":{"8":{"id":8,"name":"personalized","data":{},"class":"personalized","html":"\n            <div>\n              Personalized\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"12","input":"output_1"},{"node":"12","input":"output_2"},{"node":"12","input":"output_3"},{"node":"12","input":"output_4"}]}},"outputs":{"output_1":{"connections":[{"node":"9","output":"input_1"}]}},"pos_x":764,"pos_y":227},"9":{"id":9,"name":"dbclick","data":{"name":"Hello World!!"},"class":"dbclick","html":"\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"8","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"12","output":"input_2"}]}},"pos_x":209,"pos_y":38},"12":{"id":12,"name":"multiple","data":{},"class":"multiple","html":"\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[]},"input_2":{"connections":[{"node":"9","input":"output_1"}]},"input_3":{"connections":[]}},"outputs":{"output_1":{"connections":[{"node":"8","output":"input_1"}]},"output_2":{"connections":[{"node":"8","output":"input_1"}]},"output_3":{"connections":[{"node":"8","output":"input_1"}]},"output_4":{"connections":[{"node":"8","output":"input_1"}]}},"pos_x":179,"pos_y":272}}}}}
        this.editor.start();
        this.editor.import(dataToImport);
        
            // Events!
        this.editor.on('nodeCreated', function(id) {
          console.log("Node created " + id);
        })

        this.editor.on('nodeRemoved', function(id) {
          console.log("Node removed " + id);
        })

        this.editor.on('nodeSelected', function(id) {
          console.log("Node selected " + id);
        })

        this.editor.on('moduleCreated', function(name) {
          console.log("Module Created " + name);
        })

        this.editor.on('moduleChanged', function(name) {
          console.log("Module Changed " + name);
        })

        this.editor.on('connectionCreated', function(connection) {
          console.log('Connection created');
          console.log(connection);
        })

        this.editor.on('connectionRemoved', function(connection) {
          console.log('Connection removed');
          console.log(connection);
        })
        /*
            editor.on('mouseMove', function(position) {
              console.log('Position mouse x:' + position.x + ' y:'+ position.y);
            })
        */
        this.editor.on('nodeMoved', function(id) {
          console.log("Node moved " + id);
        })

        this.editor.on('zoom', function(zoom) {
          console.log('Zoom level ' + zoom);
        })

        this.editor.on('translate', function(position) {
          console.log('Translate x:' + position.x + ' y:'+ position.y);
        })

        this.editor.on('addReroute', function(id) {
          console.log("Reroute added " + id);
        })

        this.editor.on('removeReroute', function(id) {
          console.log("Reroute removed " + id);
        })
        /* DRAG EVENT */

        /* Mouse and Touch Actions */

        var elements = document.getElementsByClassName('drag-drawflow');
        for (var i = 0; i < elements.length; i++) {
          elements[i].addEventListener('touchend', drop, false);
          elements[i].addEventListener('touchmove', positionMobile, false);
          elements[i].addEventListener('touchstart', drag, false );
        }

        var mobile_item_selec = '';
        var mobile_last_move:any;

        function positionMobile(ev:any) {
          mobile_last_move = ev;
        }
        function allowDrop(ev:any) {
          ev.preventDefault();
        }

        function drag(ev:any) {
          if (ev.type === "touchstart") {
            mobile_item_selec = ev.target.closest(".drag-drawflow").getAttribute('data-node');
          } else {
          ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
          }
        }

        function drop(ev:any) {
          if (ev.type === "touchend") {
            var parentdrawflow = null; // document.elementFromPoint( mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY).closest("#drawflow");
            if(parentdrawflow != null) {
              addNodeToDrawFlow(mobile_item_selec, mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY);
            }
            mobile_item_selec = '';
          } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("node");
            addNodeToDrawFlow(data, ev.clientX, ev.clientY);
          }
        }
        let _this:any = this;

        function addNodeToDrawFlow(name:any, pos_x:any, pos_y:any) {
          if(_this.editor.editor_mode === 'fixed') {
            return false;
          }
          pos_x = pos_x * ( _this.editor.precanvas.clientWidth / (_this.editor.precanvas.clientWidth * _this.editor.zoom)) - (_this.editor.precanvas.getBoundingClientRect().x * ( _this.editor.precanvas.clientWidth / (_this.editor.precanvas.clientWidth * _this.editor.zoom)));
          pos_y = pos_y * ( _this.editor.precanvas.clientHeight / (_this.editor.precanvas.clientHeight * _this.editor.zoom)) - (_this.editor.precanvas.getBoundingClientRect().y * ( _this.editor.precanvas.clientHeight / (_this.editor.precanvas.clientHeight * _this.editor.zoom)));
        
          switch (name) {
            case 'facebook':
            var facebook = `
            <div>
              <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>
            </div>
            `;
            _this.editor.addNode('facebook', 0,  1, pos_x, pos_y, 'facebook', {}, facebook );
              break;
            case 'slack':
              var slackchat = `
              <div>
                <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>
              </div>
              `
              _this.editor.addNode('slack', 1, 0, pos_x, pos_y, 'slack', {}, slackchat );
              break;
            case 'github':
              var githubtemplate = `
              <div>
                <div class="title-box"><i class="fab fa-github "></i> Github Stars</div>
                <div class="box">
                  <p>Enter repository url</p>
                <input type="text" df-name>
                </div>
              </div>
              `;
              _this.editor.addNode('github', 0, 1, pos_x, pos_y, 'github', { "name": ''}, githubtemplate );
              break;
            case 'telegram':
              var telegrambot = `
              <div>
                <div class="title-box"><i class="fab fa-telegram-plane"></i> Telegram bot</div>
                <div class="box">
                  <p>Send to telegram</p>
                  <p>select channel</p>
                  <select df-channel>
                    <option value="channel_1">Channel 1</option>
                    <option value="channel_2">Channel 2</option>
                    <option value="channel_3">Channel 3</option>
                    <option value="channel_4">Channel 4</option>
                  </select>
                </div>
              </div>
              `;
              _this.editor.addNode('telegram', 1, 0, pos_x, pos_y, 'telegram', { "channel": 'channel_3'}, telegrambot );
              break;
            case 'aws':
              var aws = `
              <div>
                <div class="title-box"><i class="fab fa-aws"></i> Aws Save </div>
                <div class="box">
                  <p>Save in aws</p>
                  <input type="text" df-db-dbname placeholder="DB name"><br><br>
                  <input type="text" df-db-key placeholder="DB key">
                  <p>Output Log</p>
                </div>
              </div>
              `;
              _this.editor.addNode('aws', 1, 1, pos_x, pos_y, 'aws', { "db": { "dbname": '', "key": '' }}, aws );
              break;
            case 'log':
                var log = `
                <div>
                  <div class="title-box"><i class="fas fa-file-signature"></i> Save log file </div>
                </div>
                `;
                _this.editor.addNode('log', 1, 0, pos_x, pos_y, 'log', {}, log );
                break;
              case 'google':
                var google = `
                <div>
                  <div class="title-box"><i class="fab fa-google-drive"></i> Google Drive save </div>
                </div>
                `;
                _this.editor.addNode('google', 1, 0, pos_x, pos_y, 'google', {}, google );
                break;
              case 'email':
                var email = `
                <div>
                  <div class="title-box"><i class="fas fa-at"></i> Send Email </div>
                </div>
                `;
                _this.editor.addNode('email', 1, 0, pos_x, pos_y, 'email', {}, email );
                break;
    
              case 'template':
                var template = `
                <div>
                  <div class="title-box"><i class="fas fa-code"></i> Template</div>
                  <div class="box">
                    Ger Vars
                    <textarea df-template></textarea>
                    Output template with vars
                  </div>
                </div>
                `;
                _this.editor.addNode('template', 1, 1, pos_x, pos_y, 'template', { "template": 'Write your template'}, template );
                break;
              case 'multiple':
                var multiple = `
                <div>
                  <div class="box">
                    Multiple!
                  </div>
                </div>
                `;
                _this.editor.addNode('multiple', 3, 4, pos_x, pos_y, 'multiple', {}, multiple );
                break;
              case 'personalized':
                var personalized = `
                <div>
                  Personalized
                </div>
                `;
                _this.editor.addNode('personalized', 1, 1, pos_x, pos_y, 'personalized', {}, personalized );
                break;
              case 'dbclick':
                var dbclick = `
                <div>
                <div class="title-box"><i class="fas fa-mouse"></i> Db Click</div>
                  <div class="box dbclickbox" ondblclick="showpopup(event)">
                    Db Click here
                    <div class="modal" style="display:none">
                      <div class="modal-content">
                        <span class="close" onclick="closemodal(event)">&times;</span>
                        Change your variable {name} !
                        <input type="text" df-name>
                      </div>
    
                    </div>
                  </div>
                </div>
                `;
                _this.editor.addNode('dbclick', 1, 1, pos_x, pos_y, 'dbclick', { name: ''}, dbclick );
                break;
    
            default:
          }
          return true;
        }
    

      } else {
        console.error('Drawflow host element does not exist');
      }

    } catch (exception) {
      console.error('Unable to start Drawflow', exception);
    }
  }

  

}