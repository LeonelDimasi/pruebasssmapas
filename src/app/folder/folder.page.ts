import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleCharts } from 'google-charts';
import mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    GoogleCharts.load(this.drawChart);
    GoogleCharts.load(this.drawaa);
    this.verMapa();
  }




  //Load the charts library with a callback

  drawChart() {

    // Standard google charts functionality is available as GoogleCharts.api after load
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Chart thing', 'Chart amount'],
      ['Lorem ipsum', 60],
      ['Dolor sit', 22],
      ['Sit amet', 18]
    ]);
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
    pie_1_chart.draw(data);
  }

  drawaa() {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' }],
      ['Copper', 8.94, '#b87333'],            // RGB value
      ['Silver', 10.49, 'silver'],            // English color name
      ['Gold', 19.30, 'gold'],
      ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
    ]);
    const chart = new GoogleCharts.api.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(data);
  }



  verMapa() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmVsOTIiLCJhIjoiY2p1ZDlsbGlhMGNjazQ0cjF3NzVpcDU4aSJ9.YVYELRf7-qj3jI9_a8KFng';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [4.899, 52.372]
    });

    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');
    
    function switchLayer(layer) {
      var layerId = layer.target.id;
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }

  }


}
