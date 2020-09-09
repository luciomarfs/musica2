import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import GerarNumeros from './GerarNumeros'
import './Carta.css'




const figuras = ['fim', 'longa_hor', 'longa_ver', 'curta_hor', 'curta_ver', 'ponto', 'branco']
const instrumento1 = GerarNumeros();
const instrumento2 = GerarNumeros();
const instrumento3 = GerarNumeros();
const instrumento4 = GerarNumeros();



export default class Carta extends Component {


    constructor(props) {
        super(props)
        this.state = { carta1: '', carta2: '', carta3: '', carta4: '', checked: true ,checked2:true}
    }
    componentDidMount() {
        

        let promise = new Promise((resolve, reject) => {

            this.setState({ checked: false })
            

            let num = 0;
            let interval = setInterval(() => {
                this.setState({
                    carta1: figuras[instrumento1[num]], carta2: figuras[instrumento2[num]],
                    carta3: figuras[instrumento3[num]], carta4: figuras[instrumento4[num]],
                    checked: true,checked2:false
                })


                num += 1;
                if (num > 24) {
                    this.setState({ checked: false })
                    clearInterval(interval);

                    resolve()
                }
                else {

                    this.setState({ checked: false })
                    setTimeout(() => {
                        this.setState({ checked: true })
                    }, 1000)

                }


            }, 6000)
        });
        promise.then()

    }
    render() {
        return (
            <Grid container className='cartao_geral'>
                <Grid item id={'quadrante1'}>
                    <Fade in={this.state.checked2} style={{ transitionDelay: this.state.checked ? '800ms' : '0ms', }} unmountOnExit>
                        <CircularProgress color="secondary" />
                    </Fade>

                    <Zoom in={this.state.checked}>
                        <div id="retangulo2">
                            <div className={this.state.carta1} ></div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item id={'quadrante2'}>
                    <Fade in={this.state.checked2}  style={{ transitionDelay: this.state.checked ? '800ms' : '0ms', }} unmountOnExit>
                        <CircularProgress color="secondary" />
                    </Fade>
                    <Zoom in={this.state.checked}>
                        <div id="retangulo2">
                            <div className={this.state.carta2}  ></div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item id={'quadrante3'} >
                    <Fade in={this.state.checked2}  style={{ transitionDelay: this.state.checked ? '800ms' : '0ms', }} unmountOnExit>
                        <CircularProgress color="secondary" />
                    </Fade>
                    <Zoom in={this.state.checked}>
                        <div id="retangulo2">
                            <div className={this.state.carta3}  ></div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item id={'quadrante4'}>
                    <Fade in={this.state.checked2}  style={{ transitionDelay: this.state.checked ? '800ms' : '0ms', }} unmountOnExit>
                        <CircularProgress color="secondary" />
                    </Fade>
                    <Zoom in={this.state.checked}>
                        <div id="retangulo2">
                            <div className={this.state.carta4}  ></div>
                        </div>
                    </Zoom>
                </Grid>
            </Grid>
        )
    }
}
