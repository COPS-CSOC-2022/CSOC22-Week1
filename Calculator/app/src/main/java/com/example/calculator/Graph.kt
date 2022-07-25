package com.example.calculator

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class Graph : AppCompatActivity() {

    private lateinit var value: TextView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_graph)

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
}