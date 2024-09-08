import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILead } from "../../ts/interfaces/ILead";

export const APIService = createApi({
    reducerPath: 'APIService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://sadgerondo.amocrm.ru/api/v4/',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjliYjRiN2NkYzEwZjcyZWFiNmYzYWFkNzkyNDJiMTcxMTcwNWQwNWU0YTY3ZjEzOGQ3ZGEwOTZiZGQ3MTZmZGNkNWViY2EzZWNhY2NmZTdjIn0.eyJhdWQiOiJlMjNkN2EzOC1kMWY0LTRjNmMtOWZiZC0xNDExYzM1OTAzMDYiLCJqdGkiOiI5YmI0YjdjZGMxMGY3MmVhYjZmM2FhZDc5MjQyYjE3MTE3MDVkMDVlNGE2N2YxMzhkN2RhMDk2YmRkNzE2ZmRjZDVlYmNhM2VjYWNjZmU3YyIsImlhdCI6MTcyNTc4MzU1OSwibmJmIjoxNzI1NzgzNTU5LCJleHAiOjE3MjU4Njk5NTksInN1YiI6IjExNDkwMTc0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM4Mjc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzUyNjEyMDQtMzE0Ni00NGI3LWFkMWItZmYyMTE4NGNjZmI4IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.RjNwATubOBp88L31YKkvpcaWLYTVmcplHl3MUYHm6TxA3gyIkCzW_KEu0HNiKSpf-h1rIgxf3d9j-94DrDuJhxUe9a75pAgMAHd6ubE-dO2DykjfhJ_vTwHC-eMhsotHUOAF-yyVBixFlm21yltT-WMJ8NIXxl2EY5V_3baGMy6lsXy4Z1ddtxVeciwDAq2TCb2oxsZs-QIYVx3fUHrTotrBgAizKpe3C-Ia5tDuZvm-ELTcQqlZmJgGIfRhcXGOgdOfeYI6s8MiHUI9rRR39_TRCrQx5wO9p_z2H1YLbjAmRZu1hq2mFaSElWO96MlPTYqhoiqaY-t_XBLnGmGmOg`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getLimitedLeads: builder.query<ILead[], string | number>({
            query: (limit) => {
                const params = new URLSearchParams({ limit: String(limit) });
                return {
                    url: `leads?order[id]=asc`,
                    params:params,
                    method: 'GET'
                };
            },
            transformResponse: (response: any) => response._embedded.leads
        }),
        getRevealdLeadById: builder.query<ILead, string | number>({
            query: (leadId) => {
                return {
                    url: `leads/${leadId}`,
                    method:'GET'
                }
            }
        })
    })
});
