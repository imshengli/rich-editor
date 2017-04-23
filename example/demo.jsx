import React, { Component } from "react";
import ReactDOM from "react-dom";
import { RichEditor } from '../index.jsx';
import './demo.scss';

const STATIC_HTML = '<div><h2>The Little Prince</h2><p>Once when I was six years old I saw a magnificent picture in a book, called <strong><em>True Stories from Nature</em></strong>, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing. </p><p>In the book it said: "<em>Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion.</em>"</p><p>I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked something like this:</p><figure><img src="http://tmallstudio.qiniudn.com/2017/04/23/sombrero.gif" alt="sombrero" /></figure><p>I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them.</p><p><br /></p><p>----</p><p>The story above from: <a href="https://www.odaha.com/antoine-de-saint-exupery/maly-princ/the-little-prince">ODAHA</a></p></div>';

class Demo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="demo">
            <RichEditor ref='rich-editor' />
            <div className="demo-buttons">
                <input className="primary" type="button" value="SET HTML" onClick={this.setHTML.bind(this)} />
                <input className="primary" type="button" value="GET HTML" onClick={this.getHTML.bind(this)} />
            </div>
            <div className="demo-output-wrapper util-clearfix">
                <div className="demo-output" id="demo-rendered-output">
                    <div className="demo-output-tips">RENDERED HTML</div>
                    <div className="demo-output-content">The Rendered HTML will display here when click the 'GET HTML' button.<br />
                        <img className="demo-output-logo-img" src="http://tmallstudio.qiniudn.com/2017/04/24/03/rich-editor-logo-black.png" />
                    </div>
                </div>
                <div className="demo-output" id="demo-raw-output">
                    <div className="demo-output-tips">RAW HTML</div>
                    <div className="demo-output-content">The Raw HTML will display here when click the 'GET HTML' button.
                        <img className="demo-output-logo-img" src="http://tmallstudio.qiniudn.com/2017/04/24/03/rich-editor-logo-black.png" />
                    </div>
                </div>
            </div>
        </div>)
    }
    setHTML() {
        this.refs['rich-editor'].setHTML(STATIC_HTML);
    }
    getHTML() {
        const html = this.refs['rich-editor'].getHTML();
        document.getElementById('demo-rendered-output').querySelector('.demo-output-content').innerHTML = html;
        document.getElementById('demo-raw-output').querySelector('.demo-output-content').innerText = html;
    }
}

ReactDOM.render(<Demo />,
    document.getElementById('root'));

