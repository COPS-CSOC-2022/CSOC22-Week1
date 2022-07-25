package com.example.calculator

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.series.DataPoint
import com.jjoe64.graphview.series.LineGraphSeries

class PlottingGraph : AppCompatActivity() {

    var series: LineGraphSeries<DataPoint>? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_plotting_graph)

        val actionBar = supportActionBar
        actionBar!!.title = "Plotting Graph"

        actionBar.setDisplayHomeAsUpEnabled(true)

        var y: Double
        var x: Double = 0.0

        val graph = findViewById<View>(R.id.graph) as GraphView
        series = LineGraphSeries()
        for (i in 0..99) {
            x += 0.1

            val value = intent.getStringExtra("value_key")

            y = 0.0
            when(value) {
                "sin(x)" -> y = Math.sin(x)
                "cos(x)" -> y = Math.cos(x)
                "tan(x)" -> y = Math.tan(x)
                "csc(x)" -> y = 1/(Math.sin(x))
                "sec(x)" -> y = 1/(Math.cos(x))
                "cot(x)" -> y = 1/Math.tan(x)
                "x²" -> y = x*x
                "x³" -> y = x*x*x
                "√x" -> Math.sqrt(x)
                "x" -> y = x
                "log(x)" -> y = Math.log10(x)
             }

            series!!.appendData(DataPoint(x, y), true, 100)
        }
        graph.addSeries(series)

    }

}
