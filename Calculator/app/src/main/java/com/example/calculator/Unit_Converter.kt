package com.example.calculator

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.MenuItem
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.ActionBarDrawerToggle
import androidx.drawerlayout.widget.DrawerLayout
import com.google.android.material.navigation.NavigationView

class Unit_Converter : AppCompatActivity() {

    lateinit var toggle : ActionBarDrawerToggle

    lateinit var UnitInput: EditText

    var onClearDecimal = false
    var operator = false
    var operator1 = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_unit_converter)

        UnitInput = findViewById(R.id.unit_input)

        val actionBar = supportActionBar
        actionBar!!.title = "Unit Converter"

        actionBar.setDisplayHomeAsUpEnabled(true)

        val drawerLayout : DrawerLayout = findViewById(R.id.drawerLayout)
        val navView : NavigationView = findViewById(R.id.nav_view)

        toggle = ActionBarDrawerToggle(this,drawerLayout,R.string.open,R.string.close)
        drawerLayout.addDrawerListener(toggle)
        toggle.syncState()

        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        navView.setNavigationItemSelectedListener {

            when(it.itemId){

                R.id.miletokm -> miletokm()
                R.id.kmtomile -> kmtomile()
                R.id.foottom -> foottom()
                R.id.mtofoot -> mtofoot()
                R.id.KtoF -> KtoF()
                R.id.FtoK -> FtoK()
                R.id.CtoF -> CtoF()
                R.id.FtoC -> FtoC()
                R.id.kmphtomps -> kmphtomps()
                R.id.mpstokmph -> mpstokmph()
                R.id.rtod -> rtod()
                R.id.dtor -> dtor()

            }

            true

        }

    }

    fun miletokm() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var km: Double = input.toDouble()
        var mile: Double = km*1.60926
        UnitOutput.text = mile.toString()
    }

    fun kmtomile() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var mile: Double = input.toDouble()
        var km: Double = mile*0.6214
        UnitOutput.text = km.toString()
    }

    fun foottom() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var foot: Double = input.toDouble()
        var m: Double = foot*0.30479
        UnitOutput.text = m.toString()
    }

    fun mtofoot() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var m: Double = input.toDouble()
        var foot: Double = m*3.2808
        UnitOutput.text = foot.toString()
    }

    fun KtoF() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var K: Double = input.toDouble()
        var F: Double = ((K-273.15)*(9/5))+32
        UnitOutput.text = F.toString()
    }

    fun FtoK() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var F: Double = input.toDouble()
        var K: Double = ((F-32)*(5/9))+273.15
        UnitOutput.text = K.toString()
    }

    fun FtoC() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var F: Double = input.toDouble()
        var C: Double = ((F-32)*(5/9))
        UnitOutput.text = C.toString()
    }

    fun CtoF() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var C: Double = input.toDouble()
        var F: Double = (C*(9/5))+32
        UnitOutput.text = F.toString()
    }

    fun kmphtomps() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var kmph: Double = input.toDouble()
        var mps: Double = kmph/3.6
        UnitOutput.text = mps.toString()
    }

    fun mpstokmph() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var mps: Double = input.toDouble()
        var kmph: Double = mps*3.6
        UnitOutput.text = kmph.toString()
    }

    fun rtod() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var r: Double = input.toDouble()
        var d: Double = r*57.2958
        UnitOutput.text = d.toString()
    }

    fun dtor() {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        var input = UnitInput.text.toString()
        var d: Double = input.toDouble()
        var r: Double = d*0.01745
        UnitOutput.text = r.toString()
    }



    override fun onOptionsItemSelected(item: MenuItem): Boolean {

        if (toggle.onOptionsItemSelected(item)){

            return true

        }
        return super.onOptionsItemSelected(item)
    }

    fun onHome(view: View) {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
    }

    fun onDigit(view: View) {
        UnitInput.append((view as Button).text)
        onClearDecimal = false
        operator1 = false
    }

    fun onClear(view: View) {
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        UnitInput.text = null
        UnitOutput.text = ""
        onClearDecimal = true
    }

    fun onBack(view: View) {
        val UnitInput = findViewById<TextView>(R.id.unit_input)
        val UnitOutput = findViewById<TextView>(R.id.unit_output)
        val tvInputLength = findViewById<TextView>(R.id.unit_input).length()
        if (tvInputLength != 0) {
            UnitInput.text = UnitInput.text.subSequence(0, tvInputLength - 1)
            UnitInput.text = UnitInput.text
        }
        UnitOutput.text = ""
    }

    fun onDecimal (view: View) {
        val UnitInput = findViewById<TextView>(R.id.unit_input)
        if (operator || !isDecimalAdded(UnitInput.text.toString())) {
            UnitInput.append(".")
            onClearDecimal = false
            operator = false
        }

        else if (onClearDecimal) {
            UnitInput.append("0.")
            onClearDecimal = false
        }
    }

    private fun isDecimalAdded(value: String) : Boolean {
        return value.contains(".")
    }

    fun onEqual (view: View) {

    }


}