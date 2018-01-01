import React, {Component} from 'react';
import '../App';
import wikiPagesData from '../data/wikiPagesData';
import $ from 'jquery'

export class Description extends Component {

    getDescription() {
        var page = wikiPagesData[this.props.name]
        $("#article").html("")        
        if(page != null && page !== undefined){
            $.ajax({
                type: "GET",
                url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+page+"&callback=?",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
         
                    var markup = data.parse.text["*"];
                    var blurb = $('<div></div>').html(markup);
         
                    // remove links as they will not work
                    blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
         
                    // remove any references
                    blurb.find('sup').remove();
         
                    // remove cite error
                    blurb.find('.mw-ext-cite-error').remove();
                    $('#article').html($(blurb).find('p'));
         
                },
                error: function (errorMessage) {
                }
            });
        }else{
            $("#article").html("no data") 
        }
    }

    componentDidMount() {
        this.getDescription()
    }

    componentDidUpdate() {
        this.getDescription()
    }

    render() {
        
        return (
            <div className="description">
                <h3>{this.props.name} / Description</h3>
                <div className="coin-description" id="article">
                </div>
            </div>
        );
    }
}