package com.globalhackathon.borderlesstransaction

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.appcompat.app.AlertDialog
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.globalhackathon.borderlesstransaction.ui.theme.BorderlessTransactionTheme

class send_payment_screen : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BorderlessTransactionTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting4("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting4(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview4() {
    BorderlessTransactionTheme {
        Greeting4("Android")
    }
}

private fun createConfirmationDialog(
    sendCurrency: String,
    receiveCurrency: String,
    amount: Double,
    exchangeRate: Double,
    recipientAddress: String
): AlertDialog {
    val builder = AlertDialog.Builder(this)
    builder.setTitle("Confirm Transaction")
    builder.setMessage(
        "Send ${amount.toString()} $sendCurrency \n" +
                "Receive: ${amount * exchangeRate} $receiveCurrency \n" +
                "Recipient Address: $recipientAddress"
    )
    builder.setPositiveButton("Confirm") { dialog, _ ->
        // Call API to initiate cross-chain swap through Python backend
        initiateSwap(sendCurrency, receiveCurrency, amount, recipientAddress)
        dialog.dismiss()
    }
    builder.setNegativeButton("Cancel") { dialog, _ ->
        dialog.dismiss()
    }
    return builder.create()
}

private fun initiateSwap(
    sendCurrency: String,
    receiveCurrency: String,
    amount: Double,
    recipientAddress: String
) {
    val apiService = retrofit.create(YourApiService::class.java)

    val call = apiService.initiateSwap(sendCurrency, receiveCurrency, amount, recipientAddress)
    call.enqueue(object : Callback<SwapResponse> {
        override fun onResponse(
            call: Call<SwapResponse>,
            response: Response<SwapResponse>
        ) {
            if (response.isSuccessful) {
                val message = response.body()?.message ?: "Swap initiated!"
                Toast.makeText(this@SendPaymentScreen, message, Toast.LENGTH_SHORT).show()
                // Clear transaction data or navigate back to home screen
            } else {
                // Handle API error
            }
        }

        override fun onFailure(call: Call<SwapResponse>, t: Throwable) {
            // Handle network error
        }
    })
}
}

interface YourApiService {
    @GET("/exchange_rate")
    fun getExchangeRate(
        @Query("send_currency") sendCurrency: String,
        @Query("receive_currency") receiveCurrency: String,
        @Query("amount") amount: Double
    ): Call<ExchangeRateResponse>

    @POST("/swap")
    fun initiateSwap(
        @Body sendCurrency: String,
        @Body receiveCurrency: String,
        @Body amount: Double,
        @Body recipientAddress: String
    ): Call<SwapResponse>
}

data class ExchangeRateResponse(val rate: Double)
data class SwapResponse(val message: String?)


