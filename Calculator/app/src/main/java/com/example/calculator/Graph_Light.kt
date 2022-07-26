package com.example.calculator

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView

class Graph_Light : AppCompatActivity() {

    private lateinit var value: TextView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_graph_light)

        val actionBar = supportActionBar
        actionBar!!.title = "Graph"

        actionBar.setDisplayHomeAsUpEnabled(true)

        value = findViewById(R.id.value)
    }

    fun onClick(view: View) {
        value.append((view as Button).text)
    }

    fun onGraphPlot(view: View) {
        val intent = Intent(this, PlottingGraph::class.java)
        val value = value.text.toString()
        intent.putExtra("value_key", value)
        startActivity(intent)
    }

    fun onTheme(view: View) {
        val intent = Intent(this, Graph::class.java)
        startActivity(intent)
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
    }
}