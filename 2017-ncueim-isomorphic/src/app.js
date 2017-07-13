import React from 'react';
import ReactDOM from 'react-dom';
import Gauge from 'react-svg-gauge';

import './reset.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.scss'

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            bmi: null
        }
    }
    //主要函式
    caculate = () => {
        function getMsg(h, w) {
            if (!(h > 0 && w > 0)) return;
            function getBMI(h, w) {
                return (w / Math.pow((h / 100), 2));
            }
            return getBMI(h, w).toFixed(2);
        }
        let bmi = getMsg(this.height.value, this.weight.value);

        if (bmi > 0 && bmi < 50) {
            let label, color;
            if (bmi < 18.5) {
                label = "體重過輕";
                color = "Blue"
            } else if (bmi < 24) {
                label = "正常範圍";
                color = "Green"
            } else if (bmi < 27) {
                label = "過重";
                color = "Yellow"
            } else if (bmi < 30) {
                label = "輕度肥胖";
                color = "Orange"
            } else if (bmi < 35) {
                label = "中度肥胖";
                color = "Red"
            } else {
                label = "重度肥胖";
                color = "Black"
            }
            this.setState({ ...this.state, bmi, label, color });
        } else {
            this.setState({ ...this.state, bmi: null });
        }
    }

    componentDidMount() {
        //this.caculate();
    }

    render() {
        return (
            <div className="bmicontainer">
                <input type="number" ref={(input) => { this.height = input; }} placeholder="身高(cm)" onInput={this.caculate} />
                <input type="number" ref={(input) => { this.weight = input; }} placeholder="體重(kg)" onInput={this.caculate} />
                <label ref={(input) => { this.result = input; }} />
                {
                    (this.state.bmi > 0) ? <Gauge
                        width={400}
                        height={320}
                        min={0}
                        max={50}
                        color={this.state.color}
                        value={this.state.bmi}
                        label={this.state.label} /> : <label>輸入格式錯誤</label>
                }
            </div>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('root'))