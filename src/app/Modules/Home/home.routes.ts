import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { CusMainhomeComponent } from "./cus-mainhome/cus-mainhome.component";
import { CusCurtransComponent } from './cus-curtrans/cus-curtrans.component';
import { HistoryComponent } from './history/history.component';
import { CusPaymentComponent } from "./cus-payment/cus-payment.component";
import { NewCurtransComponent } from "./new-curtrans/new-curtrans.component";

export const homeRoute: Routes = [
    {path: 'homemain',component: CusMainhomeComponent,
        children: [
            {path:"cuscurtrans",component:CusCurtransComponent},
            {path:"newcurtrans",component:NewCurtransComponent},
            {path:"history",component:HistoryComponent,
                children: [
                    {path:"payment",component:CusPaymentComponent},
                    {path:"",redirectTo:"payment",pathMatch:"full"}
                ]
            },
            {path:"",redirectTo:"cuscurtrans",pathMatch:"full"}
    ]

    },
    {path:"",redirectTo:'homemain',pathMatch:'full'}

]