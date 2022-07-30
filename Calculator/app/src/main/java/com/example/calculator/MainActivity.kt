package com.example.calculator

import android.content.Intent
import android.content.pm.ActivityInfo
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import net.objecthunter.exp4j.ExpressionBuilder

class MainActivity : AppCompatActivity() {

    private lateinit var tvResult:TextView
    private lateinit var tvInput: EditText

    var onClearDecimal = false
    var operator = false
    var operator1 = false
    var isPortrait = true

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val actionBar = supportActionBar
        actionBar!!.title = "Calculator"

        tvResult = findViewById(R.id.tvResult)
        tvInput = findViewById(R.id.tvInput)
    }

    private fun updateText(strToAdd:String){

        val oldStr = tvInput.text.toString()
        val cursorPs = tvInput.selectionStart
        val leftStr = oldStr.substring(0,cursorPs)
        val rightStr = oldStr.substring(cursorPs)
        tvInput.setText(String.format("%s%s%s",leftStr,strToAdd,rightStr))
        tvInput.setSelection(cursorPs + strToAdd.length)
    }

    fun onDigit(view: View) {
        tvInput.append((view as Button).text)
        onClearDecimal = false
        operator1 = false
    }


    fun onOperator (view: View) {
        val tvInput = findViewById<TextView>(R.id.tvInput)
        if(!operator1) {
            tvInput.append((view as Button).text)
            operator = true
            onClearDecimal = false
            operator1 = true
        }
    }

    fun onClear(view: View) {
        val tvInput = findViewById<TextView>(R.id.tvInput)
        val tvResult = findViewById<TextView>(R.id.tvResult)
        tvInput.text = ""
        tvResult.text = ""
        onClearDecimal = true
    }

    fun onBack(view: View) {
        val tvInput = findViewById<TextView>(R.id.tvInput)
        val tvResult = findViewById<TextView>(R.id.tvResult)
        val tvInputLength = findViewById<TextView>(R.id.tvInput).length()
        if (tvInputLength != 0) {
            tvInput.text = tvInput.text.subSequence(0, tvInputLength - 1)
            tvInput.text = tvInput.text
        }
        tvResult.text = ""
    }

    fun onDecimal (view: View) {
        val tvInput = findViewById<TextView>(R.id.tvInput)
        if (operator || !isDecimalAdded(tvInput.text.toString())) {
            tvInput.append(".")
            onClearDecimal = false
            operator = false
        }

        else if (onClearDecimal) {
            tvInput.append("0.")
            onClearDecimal = false
        }
    }

    private fun isDecimalAdded(value: String) : Boolean {
        return value.contains(".")
    }

    fun onEqual (view:View) {

        val expression = ExpressionBuilder(tvInput.text.toString()).build()
        val result = expression.evaluate()
        val longResult = result.toLong()

        if(result == longResult.toDouble()) {
            tvResult.text = "= " + longResult.toString()
        }
        else {
            tvResult.text = "= " + result.toString()
        }
    }

//    Trigonometric Input

    fun onSin(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("sin(")
    }

    fun onCos(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("cos(")
    }

    fun onTan(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("tan(")
    }

    fun onArcSin(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("asin(")
    }

    fun onArcCos(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("acos(")
    }

    fun onArcTan(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("atan(")
    }

//    Scientific Input

    fun onLog(view: View) {
        onClearDecimal = false
        operator1 = false
        updateText("log(")
    }

    fun onPrime(view: View) {
        updateText("isprc(")
    }

    fun onSqrt(view: View) {
        updateText("sqrt(")
    }

    fun onEX(view: View) {
        updateText("e^(")
    }

    fun onABS(view: View) {
        updateText("abs(")
    }

    fun onSq(view: View) {
        updateText("^(2)")
    }

    fun onPower(view: View) {
        updateText("^(")
    }

    fun onCube(view: View) {
        updateText("^(3)")
    }

//    Plotting Graph
    fun onGraph(view: View) {
        val intent = Intent(this, Graph::class.java)
        startActivity(intent)
    }

    fun onTheme(view: View) {
        val intent = Intent(this, MainActivity_Light::class.java)
        startActivity(intent)
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
    }

    fun onUnit(view: View) {
        val intent = Intent(this, Unit_Converter::class.java)
        startActivity(intent)
    }

    fun onRotate(view:View){

        requestedOrientation = if (isPortrait){
            ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
        }
        else{
            ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
        }
        isPortrait = !isPortrait
    }

    fun onMatrix(view: View) {

    }

    fun onHostory(view: View) {

    }

}