import { ODataEntityProperty, ODataEntityNavigationProperty, ODataEntityType } from ".";

export interface MetaClass {
  name: string
  description?: string
  method?: ClassMethod[]
  field?: ClassField[]
  extends?: string
  exported?: boolean
  originEntity: ODataEntityType;
}

export interface ClassField {
  name: string;
  type: string;
  static?: boolean;
  description?: string;
  value?: string;
  originProperty: ODataEntityProperty | ODataEntityNavigationProperty;
}

export interface ClassMethod {
  name: string
  static?: boolean
  description?: string
  parameters?: FunctionParameter[]
  return?: string
  body?: string
}

export interface FunctionParameter {
  name: string
  type?: string
  default?: string
  description?: string
}

export interface MetaFunction {
  name: string
  description?: string
  exported?: boolean
  parameters?: FunctionParameter[]
  return?: string
  body?: string
}