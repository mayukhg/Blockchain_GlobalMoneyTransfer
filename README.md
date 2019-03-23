# Global Money transfer monitoring using Blockchain

> This is an interactive demo of the application of Blockchain for monitoring of Global Money Transfer. This demo aims to create a transaction tracker to determine which entity in the global money transfer supply chain currently has the amount being transacted. The various entities first need to confim the receipt of the amount and then need to send it to the downstream entity in the supply chain

>The distributed hyper ledger will provide transaction transparency for Global Money transfer

The business network defines:

**Paticipants:** `Money_Sender` `DepositEntity` `Aggregator` `Bank` `Money_Receiver`

**Assets:** `Trans` `TransStatus`

**Transactions:** `DepositedWithEntity` `SentToAggregator` `ReceivedByAggregator` `SentToBank` `ReceivedByBank``CreditedToRecipient` `ConfirmedByRecipient`

Here is a summary of the various transactions which are part of the flow

(1) DepositWithEntity - The Money Sender deposits the amount with the Global Money Transfer Vender
(2) SentToAggregator - The Vendor sends amount to Aggregator
(3) ReceivedByAggregator - The Aggregator confirms the receipt of the amount
(4) SentToBank - The Aggregator sends amount to the Recipient's Bank
(5) ReceivedByBank - The Recipient's Bank confirms the receipt of the amount
(6) CreditedToRecipient - The amount is credited to the Recipient
(7) ConfirmedByRecipient - The amount receipt is confirmed by the Recipient


