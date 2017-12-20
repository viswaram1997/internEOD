import React, { Component } from 'react';


import "./DisplayDashboard.css";
import Model from "./Model/Model";
import { Card } from 'semantic-ui-react';

import CardModel from "../CardModel/cardmodel";




export default class DisplayDashboard extends Component {
  constructor(props) {
    super(props);
    // this.props.Getdetails("viswa");
    this.state = {
      data: "",
      show: false,
      cardshow: false

    }
    // this.ShowCard=this.ShowCard.bind();
    this.GetCardDetails = this.GetCardDetails.bind(this);
    this.closecard = this.closecard.bind(this);

  }
  componentDidMount() {

    this.props.Getdetails("viswa");
  }
  GetCardDetails(id) {
    this.props.Getcarddetails(id);
    console.log(this.props.getcarddata.response);

    
    this.setState({
      cardshow: true
    });
    console.log(this.state.cardshow)
  }
  closecard() {
    this.setState({
      cardshow: false
    })
  }




  render() {
    // console.log(this.props.getcarddata.response,"viswa");

    // if(!isEmpty(this.props.getdata.response)){ this.setState({
    //   data:this.props.getdata.response

    // });}
   console.log(this.props.getdata.response);

    return (
      <div>
        <div class="headers">
          <div class="sidess">
            <a href="#" class="logos">BLOG</a>
          </div>
          <div class="sidess"> <a href="#" class="menus">-</a></div>
          <div class="infos">
            <h4><a href="#category">UI DESIGN</a></h4>
            <h1>ANIMATED HEADERS ARE THE BEST</h1>

          </div>
        </div>
        <section class="contents" Style={"margin-left:-125px"}>
          <div ><Model {...this.props} /></div>
          <div>
            <CardModel {...this.props} closecard={this.closecard} cardshow={this.state.cardshow} />
          </div>
          <div>

            {/* <Card.Group itemsPerRow="4">

              {this.props.getdata.response !== "" ? this.props.getdata.response.map((data) => {
                return (
                  <Card link rasied onClick={() => {
                    this.GetCardDetails(data.id)
                  }}>
                    <Card.Content >

                      <Card.Header>
                        <b>Day{data.id}</b>
                      </Card.Header>
                      <Card.Meta>
                        date
           </Card.Meta>
                      <Card.Description>
                        No project : {data.lenght}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                );
              }) : null}




            </Card.Group> */}


          </div>



          <p align="center"><a href="https://twitter.com/nodws" class="btn twtr" target="_b">Follow me on Twitter</a>
          </p>
        </section>
        <div />
      </div>
    )
  }
}
