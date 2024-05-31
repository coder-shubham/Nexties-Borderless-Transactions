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

class TransactionHistoryScreen : ComponentActivity() {

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
                    Greeting6("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting6(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview6() {
    BorderlessTransactionTheme {
        Greeting6("Android")
    }
}

private fun getTransactionHistory() {
    val apiService = retrofit.create(YourApiService::class.java)

    val call = apiService.getTransactionHistory()
    call.enqueue(object : Callback<TransactionHistoryResponse> {
        override fun onResponse(
            call: Call<TransactionHistoryResponse>,
            response: Response<TransactionHistoryResponse>
        ) {
            if (response.isSuccessful) {
                val transactions = response.body()?.transactions ?: emptyList()
                // Update UI with transaction list data
            } else {
                // Handle API error
            }
        }

        override fun onFailure(call: Call<TransactionHistoryResponse>, t: Throwable) {
            // Handle network error
        }
    })
}
}

interface YourApiService {
    @GET("/transactions")
    fun getTransactionHistory(): Call<TransactionHistoryResponse>
}

data class TransactionHistoryResponse(val transactions: List<Transaction>?)
data class Transaction(val id: String, val type: String,