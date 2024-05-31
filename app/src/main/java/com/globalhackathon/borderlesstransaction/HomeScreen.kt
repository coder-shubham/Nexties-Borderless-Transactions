package com.globalhackathon.borderlesstransaction

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.globalhackathon.borderlesstransaction.ui.theme.BorderlessTransactionTheme

class HomeScreen : ComponentActivity() {

    private val retrofit = Retrofit.Builder()
        .baseUrl("http://your_python_api_url") // Replace with your API url
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BorderlessTransactionTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting3("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting3(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview3() {
    BorderlessTransactionTheme {
        Greeting3("Android")
    }
}

private fun getAccountBalance() {
    val apiService = retrofit.create(YourApiService::class.java) // Replace with your API interface

    val call = apiService.getAccountBalance()
    call.enqueue(object : Callback<BalanceResponse> {
        override fun onResponse(
            call: Call<BalanceResponse>,
            response: Response<BalanceResponse>
        ) {
            if (response.isSuccessful) {
                val balance = response.body()?.balance ?: 0.0
                // Update UI with balance information
            } else {
                // Handle API error
            }
        }

        override fun onFailure(call: Call<BalanceResponse>, t: Throwable) {
            // Handle network error
        }
    })
}
}

interface YourApiService {
    @GET("/balance")
    fun getAccountBalance(): Call<BalanceResponse>
}

data class BalanceResponse(val balance: Double)