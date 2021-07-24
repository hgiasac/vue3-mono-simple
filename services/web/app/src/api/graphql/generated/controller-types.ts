import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['Int']>;
  readonly _gt?: Maybe<Scalars['Int']>;
  readonly _gte?: Maybe<Scalars['Int']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['Int']>;
  readonly _lte?: Maybe<Scalars['Int']>;
  readonly _neq?: Maybe<Scalars['Int']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['Int']>>;
};

/** columns and relationships of "example" */
export type Example = {
  readonly __typename?: 'example';
  readonly created_at: Scalars['timestamptz'];
  readonly id: Scalars['Int'];
  readonly updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "example" */
export type Example_Aggregate = {
  readonly __typename?: 'example_aggregate';
  readonly aggregate?: Maybe<Example_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Example>;
};

/** aggregate fields of "example" */
export type Example_Aggregate_Fields = {
  readonly __typename?: 'example_aggregate_fields';
  readonly avg?: Maybe<Example_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Example_Max_Fields>;
  readonly min?: Maybe<Example_Min_Fields>;
  readonly stddev?: Maybe<Example_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Example_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Example_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Example_Sum_Fields>;
  readonly var_pop?: Maybe<Example_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Example_Var_Samp_Fields>;
  readonly variance?: Maybe<Example_Variance_Fields>;
};


/** aggregate fields of "example" */
export type Example_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Example_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Example_Avg_Fields = {
  readonly __typename?: 'example_avg_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "example". All fields are combined with a logical 'AND'. */
export type Example_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Example_Bool_Exp>>;
  readonly _not?: Maybe<Example_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Example_Bool_Exp>>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly id?: Maybe<Int_Comparison_Exp>;
  readonly updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "example" */
export type Example_Constraint =
  /** unique or primary key constraint */
  | 'example_pkey';

/** input type for incrementing numeric columns in table "example" */
export type Example_Inc_Input = {
  readonly id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "example" */
export type Example_Insert_Input = {
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Example_Max_Fields = {
  readonly __typename?: 'example_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Example_Min_Fields = {
  readonly __typename?: 'example_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "example" */
export type Example_Mutation_Response = {
  readonly __typename?: 'example_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Example>;
};

/** on conflict condition type for table "example" */
export type Example_On_Conflict = {
  readonly constraint: Example_Constraint;
  readonly update_columns?: ReadonlyArray<Example_Update_Column>;
  readonly where?: Maybe<Example_Bool_Exp>;
};

/** Ordering options when selecting data from "example". */
export type Example_Order_By = {
  readonly created_at?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: example */
export type Example_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "example" */
export type Example_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "example" */
export type Example_Set_Input = {
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Example_Stddev_Fields = {
  readonly __typename?: 'example_stddev_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Example_Stddev_Pop_Fields = {
  readonly __typename?: 'example_stddev_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Example_Stddev_Samp_Fields = {
  readonly __typename?: 'example_stddev_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Example_Sum_Fields = {
  readonly __typename?: 'example_sum_fields';
  readonly id?: Maybe<Scalars['Int']>;
};

/** update columns of table "example" */
export type Example_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type Example_Var_Pop_Fields = {
  readonly __typename?: 'example_var_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Example_Var_Samp_Fields = {
  readonly __typename?: 'example_var_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Example_Variance_Fields = {
  readonly __typename?: 'example_variance_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  /** delete data from the table: "example" */
  readonly delete_example?: Maybe<Example_Mutation_Response>;
  /** delete single row from the table: "example" */
  readonly delete_example_by_pk?: Maybe<Example>;
  /** insert data into the table: "example" */
  readonly insert_example?: Maybe<Example_Mutation_Response>;
  /** insert a single row into the table: "example" */
  readonly insert_example_one?: Maybe<Example>;
  /** update data of the table: "example" */
  readonly update_example?: Maybe<Example_Mutation_Response>;
  /** update single row of the table: "example" */
  readonly update_example_by_pk?: Maybe<Example>;
};


/** mutation root */
export type Mutation_RootDelete_ExampleArgs = {
  where: Example_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Example_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ExampleArgs = {
  objects: ReadonlyArray<Example_Insert_Input>;
  on_conflict?: Maybe<Example_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Example_OneArgs = {
  object: Example_Insert_Input;
  on_conflict?: Maybe<Example_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ExampleArgs = {
  _inc?: Maybe<Example_Inc_Input>;
  _set?: Maybe<Example_Set_Input>;
  where: Example_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Example_By_PkArgs = {
  _inc?: Maybe<Example_Inc_Input>;
  _set?: Maybe<Example_Set_Input>;
  pk_columns: Example_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "example" */
  readonly example: ReadonlyArray<Example>;
  /** fetch aggregated fields from the table: "example" */
  readonly example_aggregate: Example_Aggregate;
  /** fetch data from the table: "example" using primary key columns */
  readonly example_by_pk?: Maybe<Example>;
};


export type Query_RootExampleArgs = {
  distinct_on?: Maybe<ReadonlyArray<Example_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Example_Order_By>>;
  where?: Maybe<Example_Bool_Exp>;
};


export type Query_RootExample_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Example_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Example_Order_By>>;
  where?: Maybe<Example_Bool_Exp>;
};


export type Query_RootExample_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "example" */
  readonly example: ReadonlyArray<Example>;
  /** fetch aggregated fields from the table: "example" */
  readonly example_aggregate: Example_Aggregate;
  /** fetch data from the table: "example" using primary key columns */
  readonly example_by_pk?: Maybe<Example>;
};


export type Subscription_RootExampleArgs = {
  distinct_on?: Maybe<ReadonlyArray<Example_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Example_Order_By>>;
  where?: Maybe<Example_Bool_Exp>;
};


export type Subscription_RootExample_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Example_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Example_Order_By>>;
  where?: Maybe<Example_Bool_Exp>;
};


export type Subscription_RootExample_By_PkArgs = {
  id: Scalars['Int'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['timestamptz']>;
  readonly _gt?: Maybe<Scalars['timestamptz']>;
  readonly _gte?: Maybe<Scalars['timestamptz']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['timestamptz']>;
  readonly _lte?: Maybe<Scalars['timestamptz']>;
  readonly _neq?: Maybe<Scalars['timestamptz']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
};

export type GetExamplesQueryVariables = Exact<{
  where: Example_Bool_Exp;
}>;


export type GetExamplesQuery = (
  { readonly __typename?: 'query_root' }
  & { readonly example: ReadonlyArray<(
    { readonly __typename?: 'example' }
    & Pick<Example, 'id'>
  )> }
);


export const GetExamplesDocument = gql`
    query GetExamples($where: example_bool_exp!) {
  example(where: $where) {
    id
  }
}
    `;

export function useGetExamplesQuery(options: Omit<Urql.UseQueryArgs<never, GetExamplesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetExamplesQuery>({ query: GetExamplesDocument, ...options });
};