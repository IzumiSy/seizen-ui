import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import * as React from "react";
import {
  useDataTable,
  DataTable,
  type ColumnDef,
} from "@izumisy/seizen-datatable-react";

// Scope: MDX内のコードで使用可能な変数・関数
const scope = {
  React,
  useState: React.useState,
  useEffect: React.useEffect,
  useMemo: React.useMemo,
  useDataTable,
  DataTable,
};

interface LiveCodeProps {
  code: string;
  noEditor?: boolean;
}

export function LiveCode({ code, noEditor = false }: LiveCodeProps) {
  return (
    <LiveProvider code={code.trim()} scope={scope} noInline={false}>
      <div
        style={{
          border: "1px solid var(--sl-color-gray-5)",
          borderRadius: "8px",
          overflow: "hidden",
          marginBlock: "1rem",
        }}
      >
        {!noEditor && (
          <div
            style={{
              backgroundColor: "var(--sl-color-gray-6)",
              padding: "1rem",
              fontFamily: "monospace",
              fontSize: "14px",
            }}
          >
            <LiveEditor />
          </div>
        )}
        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--sl-color-bg)",
          }}
        >
          <LivePreview />
          <LiveError
            style={{
              color: "var(--sl-color-red)",
              fontFamily: "monospace",
              fontSize: "12px",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </div>
    </LiveProvider>
  );
}

export default LiveCode;
