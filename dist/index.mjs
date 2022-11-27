import $r from "eslint";
const ac = {
  additionalProperties: !1,
  properties: {
    orderedKeys: {
      type: "array"
    }
  },
  type: "object"
};
var p = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oc(r) {
  var e = r.default;
  if (typeof e == "function") {
    var t = function() {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(t, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), t;
}
var Xo = {}, qo = {}, zo = {}, fe = {}, $ = {};
const lc = [
  "left",
  "right"
], cc = [
  "left",
  "right"
], uc = [
  "elements"
], pc = [
  "elements"
], Ec = [
  "params",
  "body"
], fc = [
  "argument"
], Tc = [
  "body"
], dc = [
  "left",
  "right"
], Pc = [
  "label"
], _c = [
  "callee",
  "arguments"
], hc = [
  "param",
  "body"
], mc = [
  "expression"
], yc = [
  "body"
], Sc = [
  "id",
  "superClass",
  "body"
], vc = [
  "id",
  "superClass",
  "body"
], gc = [
  "test",
  "consequent",
  "alternate"
], bc = [
  "label"
], Yc = [], Ac = [
  "body",
  "test"
], Lc = [], Cc = [
  "exported",
  "source"
], Vc = [
  "declaration"
], Oc = [
  "declaration",
  "specifiers",
  "source"
], wc = [
  "exported",
  "local"
], Mc = [
  "expression"
], Rc = [
  "argument"
], Ic = [
  "argument"
], xc = [
  "init",
  "test",
  "update",
  "body"
], Uc = [
  "left",
  "right",
  "body"
], $c = [
  "left",
  "right",
  "body"
], Dc = [
  "id",
  "params",
  "body"
], jc = [
  "id",
  "params",
  "body"
], kc = [], Fc = [
  "test",
  "consequent",
  "alternate"
], Nc = [
  "specifiers",
  "source"
], Bc = [
  "local"
], Gc = [
  "source"
], Wc = [
  "local"
], Hc = [
  "imported",
  "local"
], Kc = [
  "name",
  "value"
], Xc = [
  "name"
], qc = [
  "openingElement",
  "children",
  "closingElement"
], zc = [], Jc = [
  "expression"
], Qc = [], Zc = [
  "object",
  "property"
], eu = [
  "namespace",
  "name"
], tu = [
  "name",
  "attributes"
], ru = [
  "argument"
], nu = [], iu = [
  "openingFragment",
  "children",
  "closingFragment"
], su = [], au = [
  "label",
  "body"
], ou = [
  "left",
  "right"
], lu = [
  "object",
  "property"
], cu = [
  "meta",
  "property"
], uu = [
  "key",
  "value"
], pu = [
  "callee",
  "arguments"
], Eu = [
  "properties"
], fu = [
  "properties"
], Tu = [], du = [
  "body"
], Pu = [
  "key",
  "value"
], _u = [
  "key",
  "value"
], hu = [
  "argument"
], mu = [
  "argument"
], yu = [
  "expressions"
], Su = [
  "argument"
], vu = [], gu = [
  "discriminant",
  "cases"
], bu = [
  "test",
  "consequent"
], Yu = [
  "tag",
  "quasi"
], Au = [], Lu = [
  "quasis",
  "expressions"
], Cu = [], Vu = [
  "argument"
], Ou = [
  "block",
  "handler",
  "finalizer"
], wu = [
  "argument"
], Mu = [
  "argument"
], Ru = [
  "declarations"
], Iu = [
  "id",
  "init"
], xu = [
  "test",
  "body"
], Uu = [
  "object",
  "body"
], $u = [
  "argument"
], Du = {
  AssignmentExpression: lc,
  AssignmentPattern: cc,
  ArrayExpression: uc,
  ArrayPattern: pc,
  ArrowFunctionExpression: Ec,
  AwaitExpression: fc,
  BlockStatement: Tc,
  BinaryExpression: dc,
  BreakStatement: Pc,
  CallExpression: _c,
  CatchClause: hc,
  ChainExpression: mc,
  ClassBody: yc,
  ClassDeclaration: Sc,
  ClassExpression: vc,
  ConditionalExpression: gc,
  ContinueStatement: bc,
  DebuggerStatement: Yc,
  DoWhileStatement: Ac,
  EmptyStatement: Lc,
  ExportAllDeclaration: Cc,
  ExportDefaultDeclaration: Vc,
  ExportNamedDeclaration: Oc,
  ExportSpecifier: wc,
  ExpressionStatement: Mc,
  ExperimentalRestProperty: Rc,
  ExperimentalSpreadProperty: Ic,
  ForStatement: xc,
  ForInStatement: Uc,
  ForOfStatement: $c,
  FunctionDeclaration: Dc,
  FunctionExpression: jc,
  Identifier: kc,
  IfStatement: Fc,
  ImportDeclaration: Nc,
  ImportDefaultSpecifier: Bc,
  ImportExpression: Gc,
  ImportNamespaceSpecifier: Wc,
  ImportSpecifier: Hc,
  JSXAttribute: Kc,
  JSXClosingElement: Xc,
  JSXElement: qc,
  JSXEmptyExpression: zc,
  JSXExpressionContainer: Jc,
  JSXIdentifier: Qc,
  JSXMemberExpression: Zc,
  JSXNamespacedName: eu,
  JSXOpeningElement: tu,
  JSXSpreadAttribute: ru,
  JSXText: nu,
  JSXFragment: iu,
  Literal: su,
  LabeledStatement: au,
  LogicalExpression: ou,
  MemberExpression: lu,
  MetaProperty: cu,
  MethodDefinition: uu,
  NewExpression: pu,
  ObjectExpression: Eu,
  ObjectPattern: fu,
  PrivateIdentifier: Tu,
  Program: du,
  Property: Pu,
  PropertyDefinition: _u,
  RestElement: hu,
  ReturnStatement: mu,
  SequenceExpression: yu,
  SpreadElement: Su,
  Super: vu,
  SwitchStatement: gu,
  SwitchCase: bu,
  TaggedTemplateExpression: Yu,
  TemplateElement: Au,
  TemplateLiteral: Lu,
  ThisExpression: Cu,
  ThrowStatement: Vu,
  TryStatement: Ou,
  UnaryExpression: wu,
  UpdateExpression: Mu,
  VariableDeclaration: Ru,
  VariableDeclarator: Iu,
  WhileStatement: xu,
  WithStatement: Uu,
  YieldExpression: $u
}, Rr = Du, ju = Object.freeze(Object.keys(Rr));
for (const r of ju)
  Object.freeze(Rr[r]);
Object.freeze(Rr);
const ku = /* @__PURE__ */ new Set([
  "parent",
  "leadingComments",
  "trailingComments"
]);
function Fu(r) {
  return !ku.has(r) && r[0] !== "_";
}
var Nu = Object.freeze({
  KEYS: Rr,
  getKeys(r) {
    return Object.keys(r).filter(Fu);
  },
  unionWith(r) {
    const e = Object.assign({}, Rr);
    for (const t of Object.keys(r))
      if (e.hasOwnProperty(t)) {
        const i = new Set(r[t]);
        for (const s of e[t])
          i.add(s);
        e[t] = Object.freeze(Array.from(i));
      } else
        e[t] = Object.freeze(Array.from(r[t]));
    return Object.freeze(e);
  }
});
/*! @author Toru Nagashima <https://github.com/mysticatea> */
Object.defineProperty($, "__esModule", { value: !0 });
function Bu(r) {
  return r && typeof r == "object" && "default" in r ? r.default : r;
}
var Jo = Bu(Nu);
function _a(r, e) {
  const t = e.range[0];
  let i = r, s = !1;
  do {
    s = !1;
    for (const a of i.childScopes) {
      const l = a.block.range;
      if (l[0] <= t && t < l[1]) {
        i = a, s = !0;
        break;
      }
    }
  } while (s);
  return i;
}
function Gt(r, e) {
  let t = "", i = r;
  for (typeof e == "string" ? t = e : (t = e.name, i = _a(i, e)); i != null; ) {
    const s = i.set.get(t);
    if (s != null)
      return s;
    i = i.upper;
  }
  return null;
}
function Gu(r) {
  return !this(r);
}
function Ie(r) {
  return Gu.bind(r);
}
function He(r, e) {
  return r.type === "Punctuator" && r.value === e;
}
function oi(r) {
  return He(r, "=>");
}
function ha(r) {
  return He(r, ",");
}
function ma(r) {
  return He(r, ";");
}
function ya(r) {
  return He(r, ":");
}
function Et(r) {
  return He(r, "(");
}
function li(r) {
  return He(r, ")");
}
function Sa(r) {
  return He(r, "[");
}
function va(r) {
  return He(r, "]");
}
function ga(r) {
  return He(r, "{");
}
function ba(r) {
  return He(r, "}");
}
function Ya(r) {
  return ["Block", "Line", "Shebang"].includes(r.type);
}
const Qo = Ie(oi), Zo = Ie(ha), el = Ie(ma), tl = Ie(ya), rl = Ie(Et), nl = Ie(li), il = Ie(Sa), sl = Ie(va), al = Ie(ga), ol = Ie(ba), ll = Ie(Ya);
function Ha(r, e) {
  return r.id ? e.getTokenAfter(r.id, Et) : e.getFirstToken(r, Et);
}
function cl(r, e) {
  const t = r.parent;
  let i = null, s = null;
  if (r.type === "ArrowFunctionExpression") {
    const a = e.getTokenBefore(r.body, oi);
    i = a.loc.start, s = a.loc.end;
  } else
    t.type === "Property" || t.type === "MethodDefinition" || t.type === "PropertyDefinition" ? (i = t.loc.start, s = Ha(r, e).loc.start) : (i = r.loc.start, s = Ha(r, e).loc.start);
  return {
    start: { ...i },
    end: { ...s }
  };
}
const Ka = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof p < "u" ? p : {}, Wu = Object.freeze(
  /* @__PURE__ */ new Set([
    "Array",
    "ArrayBuffer",
    "BigInt",
    "BigInt64Array",
    "BigUint64Array",
    "Boolean",
    "DataView",
    "Date",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "Float32Array",
    "Float64Array",
    "Function",
    "Infinity",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "isFinite",
    "isNaN",
    "isPrototypeOf",
    "JSON",
    "Map",
    "Math",
    "NaN",
    "Number",
    "Object",
    "parseFloat",
    "parseInt",
    "Promise",
    "Proxy",
    "Reflect",
    "RegExp",
    "Set",
    "String",
    "Symbol",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "undefined",
    "unescape",
    "WeakMap",
    "WeakSet"
  ])
), ks = new Set(
  [
    Array.isArray,
    typeof BigInt == "function" ? BigInt : void 0,
    Boolean,
    Date,
    Date.parse,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    escape,
    isFinite,
    isNaN,
    isPrototypeOf,
    ...Object.getOwnPropertyNames(Math).map((r) => Math[r]).filter((r) => typeof r == "function"),
    Number,
    Number.isFinite,
    Number.isNaN,
    Number.parseFloat,
    Number.parseInt,
    Object,
    Object.entries,
    Object.is,
    Object.isExtensible,
    Object.isFrozen,
    Object.isSealed,
    Object.keys,
    Object.values,
    parseFloat,
    parseInt,
    RegExp,
    String,
    String.fromCharCode,
    String.fromCodePoint,
    String.raw,
    Symbol.for,
    Symbol.keyFor,
    unescape
  ].filter((r) => typeof r == "function")
), Xa = /* @__PURE__ */ new Set([
  Object.freeze,
  Object.preventExtensions,
  Object.seal
]);
function Hu(r, e) {
  let t = r;
  for (; (typeof t == "object" || typeof t == "function") && t !== null; ) {
    const i = Object.getOwnPropertyDescriptor(t, e);
    if (i)
      return i;
    t = Object.getPrototypeOf(t);
  }
  return null;
}
function Ku(r, e) {
  const t = Hu(r, e);
  return t != null && t.get != null;
}
function Sr(r, e) {
  const t = [];
  for (let i = 0; i < r.length; ++i) {
    const s = r[i];
    if (s == null)
      t.length = i + 1;
    else if (s.type === "SpreadElement") {
      const a = z(s.argument, e);
      if (a == null)
        return null;
      t.push(...a.value);
    } else {
      const a = z(s, e);
      if (a == null)
        return null;
      t.push(a.value);
    }
  }
  return t;
}
const qa = Object.freeze({
  ArrayExpression(r, e) {
    const t = Sr(r.elements, e);
    return t != null ? { value: t } : null;
  },
  AssignmentExpression(r, e) {
    return r.operator === "=" ? z(r.right, e) : null;
  },
  BinaryExpression(r, e) {
    if (r.operator === "in" || r.operator === "instanceof")
      return null;
    const t = z(r.left, e), i = z(r.right, e);
    if (t != null && i != null)
      switch (r.operator) {
        case "==":
          return { value: t.value == i.value };
        case "!=":
          return { value: t.value != i.value };
        case "===":
          return { value: t.value === i.value };
        case "!==":
          return { value: t.value !== i.value };
        case "<":
          return { value: t.value < i.value };
        case "<=":
          return { value: t.value <= i.value };
        case ">":
          return { value: t.value > i.value };
        case ">=":
          return { value: t.value >= i.value };
        case "<<":
          return { value: t.value << i.value };
        case ">>":
          return { value: t.value >> i.value };
        case ">>>":
          return { value: t.value >>> i.value };
        case "+":
          return { value: t.value + i.value };
        case "-":
          return { value: t.value - i.value };
        case "*":
          return { value: t.value * i.value };
        case "/":
          return { value: t.value / i.value };
        case "%":
          return { value: t.value % i.value };
        case "**":
          return { value: Math.pow(t.value, i.value) };
        case "|":
          return { value: t.value | i.value };
        case "^":
          return { value: t.value ^ i.value };
        case "&":
          return { value: t.value & i.value };
      }
    return null;
  },
  CallExpression(r, e) {
    const t = r.callee, i = Sr(r.arguments, e);
    if (i != null)
      if (t.type === "MemberExpression") {
        if (t.property.type === "PrivateIdentifier")
          return null;
        const s = z(t.object, e);
        if (s != null) {
          if (s.value == null && (s.optional || r.optional))
            return { value: void 0, optional: !0 };
          const a = Fs(
            t,
            e
          );
          if (a != null) {
            const l = s.value, c = a.value;
            if (ks.has(l[c]))
              return { value: l[c](...i) };
            if (Xa.has(l[c]))
              return { value: i[0] };
          }
        }
      } else {
        const s = z(t, e);
        if (s != null) {
          if (s.value == null && r.optional)
            return { value: void 0, optional: !0 };
          const a = s.value;
          if (ks.has(a))
            return { value: a(...i) };
          if (Xa.has(a))
            return { value: i[0] };
        }
      }
    return null;
  },
  ConditionalExpression(r, e) {
    const t = z(r.test, e);
    return t != null ? t.value ? z(r.consequent, e) : z(r.alternate, e) : null;
  },
  ExpressionStatement(r, e) {
    return z(r.expression, e);
  },
  Identifier(r, e) {
    if (e != null) {
      const t = Gt(e, r);
      if (t != null && t.defs.length === 0 && Wu.has(t.name) && t.name in Ka)
        return { value: Ka[t.name] };
      if (t != null && t.defs.length === 1) {
        const i = t.defs[0];
        if (i.parent && i.parent.kind === "const" && i.node.id.type === "Identifier")
          return z(i.node.init, e);
      }
    }
    return null;
  },
  Literal(r) {
    return (r.regex != null || r.bigint != null) && r.value == null ? null : { value: r.value };
  },
  LogicalExpression(r, e) {
    const t = z(r.left, e);
    if (t != null) {
      if (r.operator === "||" && Boolean(t.value) === !0 || r.operator === "&&" && Boolean(t.value) === !1 || r.operator === "??" && t.value != null)
        return t;
      const i = z(r.right, e);
      if (i != null)
        return i;
    }
    return null;
  },
  MemberExpression(r, e) {
    if (r.property.type === "PrivateIdentifier")
      return null;
    const t = z(r.object, e);
    if (t != null) {
      if (t.value == null && (t.optional || r.optional))
        return { value: void 0, optional: !0 };
      const i = Fs(r, e);
      if (i != null && !Ku(t.value, i.value))
        return { value: t.value[i.value] };
    }
    return null;
  },
  ChainExpression(r, e) {
    const t = z(r.expression, e);
    return t != null ? { value: t.value } : null;
  },
  NewExpression(r, e) {
    const t = z(r.callee, e), i = Sr(r.arguments, e);
    if (t != null && i != null) {
      const s = t.value;
      if (ks.has(s))
        return { value: new s(...i) };
    }
    return null;
  },
  ObjectExpression(r, e) {
    const t = {};
    for (const i of r.properties)
      if (i.type === "Property") {
        if (i.kind !== "init")
          return null;
        const s = Fs(
          i,
          e
        ), a = z(i.value, e);
        if (s == null || a == null)
          return null;
        t[s.value] = a.value;
      } else if (i.type === "SpreadElement" || i.type === "ExperimentalSpreadProperty") {
        const s = z(
          i.argument,
          e
        );
        if (s == null)
          return null;
        Object.assign(t, s.value);
      } else
        return null;
    return { value: t };
  },
  SequenceExpression(r, e) {
    const t = r.expressions[r.expressions.length - 1];
    return z(t, e);
  },
  TaggedTemplateExpression(r, e) {
    const t = z(r.tag, e), i = Sr(
      r.quasi.expressions,
      e
    );
    if (t != null && i != null) {
      const s = t.value, a = r.quasi.quasis.map((l) => l.value.cooked);
      if (a.raw = r.quasi.quasis.map((l) => l.value.raw), s === String.raw)
        return { value: s(a, ...i) };
    }
    return null;
  },
  TemplateLiteral(r, e) {
    const t = Sr(r.expressions, e);
    if (t != null) {
      let i = r.quasis[0].value.cooked;
      for (let s = 0; s < t.length; ++s)
        i += t[s], i += r.quasis[s + 1].value.cooked;
      return { value: i };
    }
    return null;
  },
  UnaryExpression(r, e) {
    if (r.operator === "delete")
      return null;
    if (r.operator === "void")
      return { value: void 0 };
    const t = z(r.argument, e);
    if (t != null)
      switch (r.operator) {
        case "-":
          return { value: -t.value };
        case "+":
          return { value: +t.value };
        case "!":
          return { value: !t.value };
        case "~":
          return { value: ~t.value };
        case "typeof":
          return { value: typeof t.value };
      }
    return null;
  }
});
function z(r, e) {
  return r != null && Object.hasOwnProperty.call(qa, r.type) ? qa[r.type](r, e) : null;
}
function Fs(r, e) {
  const t = r.type === "Property" ? r.key : r.property;
  return r.computed ? z(t, e) : t.type === "Identifier" ? { value: t.name } : t.type === "Literal" ? t.bigint ? { value: t.bigint } : { value: String(t.value) } : null;
}
function Aa(r, e = null) {
  try {
    return z(r, e);
  } catch {
    return null;
  }
}
function Ir(r, e = null) {
  if (r && r.type === "Literal" && r.value === null) {
    if (r.regex)
      return `/${r.regex.pattern}/${r.regex.flags}`;
    if (r.bigint)
      return r.bigint;
  }
  const t = Aa(r, e);
  return t && String(t.value);
}
function xr(r, e) {
  switch (r.type) {
    case "MemberExpression":
      return r.computed ? Ir(r.property, e) : r.property.type === "PrivateIdentifier" ? null : r.property.name;
    case "Property":
    case "MethodDefinition":
    case "PropertyDefinition":
      return r.computed ? Ir(r.key, e) : r.key.type === "Literal" ? String(r.key.value) : r.key.type === "PrivateIdentifier" ? null : r.key.name;
  }
  return null;
}
function ul(r, e) {
  const t = r.parent, i = [], s = t.type === "Property" && t.value === r, a = t.type === "MethodDefinition" && t.value === r, l = t.type === "PropertyDefinition" && t.value === r;
  if ((a || l) && (t.static && i.push("static"), t.key.type === "PrivateIdentifier" && i.push("private")), r.async && i.push("async"), r.generator && i.push("generator"), s || a) {
    if (t.kind === "constructor")
      return "constructor";
    t.kind === "get" ? i.push("getter") : t.kind === "set" ? i.push("setter") : i.push("method");
  } else
    l ? i.push("method") : (r.type === "ArrowFunctionExpression" && i.push("arrow"), i.push("function"));
  if (s || a || l)
    if (t.key.type === "PrivateIdentifier")
      i.push(`#${t.key.name}`);
    else {
      const c = xr(t);
      if (c)
        i.push(`'${c}'`);
      else if (e) {
        const u = e.getText(t.key);
        u.includes(`
`) || i.push(`[${u}]`);
      }
    }
  else
    r.id ? i.push(`'${r.id.name}'`) : t.type === "VariableDeclarator" && t.id && t.id.type === "Identifier" ? i.push(`'${t.id.name}'`) : (t.type === "AssignmentExpression" || t.type === "AssignmentPattern") && t.left && t.left.type === "Identifier" && i.push(`'${t.left.name}'`);
  return i.join(" ");
}
const Xu = Object.freeze(
  /* @__PURE__ */ new Set([
    "==",
    "!=",
    "<",
    "<=",
    ">",
    ">=",
    "<<",
    ">>",
    ">>>",
    "+",
    "-",
    "*",
    "/",
    "%",
    "|",
    "^",
    "&",
    "in"
  ])
), qu = Object.freeze(/* @__PURE__ */ new Set(["-", "+", "!", "~"]));
function za(r) {
  return r !== null && typeof r == "object" && typeof r.type == "string";
}
const zu = Object.freeze(
  Object.assign(/* @__PURE__ */ Object.create(null), {
    $visit(r, e, t) {
      const { type: i } = r;
      return typeof this[i] == "function" ? this[i](r, e, t) : this.$visitChildren(r, e, t);
    },
    $visitChildren(r, e, t) {
      const { type: i } = r;
      for (const s of t[i] || Jo.getKeys(r)) {
        const a = r[s];
        if (Array.isArray(a)) {
          for (const l of a)
            if (za(l) && this.$visit(l, e, t))
              return !0;
        } else if (za(a) && this.$visit(a, e, t))
          return !0;
      }
      return !1;
    },
    ArrowFunctionExpression() {
      return !1;
    },
    AssignmentExpression() {
      return !0;
    },
    AwaitExpression() {
      return !0;
    },
    BinaryExpression(r, e, t) {
      return e.considerImplicitTypeConversion && Xu.has(r.operator) && (r.left.type !== "Literal" || r.right.type !== "Literal") ? !0 : this.$visitChildren(r, e, t);
    },
    CallExpression() {
      return !0;
    },
    FunctionExpression() {
      return !1;
    },
    ImportExpression() {
      return !0;
    },
    MemberExpression(r, e, t) {
      return e.considerGetters || e.considerImplicitTypeConversion && r.computed && r.property.type !== "Literal" ? !0 : this.$visitChildren(r, e, t);
    },
    MethodDefinition(r, e, t) {
      return e.considerImplicitTypeConversion && r.computed && r.key.type !== "Literal" ? !0 : this.$visitChildren(r, e, t);
    },
    NewExpression() {
      return !0;
    },
    Property(r, e, t) {
      return e.considerImplicitTypeConversion && r.computed && r.key.type !== "Literal" ? !0 : this.$visitChildren(r, e, t);
    },
    PropertyDefinition(r, e, t) {
      return e.considerImplicitTypeConversion && r.computed && r.key.type !== "Literal" ? !0 : this.$visitChildren(r, e, t);
    },
    UnaryExpression(r, e, t) {
      return r.operator === "delete" || e.considerImplicitTypeConversion && qu.has(r.operator) && r.argument.type !== "Literal" ? !0 : this.$visitChildren(r, e, t);
    },
    UpdateExpression() {
      return !0;
    },
    YieldExpression() {
      return !0;
    }
  })
);
function pl(r, e, { considerGetters: t = !1, considerImplicitTypeConversion: i = !1 } = {}) {
  return zu.$visit(
    r,
    { considerGetters: t, considerImplicitTypeConversion: i },
    e.visitorKeys || Jo.KEYS
  );
}
function Ju(r, e) {
  const t = r.parent;
  switch (t.type) {
    case "CallExpression":
    case "NewExpression":
      return t.arguments.length === 1 && t.arguments[0] === r ? e.getTokenAfter(
        t.callee,
        Et
      ) : null;
    case "DoWhileStatement":
      return t.test === r ? e.getTokenAfter(
        t.body,
        Et
      ) : null;
    case "IfStatement":
    case "WhileStatement":
      return t.test === r ? e.getFirstToken(t, 1) : null;
    case "ImportExpression":
      return t.source === r ? e.getFirstToken(t, 1) : null;
    case "SwitchStatement":
      return t.discriminant === r ? e.getFirstToken(t, 1) : null;
    case "WithStatement":
      return t.object === r ? e.getFirstToken(t, 1) : null;
    default:
      return null;
  }
}
function El(r, e, t) {
  let i, s, a, l, c;
  if (typeof r == "number") {
    if (i = r | 0, s = e, a = t, !(i >= 1))
      throw new TypeError("'times' should be a positive integer.");
  } else
    i = 1, s = r, a = e;
  if (s == null || s.parent.type === "CatchClause" && s.parent.param === s)
    return !1;
  l = c = s;
  do
    l = a.getTokenBefore(l), c = a.getTokenAfter(c);
  while (l != null && c != null && Et(l) && li(c) && l !== Ju(s, a) && --i > 0);
  return i === 0;
}
const Qu = /\$(?:[$&`']|[1-9][0-9]?)/gu, Ja = /* @__PURE__ */ new WeakMap();
function Zu(r, e) {
  let t = !1;
  for (let i = e - 1; i >= 0 && r.charCodeAt(i) === 92; --i)
    t = !t;
  return t;
}
function ep(r, e, t) {
  const i = [];
  let s = 0, a = null;
  function l(c) {
    switch (c) {
      case "$$":
        return "$";
      case "$&":
        return a[0];
      case "$`":
        return e.slice(0, a.index);
      case "$'":
        return e.slice(a.index + a[0].length);
      default: {
        const u = c.slice(1);
        return u in a ? a[u] : c;
      }
    }
  }
  for (a of r.execAll(e))
    i.push(e.slice(s, a.index)), i.push(t.replace(Qu, l)), s = a.index + a[0].length;
  return i.push(e.slice(s)), i.join("");
}
function tp(r, e, t) {
  const i = [];
  let s = 0;
  for (const a of r.execAll(e))
    i.push(e.slice(s, a.index)), i.push(String(t(...a, a.index, a.input))), s = a.index + a[0].length;
  return i.push(e.slice(s)), i.join("");
}
class fl {
  constructor(e, { escaped: t = !1 } = {}) {
    if (!(e instanceof RegExp))
      throw new TypeError("'pattern' should be a RegExp instance.");
    if (!e.flags.includes("g"))
      throw new Error("'pattern' should contains 'g' flag.");
    Ja.set(this, {
      pattern: new RegExp(e.source, e.flags),
      escaped: Boolean(t)
    });
  }
  *execAll(e) {
    const { pattern: t, escaped: i } = Ja.get(this);
    let s = null, a = 0;
    for (t.lastIndex = 0; (s = t.exec(e)) != null; )
      (i || !Zu(e, s.index)) && (a = t.lastIndex, yield s, t.lastIndex = a);
  }
  test(e) {
    return !this.execAll(e).next().done;
  }
  [Symbol.replace](e, t) {
    return typeof t == "function" ? tp(this, String(e), t) : ep(this, String(e), String(t));
  }
}
const rp = /^(?:Import|Export(?:All|Default|Named))Declaration$/u, ht = Function.call.bind(Object.hasOwnProperty), q = Symbol("read"), Lt = Symbol("call"), Wt = Symbol("construct"), ci = Symbol("esm"), np = { require: { [Lt]: !0 } };
function Qa(r) {
  return r == null || r.defs.length !== 0 || r.references.some((e) => e.isWrite());
}
function ip(r) {
  const e = r.parent;
  switch (e && e.type) {
    case "ConditionalExpression":
      return e.consequent === r || e.alternate === r;
    case "LogicalExpression":
      return !0;
    case "SequenceExpression":
      return e.expressions[e.expressions.length - 1] === r;
    case "ChainExpression":
      return !0;
    default:
      return !1;
  }
}
class Zt {
  constructor(e, {
    mode: t = "strict",
    globalObjectNames: i = ["global", "globalThis", "self", "window"]
  } = {}) {
    this.variableStack = [], this.globalScope = e, this.mode = t, this.globalObjectNames = i.slice(0);
  }
  *iterateGlobalReferences(e) {
    for (const t of Object.keys(e)) {
      const i = e[t], s = [t], a = this.globalScope.set.get(t);
      Qa(a) || (yield* this._iterateVariableReferences(
        a,
        s,
        i,
        !0
      ));
    }
    for (const t of this.globalObjectNames) {
      const i = [], s = this.globalScope.set.get(t);
      Qa(s) || (yield* this._iterateVariableReferences(
        s,
        i,
        e,
        !1
      ));
    }
  }
  *iterateCjsReferences(e) {
    for (const { node: t } of this.iterateGlobalReferences(np)) {
      const i = Ir(t.arguments[0]);
      if (i == null || !ht(e, i))
        continue;
      const s = e[i], a = [i];
      s[q] && (yield {
        node: t,
        path: a,
        type: q,
        info: s[q]
      }), yield* this._iteratePropertyReferences(t, a, s);
    }
  }
  *iterateEsmReferences(e) {
    const t = this.globalScope.block;
    for (const i of t.body) {
      if (!rp.test(i.type) || i.source == null)
        continue;
      const s = i.source.value;
      if (!ht(e, s))
        continue;
      const a = e[s], l = [s];
      if (a[q] && (yield { node: i, path: l, type: q, info: a[q] }), i.type === "ExportAllDeclaration")
        for (const c of Object.keys(a)) {
          const u = a[c];
          u[q] && (yield {
            node: i,
            path: l.concat(c),
            type: q,
            info: u[q]
          });
        }
      else
        for (const c of i.specifiers) {
          const u = ht(a, ci), Y = this._iterateImportReferences(
            c,
            l,
            u ? a : this.mode === "legacy" ? { default: a, ...a } : { default: a }
          );
          if (u)
            yield* Y;
          else
            for (const T of Y)
              T.path = T.path.filter(sp), (T.path.length >= 2 || T.type !== q) && (yield T);
        }
    }
  }
  *_iterateVariableReferences(e, t, i, s) {
    if (!this.variableStack.includes(e)) {
      this.variableStack.push(e);
      try {
        for (const a of e.references) {
          if (!a.isRead())
            continue;
          const l = a.identifier;
          s && i[q] && (yield { node: l, path: t, type: q, info: i[q] }), yield* this._iteratePropertyReferences(l, t, i);
        }
      } finally {
        this.variableStack.pop();
      }
    }
  }
  *_iteratePropertyReferences(e, t, i) {
    let s = e;
    for (; ip(s); )
      s = s.parent;
    const a = s.parent;
    if (a.type === "MemberExpression") {
      if (a.object === s) {
        const l = xr(a);
        if (l == null || !ht(i, l))
          return;
        t = t.concat(l);
        const c = i[l];
        c[q] && (yield {
          node: a,
          path: t,
          type: q,
          info: c[q]
        }), yield* this._iteratePropertyReferences(
          a,
          t,
          c
        );
      }
      return;
    }
    if (a.type === "CallExpression") {
      a.callee === s && i[Lt] && (yield { node: a, path: t, type: Lt, info: i[Lt] });
      return;
    }
    if (a.type === "NewExpression") {
      a.callee === s && i[Wt] && (yield {
        node: a,
        path: t,
        type: Wt,
        info: i[Wt]
      });
      return;
    }
    if (a.type === "AssignmentExpression") {
      a.right === s && (yield* this._iterateLhsReferences(a.left, t, i), yield* this._iteratePropertyReferences(a, t, i));
      return;
    }
    if (a.type === "AssignmentPattern") {
      a.right === s && (yield* this._iterateLhsReferences(a.left, t, i));
      return;
    }
    a.type === "VariableDeclarator" && a.init === s && (yield* this._iterateLhsReferences(a.id, t, i));
  }
  *_iterateLhsReferences(e, t, i) {
    if (e.type === "Identifier") {
      const s = Gt(this.globalScope, e);
      s != null && (yield* this._iterateVariableReferences(
        s,
        t,
        i,
        !1
      ));
      return;
    }
    if (e.type === "ObjectPattern") {
      for (const s of e.properties) {
        const a = xr(s);
        if (a == null || !ht(i, a))
          continue;
        const l = t.concat(a), c = i[a];
        c[q] && (yield {
          node: s,
          path: l,
          type: q,
          info: c[q]
        }), yield* this._iterateLhsReferences(
          s.value,
          l,
          c
        );
      }
      return;
    }
    e.type === "AssignmentPattern" && (yield* this._iterateLhsReferences(e.left, t, i));
  }
  *_iterateImportReferences(e, t, i) {
    const s = e.type;
    if (s === "ImportSpecifier" || s === "ImportDefaultSpecifier") {
      const a = s === "ImportDefaultSpecifier" ? "default" : e.imported.name;
      if (!ht(i, a))
        return;
      t = t.concat(a);
      const l = i[a];
      l[q] && (yield {
        node: e,
        path: t,
        type: q,
        info: l[q]
      }), yield* this._iterateVariableReferences(
        Gt(this.globalScope, e.local),
        t,
        l,
        !1
      );
      return;
    }
    if (s === "ImportNamespaceSpecifier") {
      yield* this._iterateVariableReferences(
        Gt(this.globalScope, e.local),
        t,
        i,
        !1
      );
      return;
    }
    if (s === "ExportSpecifier") {
      const a = e.local.name;
      if (!ht(i, a))
        return;
      t = t.concat(a);
      const l = i[a];
      l[q] && (yield {
        node: e,
        path: t,
        type: q,
        info: l[q]
      });
    }
  }
}
Zt.READ = q;
Zt.CALL = Lt;
Zt.CONSTRUCT = Wt;
Zt.ESM = ci;
function sp(r, e) {
  return !(e === 1 && r === "default");
}
var ap = {
  CALL: Lt,
  CONSTRUCT: Wt,
  ESM: ci,
  findVariable: Gt,
  getFunctionHeadLocation: cl,
  getFunctionNameWithKind: ul,
  getInnermostScope: _a,
  getPropertyName: xr,
  getStaticValue: Aa,
  getStringIfConstant: Ir,
  hasSideEffect: pl,
  isArrowToken: oi,
  isClosingBraceToken: ba,
  isClosingBracketToken: va,
  isClosingParenToken: li,
  isColonToken: ya,
  isCommaToken: ha,
  isCommentToken: Ya,
  isNotArrowToken: Qo,
  isNotClosingBraceToken: ol,
  isNotClosingBracketToken: sl,
  isNotClosingParenToken: nl,
  isNotColonToken: tl,
  isNotCommaToken: Zo,
  isNotCommentToken: ll,
  isNotOpeningBraceToken: al,
  isNotOpeningBracketToken: il,
  isNotOpeningParenToken: rl,
  isNotSemicolonToken: el,
  isOpeningBraceToken: ga,
  isOpeningBracketToken: Sa,
  isOpeningParenToken: Et,
  isParenthesized: El,
  isSemicolonToken: ma,
  PatternMatcher: fl,
  READ: q,
  ReferenceTracker: Zt
};
$.CALL = Lt;
$.CONSTRUCT = Wt;
$.ESM = ci;
$.PatternMatcher = fl;
$.READ = q;
$.ReferenceTracker = Zt;
$.default = ap;
$.findVariable = Gt;
$.getFunctionHeadLocation = cl;
$.getFunctionNameWithKind = ul;
$.getInnermostScope = _a;
$.getPropertyName = xr;
$.getStaticValue = Aa;
$.getStringIfConstant = Ir;
$.hasSideEffect = pl;
$.isArrowToken = oi;
$.isClosingBraceToken = ba;
$.isClosingBracketToken = va;
$.isClosingParenToken = li;
$.isColonToken = ya;
$.isCommaToken = ha;
$.isCommentToken = Ya;
$.isNotArrowToken = Qo;
$.isNotClosingBraceToken = ol;
$.isNotClosingBracketToken = sl;
$.isNotClosingParenToken = nl;
$.isNotColonToken = tl;
$.isNotCommaToken = Zo;
$.isNotCommentToken = ll;
$.isNotOpeningBraceToken = al;
$.isNotOpeningBracketToken = il;
$.isNotOpeningParenToken = rl;
$.isNotSemicolonToken = el;
$.isOpeningBraceToken = ga;
$.isOpeningBracketToken = Sa;
$.isOpeningParenToken = Et;
$.isParenthesized = El;
$.isSemicolonToken = ma;
var op = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), lp = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), cp = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && op(e, r, t);
  return lp(e, r), e;
};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.isParenthesized = fe.hasSideEffect = fe.getStringIfConstant = fe.getStaticValue = fe.getPropertyName = fe.getFunctionNameWithKind = fe.getFunctionHeadLocation = void 0;
const Vt = cp($), up = Vt.getFunctionHeadLocation;
fe.getFunctionHeadLocation = up;
const pp = Vt.getFunctionNameWithKind;
fe.getFunctionNameWithKind = pp;
const Ep = Vt.getPropertyName;
fe.getPropertyName = Ep;
const fp = Vt.getStaticValue;
fe.getStaticValue = fp;
const Tp = Vt.getStringIfConstant;
fe.getStringIfConstant = Tp;
const dp = Vt.hasSideEffect;
fe.hasSideEffect = dp;
const Pp = Vt.isParenthesized;
fe.isParenthesized = Pp;
var ui = {}, _p = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), hp = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), mp = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && _p(e, r, t);
  return hp(e, r), e;
};
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.PatternMatcher = void 0;
const yp = mp($), Sp = yp.PatternMatcher;
ui.PatternMatcher = Sp;
var U = {}, vp = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), gp = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), bp = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && vp(e, r, t);
  return gp(e, r), e;
};
Object.defineProperty(U, "__esModule", { value: !0 });
U.isSemicolonToken = U.isOpeningParenToken = U.isOpeningBracketToken = U.isOpeningBraceToken = U.isNotSemicolonToken = U.isNotOpeningParenToken = U.isNotOpeningBracketToken = U.isNotOpeningBraceToken = U.isNotCommentToken = U.isNotCommaToken = U.isNotColonToken = U.isNotClosingParenToken = U.isNotClosingBracketToken = U.isNotClosingBraceToken = U.isNotArrowToken = U.isCommentToken = U.isCommaToken = U.isColonToken = U.isClosingParenToken = U.isClosingBracketToken = U.isClosingBraceToken = U.isArrowToken = void 0;
const ee = bp($), Yp = ee.isArrowToken;
U.isArrowToken = Yp;
const Ap = ee.isNotArrowToken;
U.isNotArrowToken = Ap;
const Lp = ee.isClosingBraceToken;
U.isClosingBraceToken = Lp;
const Cp = ee.isNotClosingBraceToken;
U.isNotClosingBraceToken = Cp;
const Vp = ee.isClosingBracketToken;
U.isClosingBracketToken = Vp;
const Op = ee.isNotClosingBracketToken;
U.isNotClosingBracketToken = Op;
const wp = ee.isClosingParenToken;
U.isClosingParenToken = wp;
const Mp = ee.isNotClosingParenToken;
U.isNotClosingParenToken = Mp;
const Rp = ee.isColonToken;
U.isColonToken = Rp;
const Ip = ee.isNotColonToken;
U.isNotColonToken = Ip;
const xp = ee.isCommaToken;
U.isCommaToken = xp;
const Up = ee.isNotCommaToken;
U.isNotCommaToken = Up;
const $p = ee.isCommentToken;
U.isCommentToken = $p;
const Dp = ee.isNotCommentToken;
U.isNotCommentToken = Dp;
const jp = ee.isOpeningBraceToken;
U.isOpeningBraceToken = jp;
const kp = ee.isNotOpeningBraceToken;
U.isNotOpeningBraceToken = kp;
const Fp = ee.isOpeningBracketToken;
U.isOpeningBracketToken = Fp;
const Np = ee.isNotOpeningBracketToken;
U.isNotOpeningBracketToken = Np;
const Bp = ee.isOpeningParenToken;
U.isOpeningParenToken = Bp;
const Gp = ee.isNotOpeningParenToken;
U.isNotOpeningParenToken = Gp;
const Wp = ee.isSemicolonToken;
U.isSemicolonToken = Wp;
const Hp = ee.isNotSemicolonToken;
U.isNotSemicolonToken = Hp;
var pi = {}, Kp = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), Xp = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), qp = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && Kp(e, r, t);
  return Xp(e, r), e;
};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.ReferenceTracker = void 0;
const Dr = qp($);
Dr.ReferenceTracker.READ;
Dr.ReferenceTracker.CALL;
Dr.ReferenceTracker.CONSTRUCT;
Dr.ReferenceTracker.ESM;
const zp = Dr.ReferenceTracker;
pi.ReferenceTracker = zp;
var Xt = {}, Jp = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), Qp = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), Zp = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && Jp(e, r, t);
  return Qp(e, r), e;
};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.getInnermostScope = Xt.findVariable = void 0;
const Tl = Zp($), eE = Tl.findVariable;
Xt.findVariable = eE;
const tE = Tl.getInnermostScope;
Xt.getInnermostScope = tE;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(i, s, a, l) {
    l === void 0 && (l = a);
    var c = Object.getOwnPropertyDescriptor(s, a);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[a];
    } }), Object.defineProperty(i, l, c);
  } : function(i, s, a, l) {
    l === void 0 && (l = a), i[l] = s[a];
  }), t = p && p.__exportStar || function(i, s) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), t(fe, r), t(ui, r), t(U, r), t(pi, r), t(Xt, r);
})(zo);
var La = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.isNotTokenOfTypeWithConditions = r.isTokenOfTypeWithConditions = r.isNodeOfTypeWithConditions = r.isNodeOfTypes = r.isNodeOfType = void 0;
  const e = (l) => (c) => (c == null ? void 0 : c.type) === l;
  r.isNodeOfType = e;
  const t = (l) => (c) => !!c && l.includes(c.type);
  r.isNodeOfTypes = t;
  const i = (l, c) => {
    const u = Object.entries(c);
    return (Y) => (Y == null ? void 0 : Y.type) === l && u.every(([T, f]) => Y[T] === f);
  };
  r.isNodeOfTypeWithConditions = i;
  const s = (l, c) => {
    const u = Object.entries(c);
    return (Y) => (Y == null ? void 0 : Y.type) === l && u.every(([T, f]) => Y[T] === f);
  };
  r.isTokenOfTypeWithConditions = s;
  const a = (l, c) => (u) => !(0, r.isTokenOfTypeWithConditions)(l, c)(u);
  r.isNotTokenOfTypeWithConditions = a;
})(La);
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.LINEBREAK_MATCHER = qt.isTokenOnSameLine = void 0;
const rE = /\r\n|[\r\n\u2028\u2029]/;
qt.LINEBREAK_MATCHER = rE;
function nE(r, e) {
  return r.loc.end.line === e.loc.start.line;
}
qt.isTokenOnSameLine = nE;
var j = {}, Ca = {}, Ke = {}, Va = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.AST_TOKEN_TYPES = r.AST_NODE_TYPES = void 0, function(e) {
    e.ArrayExpression = "ArrayExpression", e.ArrayPattern = "ArrayPattern", e.ArrowFunctionExpression = "ArrowFunctionExpression", e.AssignmentExpression = "AssignmentExpression", e.AssignmentPattern = "AssignmentPattern", e.AwaitExpression = "AwaitExpression", e.BinaryExpression = "BinaryExpression", e.BlockStatement = "BlockStatement", e.BreakStatement = "BreakStatement", e.CallExpression = "CallExpression", e.CatchClause = "CatchClause", e.ChainExpression = "ChainExpression", e.ClassBody = "ClassBody", e.ClassDeclaration = "ClassDeclaration", e.ClassExpression = "ClassExpression", e.ConditionalExpression = "ConditionalExpression", e.ContinueStatement = "ContinueStatement", e.DebuggerStatement = "DebuggerStatement", e.Decorator = "Decorator", e.DoWhileStatement = "DoWhileStatement", e.EmptyStatement = "EmptyStatement", e.ExportAllDeclaration = "ExportAllDeclaration", e.ExportDefaultDeclaration = "ExportDefaultDeclaration", e.ExportNamedDeclaration = "ExportNamedDeclaration", e.ExportSpecifier = "ExportSpecifier", e.ExpressionStatement = "ExpressionStatement", e.ForInStatement = "ForInStatement", e.ForOfStatement = "ForOfStatement", e.ForStatement = "ForStatement", e.FunctionDeclaration = "FunctionDeclaration", e.FunctionExpression = "FunctionExpression", e.Identifier = "Identifier", e.IfStatement = "IfStatement", e.ImportAttribute = "ImportAttribute", e.ImportDeclaration = "ImportDeclaration", e.ImportDefaultSpecifier = "ImportDefaultSpecifier", e.ImportExpression = "ImportExpression", e.ImportNamespaceSpecifier = "ImportNamespaceSpecifier", e.ImportSpecifier = "ImportSpecifier", e.JSXAttribute = "JSXAttribute", e.JSXClosingElement = "JSXClosingElement", e.JSXClosingFragment = "JSXClosingFragment", e.JSXElement = "JSXElement", e.JSXEmptyExpression = "JSXEmptyExpression", e.JSXExpressionContainer = "JSXExpressionContainer", e.JSXFragment = "JSXFragment", e.JSXIdentifier = "JSXIdentifier", e.JSXMemberExpression = "JSXMemberExpression", e.JSXNamespacedName = "JSXNamespacedName", e.JSXOpeningElement = "JSXOpeningElement", e.JSXOpeningFragment = "JSXOpeningFragment", e.JSXSpreadAttribute = "JSXSpreadAttribute", e.JSXSpreadChild = "JSXSpreadChild", e.JSXText = "JSXText", e.LabeledStatement = "LabeledStatement", e.Literal = "Literal", e.LogicalExpression = "LogicalExpression", e.MemberExpression = "MemberExpression", e.MetaProperty = "MetaProperty", e.MethodDefinition = "MethodDefinition", e.NewExpression = "NewExpression", e.ObjectExpression = "ObjectExpression", e.ObjectPattern = "ObjectPattern", e.PrivateIdentifier = "PrivateIdentifier", e.Program = "Program", e.Property = "Property", e.PropertyDefinition = "PropertyDefinition", e.RestElement = "RestElement", e.ReturnStatement = "ReturnStatement", e.SequenceExpression = "SequenceExpression", e.SpreadElement = "SpreadElement", e.StaticBlock = "StaticBlock", e.Super = "Super", e.SwitchCase = "SwitchCase", e.SwitchStatement = "SwitchStatement", e.TaggedTemplateExpression = "TaggedTemplateExpression", e.TemplateElement = "TemplateElement", e.TemplateLiteral = "TemplateLiteral", e.ThisExpression = "ThisExpression", e.ThrowStatement = "ThrowStatement", e.TryStatement = "TryStatement", e.UnaryExpression = "UnaryExpression", e.UpdateExpression = "UpdateExpression", e.VariableDeclaration = "VariableDeclaration", e.VariableDeclarator = "VariableDeclarator", e.WhileStatement = "WhileStatement", e.WithStatement = "WithStatement", e.YieldExpression = "YieldExpression", e.TSAbstractKeyword = "TSAbstractKeyword", e.TSAbstractMethodDefinition = "TSAbstractMethodDefinition", e.TSAbstractPropertyDefinition = "TSAbstractPropertyDefinition", e.TSAnyKeyword = "TSAnyKeyword", e.TSArrayType = "TSArrayType", e.TSAsExpression = "TSAsExpression", e.TSAsyncKeyword = "TSAsyncKeyword", e.TSBigIntKeyword = "TSBigIntKeyword", e.TSBooleanKeyword = "TSBooleanKeyword", e.TSCallSignatureDeclaration = "TSCallSignatureDeclaration", e.TSClassImplements = "TSClassImplements", e.TSConditionalType = "TSConditionalType", e.TSConstructorType = "TSConstructorType", e.TSConstructSignatureDeclaration = "TSConstructSignatureDeclaration", e.TSDeclareFunction = "TSDeclareFunction", e.TSDeclareKeyword = "TSDeclareKeyword", e.TSEmptyBodyFunctionExpression = "TSEmptyBodyFunctionExpression", e.TSEnumDeclaration = "TSEnumDeclaration", e.TSEnumMember = "TSEnumMember", e.TSExportAssignment = "TSExportAssignment", e.TSExportKeyword = "TSExportKeyword", e.TSExternalModuleReference = "TSExternalModuleReference", e.TSFunctionType = "TSFunctionType", e.TSInstantiationExpression = "TSInstantiationExpression", e.TSImportEqualsDeclaration = "TSImportEqualsDeclaration", e.TSImportType = "TSImportType", e.TSIndexedAccessType = "TSIndexedAccessType", e.TSIndexSignature = "TSIndexSignature", e.TSInferType = "TSInferType", e.TSInterfaceBody = "TSInterfaceBody", e.TSInterfaceDeclaration = "TSInterfaceDeclaration", e.TSInterfaceHeritage = "TSInterfaceHeritage", e.TSIntersectionType = "TSIntersectionType", e.TSIntrinsicKeyword = "TSIntrinsicKeyword", e.TSLiteralType = "TSLiteralType", e.TSMappedType = "TSMappedType", e.TSMethodSignature = "TSMethodSignature", e.TSModuleBlock = "TSModuleBlock", e.TSModuleDeclaration = "TSModuleDeclaration", e.TSNamedTupleMember = "TSNamedTupleMember", e.TSNamespaceExportDeclaration = "TSNamespaceExportDeclaration", e.TSNeverKeyword = "TSNeverKeyword", e.TSNonNullExpression = "TSNonNullExpression", e.TSNullKeyword = "TSNullKeyword", e.TSNumberKeyword = "TSNumberKeyword", e.TSObjectKeyword = "TSObjectKeyword", e.TSOptionalType = "TSOptionalType", e.TSParameterProperty = "TSParameterProperty", e.TSPrivateKeyword = "TSPrivateKeyword", e.TSPropertySignature = "TSPropertySignature", e.TSProtectedKeyword = "TSProtectedKeyword", e.TSPublicKeyword = "TSPublicKeyword", e.TSQualifiedName = "TSQualifiedName", e.TSReadonlyKeyword = "TSReadonlyKeyword", e.TSRestType = "TSRestType", e.TSSatisfiesExpression = "TSSatisfiesExpression", e.TSStaticKeyword = "TSStaticKeyword", e.TSStringKeyword = "TSStringKeyword", e.TSSymbolKeyword = "TSSymbolKeyword", e.TSTemplateLiteralType = "TSTemplateLiteralType", e.TSThisType = "TSThisType", e.TSTupleType = "TSTupleType", e.TSTypeAliasDeclaration = "TSTypeAliasDeclaration", e.TSTypeAnnotation = "TSTypeAnnotation", e.TSTypeAssertion = "TSTypeAssertion", e.TSTypeLiteral = "TSTypeLiteral", e.TSTypeOperator = "TSTypeOperator", e.TSTypeParameter = "TSTypeParameter", e.TSTypeParameterDeclaration = "TSTypeParameterDeclaration", e.TSTypeParameterInstantiation = "TSTypeParameterInstantiation", e.TSTypePredicate = "TSTypePredicate", e.TSTypeQuery = "TSTypeQuery", e.TSTypeReference = "TSTypeReference", e.TSUndefinedKeyword = "TSUndefinedKeyword", e.TSUnionType = "TSUnionType", e.TSUnknownKeyword = "TSUnknownKeyword", e.TSVoidKeyword = "TSVoidKeyword";
  }(r.AST_NODE_TYPES || (r.AST_NODE_TYPES = {})), function(e) {
    e.Boolean = "Boolean", e.Identifier = "Identifier", e.JSXIdentifier = "JSXIdentifier", e.JSXText = "JSXText", e.Keyword = "Keyword", e.Null = "Null", e.Numeric = "Numeric", e.Punctuator = "Punctuator", e.RegularExpression = "RegularExpression", e.String = "String", e.Template = "Template", e.Block = "Block", e.Line = "Line";
  }(r.AST_TOKEN_TYPES || (r.AST_TOKEN_TYPES = {}));
})(Va);
var dl = {};
Object.defineProperty(dl, "__esModule", { value: !0 });
var Pl = {};
Object.defineProperty(Pl, "__esModule", { value: !0 });
var Ei = {}, iE = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), sE = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), aE = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && iE(e, r, t);
  return sE(e, r), e;
};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.TSESTree = void 0;
Ei.TSESTree = aE(Va);
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(s, a, l, c) {
    c === void 0 && (c = l);
    var u = Object.getOwnPropertyDescriptor(a, l);
    (!u || ("get" in u ? !a.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
      return a[l];
    } }), Object.defineProperty(s, c, u);
  } : function(s, a, l, c) {
    c === void 0 && (c = l), s[c] = a[l];
  }), t = p && p.__exportStar || function(s, a) {
    for (var l in s)
      l !== "default" && !Object.prototype.hasOwnProperty.call(a, l) && e(a, s, l);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.AST_TOKEN_TYPES = r.AST_NODE_TYPES = void 0;
  var i = Va;
  Object.defineProperty(r, "AST_NODE_TYPES", { enumerable: !0, get: function() {
    return i.AST_NODE_TYPES;
  } }), Object.defineProperty(r, "AST_TOKEN_TYPES", { enumerable: !0, get: function() {
    return i.AST_TOKEN_TYPES;
  } }), t(dl, r), t(Pl, r), t(Ei, r);
})(Ke);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.TSESTree = r.AST_TOKEN_TYPES = r.AST_NODE_TYPES = void 0;
  var e = Ke;
  Object.defineProperty(r, "AST_NODE_TYPES", { enumerable: !0, get: function() {
    return e.AST_NODE_TYPES;
  } }), Object.defineProperty(r, "AST_TOKEN_TYPES", { enumerable: !0, get: function() {
    return e.AST_TOKEN_TYPES;
  } }), Object.defineProperty(r, "TSESTree", { enumerable: !0, get: function() {
    return e.TSESTree;
  } });
})(Ca);
Object.defineProperty(j, "__esModule", { value: !0 });
j.isVariableDeclarator = j.isTypeAssertion = j.isTSFunctionType = j.isTSConstructorType = j.isSetter = j.isOptionalCallExpression = j.isOptionalChainPunctuator = j.isNotOptionalChainPunctuator = j.isNotNonNullAssertionPunctuator = j.isNonNullAssertionPunctuator = j.isLogicalOrOperator = j.isLoop = j.isIdentifier = j.isFunctionType = j.isFunctionOrFunctionType = j.isFunction = j.isClassOrTypeElement = j.isConstructor = j.isAwaitKeyword = j.isAwaitExpression = void 0;
const k = Ca, ae = La, oE = (0, ae.isTokenOfTypeWithConditions)(k.AST_TOKEN_TYPES.Punctuator, { value: "?." });
j.isOptionalChainPunctuator = oE;
const lE = (0, ae.isNotTokenOfTypeWithConditions)(k.AST_TOKEN_TYPES.Punctuator, { value: "?." });
j.isNotOptionalChainPunctuator = lE;
const cE = (0, ae.isTokenOfTypeWithConditions)(k.AST_TOKEN_TYPES.Punctuator, { value: "!" });
j.isNonNullAssertionPunctuator = cE;
const uE = (0, ae.isNotTokenOfTypeWithConditions)(k.AST_TOKEN_TYPES.Punctuator, { value: "!" });
j.isNotNonNullAssertionPunctuator = uE;
const pE = (0, ae.isNodeOfTypeWithConditions)(
  k.AST_NODE_TYPES.CallExpression,
  { optional: !0 }
);
j.isOptionalCallExpression = pE;
const EE = (0, ae.isNodeOfTypeWithConditions)(k.AST_NODE_TYPES.LogicalExpression, { operator: "||" });
j.isLogicalOrOperator = EE;
const fE = (0, ae.isNodeOfTypes)([
  k.AST_NODE_TYPES.TSAsExpression,
  k.AST_NODE_TYPES.TSTypeAssertion
]);
j.isTypeAssertion = fE;
const TE = (0, ae.isNodeOfType)(k.AST_NODE_TYPES.VariableDeclarator);
j.isVariableDeclarator = TE;
const _l = [
  k.AST_NODE_TYPES.ArrowFunctionExpression,
  k.AST_NODE_TYPES.FunctionDeclaration,
  k.AST_NODE_TYPES.FunctionExpression
], dE = (0, ae.isNodeOfTypes)(_l);
j.isFunction = dE;
const hl = [
  k.AST_NODE_TYPES.TSCallSignatureDeclaration,
  k.AST_NODE_TYPES.TSConstructorType,
  k.AST_NODE_TYPES.TSConstructSignatureDeclaration,
  k.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
  k.AST_NODE_TYPES.TSFunctionType,
  k.AST_NODE_TYPES.TSMethodSignature
], PE = (0, ae.isNodeOfTypes)(hl);
j.isFunctionType = PE;
const _E = (0, ae.isNodeOfTypes)([
  ..._l,
  ...hl
]);
j.isFunctionOrFunctionType = _E;
const hE = (0, ae.isNodeOfType)(k.AST_NODE_TYPES.TSFunctionType);
j.isTSFunctionType = hE;
const mE = (0, ae.isNodeOfType)(k.AST_NODE_TYPES.TSConstructorType);
j.isTSConstructorType = mE;
const yE = (0, ae.isNodeOfTypes)([
  k.AST_NODE_TYPES.PropertyDefinition,
  k.AST_NODE_TYPES.FunctionExpression,
  k.AST_NODE_TYPES.MethodDefinition,
  k.AST_NODE_TYPES.TSAbstractPropertyDefinition,
  k.AST_NODE_TYPES.TSAbstractMethodDefinition,
  k.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
  k.AST_NODE_TYPES.TSIndexSignature,
  k.AST_NODE_TYPES.TSCallSignatureDeclaration,
  k.AST_NODE_TYPES.TSConstructSignatureDeclaration,
  k.AST_NODE_TYPES.TSMethodSignature,
  k.AST_NODE_TYPES.TSPropertySignature
]);
j.isClassOrTypeElement = yE;
const SE = (0, ae.isNodeOfTypeWithConditions)(k.AST_NODE_TYPES.MethodDefinition, { kind: "constructor" });
j.isConstructor = SE;
function vE(r) {
  return !!r && (r.type === k.AST_NODE_TYPES.MethodDefinition || r.type === k.AST_NODE_TYPES.Property) && r.kind === "set";
}
j.isSetter = vE;
const gE = (0, ae.isNodeOfType)(k.AST_NODE_TYPES.Identifier);
j.isIdentifier = gE;
const bE = (0, ae.isNodeOfType)(k.AST_NODE_TYPES.AwaitExpression);
j.isAwaitExpression = bE;
const YE = (0, ae.isTokenOfTypeWithConditions)(k.AST_TOKEN_TYPES.Identifier, {
  value: "await"
});
j.isAwaitKeyword = YE;
const AE = (0, ae.isNodeOfTypes)([
  k.AST_NODE_TYPES.DoWhileStatement,
  k.AST_NODE_TYPES.ForStatement,
  k.AST_NODE_TYPES.ForInStatement,
  k.AST_NODE_TYPES.ForOfStatement,
  k.AST_NODE_TYPES.WhileStatement
]);
j.isLoop = AE;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(i, s, a, l) {
    l === void 0 && (l = a);
    var c = Object.getOwnPropertyDescriptor(s, a);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[a];
    } }), Object.defineProperty(i, l, c);
  } : function(i, s, a, l) {
    l === void 0 && (l = a), i[l] = s[a];
  }), t = p && p.__exportStar || function(i, s) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), t(zo, r), t(La, r), t(qt, r), t(j, r);
})(qo);
var ml = {}, jr = {}, ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.isObjectNotArray = ft.deepMerge = void 0;
function aa(r) {
  return typeof r == "object" && !Array.isArray(r);
}
ft.isObjectNotArray = aa;
function yl(r = {}, e = {}) {
  const t = new Set(Object.keys(r).concat(Object.keys(e)));
  return Array.from(t).reduce((i, s) => {
    const a = s in r, l = s in e, c = r[s], u = e[s];
    return a && l ? aa(c) && aa(u) ? i[s] = yl(c, u) : i[s] = u : a ? i[s] = c : i[s] = u, i;
  }, {});
}
ft.deepMerge = yl;
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.applyDefault = void 0;
const Ns = ft;
function LE(r, e) {
  const t = JSON.parse(JSON.stringify(r));
  return e == null || t.forEach((i, s) => {
    if (e[s] !== void 0) {
      const a = e[s];
      (0, Ns.isObjectNotArray)(a) && (0, Ns.isObjectNotArray)(i) ? t[s] = (0, Ns.deepMerge)(i, a) : t[s] = a;
    }
  }), t;
}
jr.applyDefault = LE;
var fi = {};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.batchedSingleLineTests = void 0;
function CE(r) {
  const e = r.code.startsWith(`
`) ? 2 : 1, t = "output" in r && r.output ? r.output.trim().split(`
`) : null;
  return r.code.trim().split(`
`).map((i, s) => {
    const a = s + e, l = "errors" in r ? r.errors.filter((u) => u.line === a) : [], c = Object.assign(Object.assign({}, r), { code: i, errors: l.map((u) => Object.assign(Object.assign({}, u), { line: 1 })) });
    return t != null && t[s] ? Object.assign(Object.assign({}, c), { output: t[s] }) : c;
  });
}
fi.batchedSingleLineTests = CE;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.getParserServices = void 0;
const Za = 'You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.';
function VE(r, e = !1) {
  var t, i;
  if (!(!((t = r.parserServices) === null || t === void 0) && t.program) || !r.parserServices.esTreeNodeToTSNodeMap || !r.parserServices.tsNodeToESTreeNodeMap)
    throw new Error(Za);
  if (!((i = r.parserServices.hasFullTypeInformation) !== null && i !== void 0 ? i : !0) && !e)
    throw new Error(Za);
  return r.parserServices;
}
Ti.getParserServices = VE;
var Sl = {};
Object.defineProperty(Sl, "__esModule", { value: !0 });
var di = {}, OE = p && p.__rest || function(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[s]) && (t[i[s]] = r[i[s]]);
  return t;
};
Object.defineProperty(di, "__esModule", { value: !0 });
di.RuleCreator = void 0;
const wE = jr;
function vl(r) {
  return function(t) {
    var { name: i, meta: s } = t, a = OE(t, ["name", "meta"]);
    return gl(Object.assign({ meta: Object.assign(Object.assign({}, s), { docs: Object.assign(Object.assign({}, s.docs), { url: r(i) }) }) }, a));
  };
}
di.RuleCreator = vl;
function gl({ create: r, defaultOptions: e, meta: t }) {
  return {
    create(i) {
      const s = (0, wE.applyDefault)(e, i.options);
      return r(i, s);
    },
    defaultOptions: e,
    meta: t
  };
}
vl.withoutDocs = gl;
function bl(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zt = {};
const ME = {}, RE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ME
}, Symbol.toStringTag, { value: "Module" })), er = /* @__PURE__ */ oc(RE), IE = "eslint", xE = "8.28.0", UE = "Nicholas C. Zakas <nicholas+npm@nczconsulting.com>", $E = "An AST-based pattern checker for JavaScript.", DE = {
  eslint: "./bin/eslint.js"
}, jE = "./lib/api.js", kE = {
  "./package.json": "./package.json",
  ".": "./lib/api.js",
  "./use-at-your-own-risk": "./lib/unsupported-api.js"
}, FE = {
  test: "node Makefile.js test",
  "test:cli": "mocha",
  lint: "node Makefile.js lint",
  "lint:docsjs": "node Makefile.js lintDocsJS",
  fix: "node Makefile.js lint -- fix",
  "fix:docsjs": "node Makefile.js lintDocsJS -- fix",
  fuzz: "node Makefile.js fuzz",
  "generate-release": "node Makefile.js generateRelease",
  "generate-alpharelease": "node Makefile.js generatePrerelease -- alpha",
  "generate-betarelease": "node Makefile.js generatePrerelease -- beta",
  "generate-rcrelease": "node Makefile.js generatePrerelease -- rc",
  "publish-release": "node Makefile.js publishRelease",
  gensite: "node Makefile.js gensite",
  webpack: "node Makefile.js webpack",
  perf: "node Makefile.js perf",
  "docs:update-links": "node tools/fetch-docs-links.js"
}, NE = {
  "pre-commit": "lint-staged"
}, BE = [
  "LICENSE",
  "README.md",
  "bin",
  "conf",
  "lib",
  "messages"
], GE = "eslint/eslint", WE = "https://opencollective.com/eslint", HE = "https://eslint.org", KE = "https://github.com/eslint/eslint/issues/", XE = {
  "@eslint/eslintrc": "^1.3.3",
  "@humanwhocodes/config-array": "^0.11.6",
  "@humanwhocodes/module-importer": "^1.0.1",
  "@nodelib/fs.walk": "^1.2.8",
  ajv: "^6.10.0",
  chalk: "^4.0.0",
  "cross-spawn": "^7.0.2",
  debug: "^4.3.2",
  doctrine: "^3.0.0",
  "escape-string-regexp": "^4.0.0",
  "eslint-scope": "^7.1.1",
  "eslint-utils": "^3.0.0",
  "eslint-visitor-keys": "^3.3.0",
  espree: "^9.4.0",
  esquery: "^1.4.0",
  esutils: "^2.0.2",
  "fast-deep-equal": "^3.1.3",
  "file-entry-cache": "^6.0.1",
  "find-up": "^5.0.0",
  "glob-parent": "^6.0.2",
  globals: "^13.15.0",
  "grapheme-splitter": "^1.0.4",
  ignore: "^5.2.0",
  "import-fresh": "^3.0.0",
  imurmurhash: "^0.1.4",
  "is-glob": "^4.0.0",
  "is-path-inside": "^3.0.3",
  "js-sdsl": "^4.1.4",
  "js-yaml": "^4.1.0",
  "json-stable-stringify-without-jsonify": "^1.0.1",
  levn: "^0.4.1",
  "lodash.merge": "^4.6.2",
  minimatch: "^3.1.2",
  "natural-compare": "^1.4.0",
  optionator: "^0.9.1",
  regexpp: "^3.2.0",
  "strip-ansi": "^6.0.1",
  "strip-json-comments": "^3.1.0",
  "text-table": "^0.2.0"
}, qE = {
  "@babel/core": "^7.4.3",
  "@babel/preset-env": "^7.4.3",
  "babel-loader": "^8.0.5",
  c8: "^7.12.0",
  chai: "^4.0.1",
  cheerio: "^0.22.0",
  "common-tags": "^1.8.0",
  "core-js": "^3.1.3",
  ejs: "^3.0.2",
  eslint: "file:.",
  "eslint-config-eslint": "file:packages/eslint-config-eslint",
  "eslint-plugin-eslint-comments": "^3.2.0",
  "eslint-plugin-eslint-plugin": "^4.4.0",
  "eslint-plugin-internal-rules": "file:tools/internal-rules",
  "eslint-plugin-jsdoc": "^38.1.6",
  "eslint-plugin-n": "^15.2.4",
  "eslint-plugin-unicorn": "^42.0.0",
  "eslint-release": "^3.2.0",
  eslump: "^3.0.0",
  esprima: "^4.0.1",
  "fast-glob": "^3.2.11",
  "fs-teardown": "^0.1.3",
  glob: "^7.1.6",
  got: "^11.8.3",
  "gray-matter": "^4.0.3",
  karma: "^6.1.1",
  "karma-chrome-launcher": "^3.1.0",
  "karma-mocha": "^2.0.1",
  "karma-mocha-reporter": "^2.2.5",
  "karma-webpack": "^5.0.0",
  "lint-staged": "^11.0.0",
  "load-perf": "^0.2.0",
  markdownlint: "^0.25.1",
  "markdownlint-cli": "^0.31.1",
  marked: "^4.0.8",
  memfs: "^3.0.1",
  metascraper: "^5.25.7",
  "metascraper-description": "^5.25.7",
  "metascraper-image": "^5.29.3",
  "metascraper-logo": "^5.25.7",
  "metascraper-logo-favicon": "^5.25.7",
  "metascraper-title": "^5.25.7",
  mocha: "^8.3.2",
  "mocha-junit-reporter": "^2.0.0",
  "node-polyfill-webpack-plugin": "^1.0.3",
  "npm-license": "^0.3.3",
  pirates: "^4.0.5",
  progress: "^2.0.3",
  proxyquire: "^2.0.1",
  puppeteer: "^13.7.0",
  recast: "^0.20.4",
  "regenerator-runtime": "^0.13.2",
  semver: "^7.3.5",
  shelljs: "^0.8.2",
  sinon: "^11.0.0",
  temp: "^0.9.0",
  webpack: "^5.23.0",
  "webpack-cli": "^4.5.0",
  yorkie: "^2.0.0"
}, zE = [
  "ast",
  "lint",
  "javascript",
  "ecmascript",
  "espree"
], JE = "MIT", QE = {
  node: "^12.22.0 || ^14.17.0 || >=16.0.0"
}, ZE = {
  name: IE,
  version: xE,
  author: UE,
  description: $E,
  bin: DE,
  main: jE,
  exports: kE,
  scripts: FE,
  gitHooks: NE,
  "lint-staged": {
    "*.js": "eslint --fix",
    "*.md": "markdownlint --fix",
    "docs/src/rules/*.md": [
      "node tools/fetch-docs-links.js",
      "git add docs/src/_data/further_reading_links.json"
    ],
    "docs/**/*.svg": "npx svgo -r --multipass"
  },
  files: BE,
  repository: GE,
  funding: WE,
  homepage: HE,
  bugs: KE,
  dependencies: XE,
  devDependencies: qE,
  keywords: zE,
  license: JE,
  engines: QE
};
var Tt = { exports: {} };
const ef = "2.0.0", tf = 256, rf = Number.MAX_SAFE_INTEGER || 9007199254740991, nf = 16;
var Pi = {
  SEMVER_SPEC_VERSION: ef,
  MAX_LENGTH: tf,
  MAX_SAFE_INTEGER: rf,
  MAX_SAFE_COMPONENT_LENGTH: nf
};
const sf = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var _i = sf;
(function(r, e) {
  const { MAX_SAFE_COMPONENT_LENGTH: t } = Pi, i = _i;
  e = r.exports = {};
  const s = e.re = [], a = e.src = [], l = e.t = {};
  let c = 0;
  const u = (Y, T, f) => {
    const v = c++;
    i(Y, v, T), l[Y] = v, a[v] = T, s[v] = new RegExp(T, f ? "g" : void 0);
  };
  u("NUMERICIDENTIFIER", "0|[1-9]\\d*"), u("NUMERICIDENTIFIERLOOSE", "[0-9]+"), u("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), u("MAINVERSION", `(${a[l.NUMERICIDENTIFIER]})\\.(${a[l.NUMERICIDENTIFIER]})\\.(${a[l.NUMERICIDENTIFIER]})`), u("MAINVERSIONLOOSE", `(${a[l.NUMERICIDENTIFIERLOOSE]})\\.(${a[l.NUMERICIDENTIFIERLOOSE]})\\.(${a[l.NUMERICIDENTIFIERLOOSE]})`), u("PRERELEASEIDENTIFIER", `(?:${a[l.NUMERICIDENTIFIER]}|${a[l.NONNUMERICIDENTIFIER]})`), u("PRERELEASEIDENTIFIERLOOSE", `(?:${a[l.NUMERICIDENTIFIERLOOSE]}|${a[l.NONNUMERICIDENTIFIER]})`), u("PRERELEASE", `(?:-(${a[l.PRERELEASEIDENTIFIER]}(?:\\.${a[l.PRERELEASEIDENTIFIER]})*))`), u("PRERELEASELOOSE", `(?:-?(${a[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[l.PRERELEASEIDENTIFIERLOOSE]})*))`), u("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), u("BUILD", `(?:\\+(${a[l.BUILDIDENTIFIER]}(?:\\.${a[l.BUILDIDENTIFIER]})*))`), u("FULLPLAIN", `v?${a[l.MAINVERSION]}${a[l.PRERELEASE]}?${a[l.BUILD]}?`), u("FULL", `^${a[l.FULLPLAIN]}$`), u("LOOSEPLAIN", `[v=\\s]*${a[l.MAINVERSIONLOOSE]}${a[l.PRERELEASELOOSE]}?${a[l.BUILD]}?`), u("LOOSE", `^${a[l.LOOSEPLAIN]}$`), u("GTLT", "((?:<|>)?=?)"), u("XRANGEIDENTIFIERLOOSE", `${a[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), u("XRANGEIDENTIFIER", `${a[l.NUMERICIDENTIFIER]}|x|X|\\*`), u("XRANGEPLAIN", `[v=\\s]*(${a[l.XRANGEIDENTIFIER]})(?:\\.(${a[l.XRANGEIDENTIFIER]})(?:\\.(${a[l.XRANGEIDENTIFIER]})(?:${a[l.PRERELEASE]})?${a[l.BUILD]}?)?)?`), u("XRANGEPLAINLOOSE", `[v=\\s]*(${a[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[l.XRANGEIDENTIFIERLOOSE]})(?:${a[l.PRERELEASELOOSE]})?${a[l.BUILD]}?)?)?`), u("XRANGE", `^${a[l.GTLT]}\\s*${a[l.XRANGEPLAIN]}$`), u("XRANGELOOSE", `^${a[l.GTLT]}\\s*${a[l.XRANGEPLAINLOOSE]}$`), u("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), u("COERCERTL", a[l.COERCE], !0), u("LONETILDE", "(?:~>?)"), u("TILDETRIM", `(\\s*)${a[l.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", u("TILDE", `^${a[l.LONETILDE]}${a[l.XRANGEPLAIN]}$`), u("TILDELOOSE", `^${a[l.LONETILDE]}${a[l.XRANGEPLAINLOOSE]}$`), u("LONECARET", "(?:\\^)"), u("CARETTRIM", `(\\s*)${a[l.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", u("CARET", `^${a[l.LONECARET]}${a[l.XRANGEPLAIN]}$`), u("CARETLOOSE", `^${a[l.LONECARET]}${a[l.XRANGEPLAINLOOSE]}$`), u("COMPARATORLOOSE", `^${a[l.GTLT]}\\s*(${a[l.LOOSEPLAIN]})$|^$`), u("COMPARATOR", `^${a[l.GTLT]}\\s*(${a[l.FULLPLAIN]})$|^$`), u("COMPARATORTRIM", `(\\s*)${a[l.GTLT]}\\s*(${a[l.LOOSEPLAIN]}|${a[l.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", u("HYPHENRANGE", `^\\s*(${a[l.XRANGEPLAIN]})\\s+-\\s+(${a[l.XRANGEPLAIN]})\\s*$`), u("HYPHENRANGELOOSE", `^\\s*(${a[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[l.XRANGEPLAINLOOSE]})\\s*$`), u("STAR", "(<|>)?=?\\s*\\*"), u("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), u("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Tt, Tt.exports);
const af = ["includePrerelease", "loose", "rtl"], of = (r) => r ? typeof r != "object" ? { loose: !0 } : af.filter((e) => r[e]).reduce((e, t) => (e[t] = !0, e), {}) : {};
var hi = of;
const eo = /^[0-9]+$/, Yl = (r, e) => {
  const t = eo.test(r), i = eo.test(e);
  return t && i && (r = +r, e = +e), r === e ? 0 : t && !i ? -1 : i && !t ? 1 : r < e ? -1 : 1;
}, lf = (r, e) => Yl(e, r);
var Al = {
  compareIdentifiers: Yl,
  rcompareIdentifiers: lf
};
const On = _i, { MAX_LENGTH: to, MAX_SAFE_INTEGER: wn } = Pi, { re: ro, t: no } = Tt.exports, cf = hi, { compareIdentifiers: Rt } = Al;
class Me {
  constructor(e, t) {
    if (t = cf(t), e instanceof Me) {
      if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid Version: ${e}`);
    if (e.length > to)
      throw new TypeError(
        `version is longer than ${to} characters`
      );
    On("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const i = e.trim().match(t.loose ? ro[no.LOOSE] : ro[no.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > wn || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > wn || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > wn || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const a = +s;
        if (a >= 0 && a < wn)
          return a;
      }
      return s;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (On("SemVer.compare", this.version, this.options, e), !(e instanceof Me)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Me(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Me || (e = new Me(e, this.options)), Rt(this.major, e.major) || Rt(this.minor, e.minor) || Rt(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof Me || (e = new Me(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let t = 0;
    do {
      const i = this.prerelease[t], s = e.prerelease[t];
      if (On("prerelease compare", t, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return Rt(i, s);
    } while (++t);
  }
  compareBuild(e) {
    e instanceof Me || (e = new Me(e, this.options));
    let t = 0;
    do {
      const i = this.build[t], s = e.build[t];
      if (On("prerelease compare", t, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return Rt(i, s);
    } while (++t);
  }
  inc(e, t) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", t), this.inc("pre", t);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0)
          this.prerelease = [0];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          i === -1 && this.prerelease.push(0);
        }
        t && (Rt(this.prerelease[0], t) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
        break;
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.format(), this.raw = this.version, this;
  }
}
var de = Me;
const { MAX_LENGTH: uf } = Pi, { re: io, t: so } = Tt.exports, ao = de, pf = hi, Ef = (r, e) => {
  if (e = pf(e), r instanceof ao)
    return r;
  if (typeof r != "string" || r.length > uf || !(e.loose ? io[so.LOOSE] : io[so.FULL]).test(r))
    return null;
  try {
    return new ao(r, e);
  } catch {
    return null;
  }
};
var tr = Ef;
const ff = tr, Tf = (r, e) => {
  const t = ff(r, e);
  return t ? t.version : null;
};
var df = Tf;
const Pf = tr, _f = (r, e) => {
  const t = Pf(r.trim().replace(/^[=v]+/, ""), e);
  return t ? t.version : null;
};
var hf = _f;
const oo = de, mf = (r, e, t, i) => {
  typeof t == "string" && (i = t, t = void 0);
  try {
    return new oo(
      r instanceof oo ? r.version : r,
      t
    ).inc(e, i).version;
  } catch {
    return null;
  }
};
var yf = mf;
const lo = de, Sf = (r, e, t) => new lo(r, t).compare(new lo(e, t));
var xe = Sf;
const vf = xe, gf = (r, e, t) => vf(r, e, t) === 0;
var Oa = gf;
const co = tr, bf = Oa, Yf = (r, e) => {
  if (bf(r, e))
    return null;
  {
    const t = co(r), i = co(e), s = t.prerelease.length || i.prerelease.length, a = s ? "pre" : "", l = s ? "prerelease" : "";
    for (const c in t)
      if ((c === "major" || c === "minor" || c === "patch") && t[c] !== i[c])
        return a + c;
    return l;
  }
};
var Af = Yf;
const Lf = de, Cf = (r, e) => new Lf(r, e).major;
var Vf = Cf;
const Of = de, wf = (r, e) => new Of(r, e).minor;
var Mf = wf;
const Rf = de, If = (r, e) => new Rf(r, e).patch;
var xf = If;
const Uf = tr, $f = (r, e) => {
  const t = Uf(r, e);
  return t && t.prerelease.length ? t.prerelease : null;
};
var Df = $f;
const jf = xe, kf = (r, e, t) => jf(e, r, t);
var Ff = kf;
const Nf = xe, Bf = (r, e) => Nf(r, e, !0);
var Gf = Bf;
const uo = de, Wf = (r, e, t) => {
  const i = new uo(r, t), s = new uo(e, t);
  return i.compare(s) || i.compareBuild(s);
};
var wa = Wf;
const Hf = wa, Kf = (r, e) => r.sort((t, i) => Hf(t, i, e));
var Xf = Kf;
const qf = wa, zf = (r, e) => r.sort((t, i) => qf(i, t, e));
var Jf = zf;
const Qf = xe, Zf = (r, e, t) => Qf(r, e, t) > 0;
var mi = Zf;
const eT = xe, tT = (r, e, t) => eT(r, e, t) < 0;
var Ma = tT;
const rT = xe, nT = (r, e, t) => rT(r, e, t) !== 0;
var Ll = nT;
const iT = xe, sT = (r, e, t) => iT(r, e, t) >= 0;
var Ra = sT;
const aT = xe, oT = (r, e, t) => aT(r, e, t) <= 0;
var Ia = oT;
const lT = Oa, cT = Ll, uT = mi, pT = Ra, ET = Ma, fT = Ia, TT = (r, e, t, i) => {
  switch (e) {
    case "===":
      return typeof r == "object" && (r = r.version), typeof t == "object" && (t = t.version), r === t;
    case "!==":
      return typeof r == "object" && (r = r.version), typeof t == "object" && (t = t.version), r !== t;
    case "":
    case "=":
    case "==":
      return lT(r, t, i);
    case "!=":
      return cT(r, t, i);
    case ">":
      return uT(r, t, i);
    case ">=":
      return pT(r, t, i);
    case "<":
      return ET(r, t, i);
    case "<=":
      return fT(r, t, i);
    default:
      throw new TypeError(`Invalid operator: ${e}`);
  }
};
var Cl = TT;
const dT = de, PT = tr, { re: Mn, t: Rn } = Tt.exports, _T = (r, e) => {
  if (r instanceof dT)
    return r;
  if (typeof r == "number" && (r = String(r)), typeof r != "string")
    return null;
  e = e || {};
  let t = null;
  if (!e.rtl)
    t = r.match(Mn[Rn.COERCE]);
  else {
    let i;
    for (; (i = Mn[Rn.COERCERTL].exec(r)) && (!t || t.index + t[0].length !== r.length); )
      (!t || i.index + i[0].length !== t.index + t[0].length) && (t = i), Mn[Rn.COERCERTL].lastIndex = i.index + i[1].length + i[2].length;
    Mn[Rn.COERCERTL].lastIndex = -1;
  }
  return t === null ? null : PT(`${t[2]}.${t[3] || "0"}.${t[4] || "0"}`, e);
};
var hT = _T, Bs, po;
function mT() {
  return po || (po = 1, Bs = function(r) {
    r.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next)
        yield e.value;
    };
  }), Bs;
}
var yT = H;
H.Node = Ct;
H.create = H;
function H(r) {
  var e = this;
  if (e instanceof H || (e = new H()), e.tail = null, e.head = null, e.length = 0, r && typeof r.forEach == "function")
    r.forEach(function(s) {
      e.push(s);
    });
  else if (arguments.length > 0)
    for (var t = 0, i = arguments.length; t < i; t++)
      e.push(arguments[t]);
  return e;
}
H.prototype.removeNode = function(r) {
  if (r.list !== this)
    throw new Error("removing node which does not belong to this list");
  var e = r.next, t = r.prev;
  return e && (e.prev = t), t && (t.next = e), r === this.head && (this.head = e), r === this.tail && (this.tail = t), r.list.length--, r.next = null, r.prev = null, r.list = null, e;
};
H.prototype.unshiftNode = function(r) {
  if (r !== this.head) {
    r.list && r.list.removeNode(r);
    var e = this.head;
    r.list = this, r.next = e, e && (e.prev = r), this.head = r, this.tail || (this.tail = r), this.length++;
  }
};
H.prototype.pushNode = function(r) {
  if (r !== this.tail) {
    r.list && r.list.removeNode(r);
    var e = this.tail;
    r.list = this, r.prev = e, e && (e.next = r), this.tail = r, this.head || (this.head = r), this.length++;
  }
};
H.prototype.push = function() {
  for (var r = 0, e = arguments.length; r < e; r++)
    vT(this, arguments[r]);
  return this.length;
};
H.prototype.unshift = function() {
  for (var r = 0, e = arguments.length; r < e; r++)
    gT(this, arguments[r]);
  return this.length;
};
H.prototype.pop = function() {
  if (!!this.tail) {
    var r = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, r;
  }
};
H.prototype.shift = function() {
  if (!!this.head) {
    var r = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, r;
  }
};
H.prototype.forEach = function(r, e) {
  e = e || this;
  for (var t = this.head, i = 0; t !== null; i++)
    r.call(e, t.value, i, this), t = t.next;
};
H.prototype.forEachReverse = function(r, e) {
  e = e || this;
  for (var t = this.tail, i = this.length - 1; t !== null; i--)
    r.call(e, t.value, i, this), t = t.prev;
};
H.prototype.get = function(r) {
  for (var e = 0, t = this.head; t !== null && e < r; e++)
    t = t.next;
  if (e === r && t !== null)
    return t.value;
};
H.prototype.getReverse = function(r) {
  for (var e = 0, t = this.tail; t !== null && e < r; e++)
    t = t.prev;
  if (e === r && t !== null)
    return t.value;
};
H.prototype.map = function(r, e) {
  e = e || this;
  for (var t = new H(), i = this.head; i !== null; )
    t.push(r.call(e, i.value, this)), i = i.next;
  return t;
};
H.prototype.mapReverse = function(r, e) {
  e = e || this;
  for (var t = new H(), i = this.tail; i !== null; )
    t.push(r.call(e, i.value, this)), i = i.prev;
  return t;
};
H.prototype.reduce = function(r, e) {
  var t, i = this.head;
  if (arguments.length > 1)
    t = e;
  else if (this.head)
    i = this.head.next, t = this.head.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var s = 0; i !== null; s++)
    t = r(t, i.value, s), i = i.next;
  return t;
};
H.prototype.reduceReverse = function(r, e) {
  var t, i = this.tail;
  if (arguments.length > 1)
    t = e;
  else if (this.tail)
    i = this.tail.prev, t = this.tail.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var s = this.length - 1; i !== null; s--)
    t = r(t, i.value, s), i = i.prev;
  return t;
};
H.prototype.toArray = function() {
  for (var r = new Array(this.length), e = 0, t = this.head; t !== null; e++)
    r[e] = t.value, t = t.next;
  return r;
};
H.prototype.toArrayReverse = function() {
  for (var r = new Array(this.length), e = 0, t = this.tail; t !== null; e++)
    r[e] = t.value, t = t.prev;
  return r;
};
H.prototype.slice = function(r, e) {
  e = e || this.length, e < 0 && (e += this.length), r = r || 0, r < 0 && (r += this.length);
  var t = new H();
  if (e < r || e < 0)
    return t;
  r < 0 && (r = 0), e > this.length && (e = this.length);
  for (var i = 0, s = this.head; s !== null && i < r; i++)
    s = s.next;
  for (; s !== null && i < e; i++, s = s.next)
    t.push(s.value);
  return t;
};
H.prototype.sliceReverse = function(r, e) {
  e = e || this.length, e < 0 && (e += this.length), r = r || 0, r < 0 && (r += this.length);
  var t = new H();
  if (e < r || e < 0)
    return t;
  r < 0 && (r = 0), e > this.length && (e = this.length);
  for (var i = this.length, s = this.tail; s !== null && i > e; i--)
    s = s.prev;
  for (; s !== null && i > r; i--, s = s.prev)
    t.push(s.value);
  return t;
};
H.prototype.splice = function(r, e, ...t) {
  r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
  for (var i = 0, s = this.head; s !== null && i < r; i++)
    s = s.next;
  for (var a = [], i = 0; s && i < e; i++)
    a.push(s.value), s = this.removeNode(s);
  s === null && (s = this.tail), s !== this.head && s !== this.tail && (s = s.prev);
  for (var i = 0; i < t.length; i++)
    s = ST(this, s, t[i]);
  return a;
};
H.prototype.reverse = function() {
  for (var r = this.head, e = this.tail, t = r; t !== null; t = t.prev) {
    var i = t.prev;
    t.prev = t.next, t.next = i;
  }
  return this.head = e, this.tail = r, this;
};
function ST(r, e, t) {
  var i = e === r.head ? new Ct(t, null, e, r) : new Ct(t, e, e.next, r);
  return i.next === null && (r.tail = i), i.prev === null && (r.head = i), r.length++, i;
}
function vT(r, e) {
  r.tail = new Ct(e, r.tail, null, r), r.head || (r.head = r.tail), r.length++;
}
function gT(r, e) {
  r.head = new Ct(e, null, r.head, r), r.tail || (r.tail = r.head), r.length++;
}
function Ct(r, e, t, i) {
  if (!(this instanceof Ct))
    return new Ct(r, e, t, i);
  this.list = i, this.value = r, e ? (e.next = this, this.prev = e) : this.prev = null, t ? (t.prev = this, this.next = t) : this.next = null;
}
try {
  mT()(H);
} catch {
}
const bT = yT, Yt = Symbol("max"), tt = Symbol("length"), It = Symbol("lengthCalculator"), wr = Symbol("allowStale"), At = Symbol("maxAge"), et = Symbol("dispose"), Eo = Symbol("noDisposeOnSet"), ue = Symbol("lruList"), Re = Symbol("cache"), Vl = Symbol("updateAgeOnGet"), Gs = () => 1;
class YT {
  constructor(e) {
    if (typeof e == "number" && (e = { max: e }), e || (e = {}), e.max && (typeof e.max != "number" || e.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[Yt] = e.max || 1 / 0;
    const t = e.length || Gs;
    if (this[It] = typeof t != "function" ? Gs : t, this[wr] = e.stale || !1, e.maxAge && typeof e.maxAge != "number")
      throw new TypeError("maxAge must be a number");
    this[At] = e.maxAge || 0, this[et] = e.dispose, this[Eo] = e.noDisposeOnSet || !1, this[Vl] = e.updateAgeOnGet || !1, this.reset();
  }
  set max(e) {
    if (typeof e != "number" || e < 0)
      throw new TypeError("max must be a non-negative number");
    this[Yt] = e || 1 / 0, vr(this);
  }
  get max() {
    return this[Yt];
  }
  set allowStale(e) {
    this[wr] = !!e;
  }
  get allowStale() {
    return this[wr];
  }
  set maxAge(e) {
    if (typeof e != "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[At] = e, vr(this);
  }
  get maxAge() {
    return this[At];
  }
  set lengthCalculator(e) {
    typeof e != "function" && (e = Gs), e !== this[It] && (this[It] = e, this[tt] = 0, this[ue].forEach((t) => {
      t.length = this[It](t.value, t.key), this[tt] += t.length;
    })), vr(this);
  }
  get lengthCalculator() {
    return this[It];
  }
  get length() {
    return this[tt];
  }
  get itemCount() {
    return this[ue].length;
  }
  rforEach(e, t) {
    t = t || this;
    for (let i = this[ue].tail; i !== null; ) {
      const s = i.prev;
      fo(this, e, i, t), i = s;
    }
  }
  forEach(e, t) {
    t = t || this;
    for (let i = this[ue].head; i !== null; ) {
      const s = i.next;
      fo(this, e, i, t), i = s;
    }
  }
  keys() {
    return this[ue].toArray().map((e) => e.key);
  }
  values() {
    return this[ue].toArray().map((e) => e.value);
  }
  reset() {
    this[et] && this[ue] && this[ue].length && this[ue].forEach((e) => this[et](e.key, e.value)), this[Re] = /* @__PURE__ */ new Map(), this[ue] = new bT(), this[tt] = 0;
  }
  dump() {
    return this[ue].map((e) => ai(this, e) ? !1 : {
      k: e.key,
      v: e.value,
      e: e.now + (e.maxAge || 0)
    }).toArray().filter((e) => e);
  }
  dumpLru() {
    return this[ue];
  }
  set(e, t, i) {
    if (i = i || this[At], i && typeof i != "number")
      throw new TypeError("maxAge must be a number");
    const s = i ? Date.now() : 0, a = this[It](t, e);
    if (this[Re].has(e)) {
      if (a > this[Yt])
        return Ht(this, this[Re].get(e)), !1;
      const u = this[Re].get(e).value;
      return this[et] && (this[Eo] || this[et](e, u.value)), u.now = s, u.maxAge = i, u.value = t, this[tt] += a - u.length, u.length = a, this.get(e), vr(this), !0;
    }
    const l = new AT(e, t, a, s, i);
    return l.length > this[Yt] ? (this[et] && this[et](e, t), !1) : (this[tt] += l.length, this[ue].unshift(l), this[Re].set(e, this[ue].head), vr(this), !0);
  }
  has(e) {
    if (!this[Re].has(e))
      return !1;
    const t = this[Re].get(e).value;
    return !ai(this, t);
  }
  get(e) {
    return Ws(this, e, !0);
  }
  peek(e) {
    return Ws(this, e, !1);
  }
  pop() {
    const e = this[ue].tail;
    return e ? (Ht(this, e), e.value) : null;
  }
  del(e) {
    Ht(this, this[Re].get(e));
  }
  load(e) {
    this.reset();
    const t = Date.now();
    for (let i = e.length - 1; i >= 0; i--) {
      const s = e[i], a = s.e || 0;
      if (a === 0)
        this.set(s.k, s.v);
      else {
        const l = a - t;
        l > 0 && this.set(s.k, s.v, l);
      }
    }
  }
  prune() {
    this[Re].forEach((e, t) => Ws(this, t, !1));
  }
}
const Ws = (r, e, t) => {
  const i = r[Re].get(e);
  if (i) {
    const s = i.value;
    if (ai(r, s)) {
      if (Ht(r, i), !r[wr])
        return;
    } else
      t && (r[Vl] && (i.value.now = Date.now()), r[ue].unshiftNode(i));
    return s.value;
  }
}, ai = (r, e) => {
  if (!e || !e.maxAge && !r[At])
    return !1;
  const t = Date.now() - e.now;
  return e.maxAge ? t > e.maxAge : r[At] && t > r[At];
}, vr = (r) => {
  if (r[tt] > r[Yt])
    for (let e = r[ue].tail; r[tt] > r[Yt] && e !== null; ) {
      const t = e.prev;
      Ht(r, e), e = t;
    }
}, Ht = (r, e) => {
  if (e) {
    const t = e.value;
    r[et] && r[et](t.key, t.value), r[tt] -= t.length, r[Re].delete(t.key), r[ue].removeNode(e);
  }
};
class AT {
  constructor(e, t, i, s, a) {
    this.key = e, this.value = t, this.length = i, this.now = s, this.maxAge = a || 0;
  }
}
const fo = (r, e, t, i) => {
  let s = t.value;
  ai(r, s) && (Ht(r, t), r[wr] || (s = void 0)), s && e.call(i, s.value, s.key, r);
};
var LT = YT, Hs, To;
function Ue() {
  if (To)
    return Hs;
  To = 1;
  class r {
    constructor(E, P) {
      if (P = i(P), E instanceof r)
        return E.loose === !!P.loose && E.includePrerelease === !!P.includePrerelease ? E : new r(E.raw, P);
      if (E instanceof s)
        return this.raw = E.value, this.set = [[E]], this.format(), this;
      if (this.options = P, this.loose = !!P.loose, this.includePrerelease = !!P.includePrerelease, this.raw = E, this.set = E.split("||").map((g) => this.parseRange(g.trim())).filter((g) => g.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${E}`);
      if (this.set.length > 1) {
        const g = this.set[0];
        if (this.set = this.set.filter((L) => !v(L[0])), this.set.length === 0)
          this.set = [g];
        else if (this.set.length > 1) {
          for (const L of this.set)
            if (L.length === 1 && m(L[0])) {
              this.set = [L];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return this.range = this.set.map((E) => E.join(" ").trim()).join("||").trim(), this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(E) {
      E = E.trim();
      const g = `parseRange:${Object.keys(this.options).join(",")}:${E}`, L = t.get(g);
      if (L)
        return L;
      const b = this.options.loose, C = b ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
      E = E.replace(C, V(this.options.includePrerelease)), a("hyphen replace", E), E = E.replace(c[u.COMPARATORTRIM], Y), a("comparator trim", E), E = E.replace(c[u.TILDETRIM], T), E = E.replace(c[u.CARETTRIM], f), E = E.split(/\s+/).join(" ");
      let R = E.split(" ").map((X) => oe(X, this.options)).join(" ").split(/\s+/).map((X) => A(X, this.options));
      b && (R = R.filter((X) => (a("loose invalid filter", X, this.options), !!X.match(c[u.COMPARATORLOOSE])))), a("range list", R);
      const x = /* @__PURE__ */ new Map(), B = R.map((X) => new s(X, this.options));
      for (const X of B) {
        if (v(X))
          return [X];
        x.set(X.value, X);
      }
      x.size > 1 && x.has("") && x.delete("");
      const re = [...x.values()];
      return t.set(g, re), re;
    }
    intersects(E, P) {
      if (!(E instanceof r))
        throw new TypeError("a Range is required");
      return this.set.some((g) => F(g, P) && E.set.some((L) => F(L, P) && g.every((b) => L.every((C) => b.intersects(C, P)))));
    }
    test(E) {
      if (!E)
        return !1;
      if (typeof E == "string")
        try {
          E = new l(E, this.options);
        } catch {
          return !1;
        }
      for (let P = 0; P < this.set.length; P++)
        if (w(this.set[P], E, this.options))
          return !0;
      return !1;
    }
  }
  Hs = r;
  const e = LT, t = new e({ max: 1e3 }), i = hi, s = yi(), a = _i, l = de, {
    re: c,
    t: u,
    comparatorTrimReplace: Y,
    tildeTrimReplace: T,
    caretTrimReplace: f
  } = Tt.exports, v = (d) => d.value === "<0.0.0-0", m = (d) => d.value === "", F = (d, E) => {
    let P = !0;
    const g = d.slice();
    let L = g.pop();
    for (; P && g.length; )
      P = g.every((b) => L.intersects(b, E)), L = g.pop();
    return P;
  }, oe = (d, E) => (a("comp", d, E), d = st(d, E), a("caret", d), d = Ee(d, E), a("tildes", d), d = _(d, E), a("xrange", d), d = h(d, E), a("stars", d), d), N = (d) => !d || d.toLowerCase() === "x" || d === "*", Ee = (d, E) => d.trim().split(/\s+/).map((P) => it(P, E)).join(" "), it = (d, E) => {
    const P = E.loose ? c[u.TILDELOOSE] : c[u.TILDE];
    return d.replace(P, (g, L, b, C, R) => {
      a("tilde", d, g, L, b, C, R);
      let x;
      return N(L) ? x = "" : N(b) ? x = `>=${L}.0.0 <${+L + 1}.0.0-0` : N(C) ? x = `>=${L}.${b}.0 <${L}.${+b + 1}.0-0` : R ? (a("replaceTilde pr", R), x = `>=${L}.${b}.${C}-${R} <${L}.${+b + 1}.0-0`) : x = `>=${L}.${b}.${C} <${L}.${+b + 1}.0-0`, a("tilde return", x), x;
    });
  }, st = (d, E) => d.trim().split(/\s+/).map((P) => I(P, E)).join(" "), I = (d, E) => {
    a("caret", d, E);
    const P = E.loose ? c[u.CARETLOOSE] : c[u.CARET], g = E.includePrerelease ? "-0" : "";
    return d.replace(P, (L, b, C, R, x) => {
      a("caret", d, L, b, C, R, x);
      let B;
      return N(b) ? B = "" : N(C) ? B = `>=${b}.0.0${g} <${+b + 1}.0.0-0` : N(R) ? b === "0" ? B = `>=${b}.${C}.0${g} <${b}.${+C + 1}.0-0` : B = `>=${b}.${C}.0${g} <${+b + 1}.0.0-0` : x ? (a("replaceCaret pr", x), b === "0" ? C === "0" ? B = `>=${b}.${C}.${R}-${x} <${b}.${C}.${+R + 1}-0` : B = `>=${b}.${C}.${R}-${x} <${b}.${+C + 1}.0-0` : B = `>=${b}.${C}.${R}-${x} <${+b + 1}.0.0-0`) : (a("no pr"), b === "0" ? C === "0" ? B = `>=${b}.${C}.${R}${g} <${b}.${C}.${+R + 1}-0` : B = `>=${b}.${C}.${R}${g} <${b}.${+C + 1}.0-0` : B = `>=${b}.${C}.${R} <${+b + 1}.0.0-0`), a("caret return", B), B;
    });
  }, _ = (d, E) => (a("replaceXRanges", d, E), d.split(/\s+/).map((P) => y(P, E)).join(" ")), y = (d, E) => {
    d = d.trim();
    const P = E.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
    return d.replace(P, (g, L, b, C, R, x) => {
      a("xRange", d, g, L, b, C, R, x);
      const B = N(b), re = B || N(C), X = re || N(R), be = X;
      return L === "=" && be && (L = ""), x = E.includePrerelease ? "-0" : "", B ? L === ">" || L === "<" ? g = "<0.0.0-0" : g = "*" : L && be ? (re && (C = 0), R = 0, L === ">" ? (L = ">=", re ? (b = +b + 1, C = 0, R = 0) : (C = +C + 1, R = 0)) : L === "<=" && (L = "<", re ? b = +b + 1 : C = +C + 1), L === "<" && (x = "-0"), g = `${L + b}.${C}.${R}${x}`) : re ? g = `>=${b}.0.0${x} <${+b + 1}.0.0-0` : X && (g = `>=${b}.${C}.0${x} <${b}.${+C + 1}.0-0`), a("xRange return", g), g;
    });
  }, h = (d, E) => (a("replaceStars", d, E), d.trim().replace(c[u.STAR], "")), A = (d, E) => (a("replaceGTE0", d, E), d.trim().replace(c[E.includePrerelease ? u.GTE0PRE : u.GTE0], "")), V = (d) => (E, P, g, L, b, C, R, x, B, re, X, be, qe) => (N(g) ? P = "" : N(L) ? P = `>=${g}.0.0${d ? "-0" : ""}` : N(b) ? P = `>=${g}.${L}.0${d ? "-0" : ""}` : C ? P = `>=${P}` : P = `>=${P}${d ? "-0" : ""}`, N(B) ? x = "" : N(re) ? x = `<${+B + 1}.0.0-0` : N(X) ? x = `<${B}.${+re + 1}.0-0` : be ? x = `<=${B}.${re}.${X}-${be}` : d ? x = `<${B}.${re}.${+X + 1}-0` : x = `<=${x}`, `${P} ${x}`.trim()), w = (d, E, P) => {
    for (let g = 0; g < d.length; g++)
      if (!d[g].test(E))
        return !1;
    if (E.prerelease.length && !P.includePrerelease) {
      for (let g = 0; g < d.length; g++)
        if (a(d[g].semver), d[g].semver !== s.ANY && d[g].semver.prerelease.length > 0) {
          const L = d[g].semver;
          if (L.major === E.major && L.minor === E.minor && L.patch === E.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Hs;
}
var Ks, Po;
function yi() {
  if (Po)
    return Ks;
  Po = 1;
  const r = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return r;
    }
    constructor(T, f) {
      if (f = t(f), T instanceof e) {
        if (T.loose === !!f.loose)
          return T;
        T = T.value;
      }
      l("comparator", T, f), this.options = f, this.loose = !!f.loose, this.parse(T), this.semver === r ? this.value = "" : this.value = this.operator + this.semver.version, l("comp", this);
    }
    parse(T) {
      const f = this.options.loose ? i[s.COMPARATORLOOSE] : i[s.COMPARATOR], v = T.match(f);
      if (!v)
        throw new TypeError(`Invalid comparator: ${T}`);
      this.operator = v[1] !== void 0 ? v[1] : "", this.operator === "=" && (this.operator = ""), v[2] ? this.semver = new c(v[2], this.options.loose) : this.semver = r;
    }
    toString() {
      return this.value;
    }
    test(T) {
      if (l("Comparator.test", T, this.options.loose), this.semver === r || T === r)
        return !0;
      if (typeof T == "string")
        try {
          T = new c(T, this.options);
        } catch {
          return !1;
        }
      return a(T, this.operator, this.semver, this.options);
    }
    intersects(T, f) {
      if (!(T instanceof e))
        throw new TypeError("a Comparator is required");
      if ((!f || typeof f != "object") && (f = {
        loose: !!f,
        includePrerelease: !1
      }), this.operator === "")
        return this.value === "" ? !0 : new u(T.value, f).test(this.value);
      if (T.operator === "")
        return T.value === "" ? !0 : new u(this.value, f).test(T.semver);
      const v = (this.operator === ">=" || this.operator === ">") && (T.operator === ">=" || T.operator === ">"), m = (this.operator === "<=" || this.operator === "<") && (T.operator === "<=" || T.operator === "<"), F = this.semver.version === T.semver.version, oe = (this.operator === ">=" || this.operator === "<=") && (T.operator === ">=" || T.operator === "<="), N = a(this.semver, "<", T.semver, f) && (this.operator === ">=" || this.operator === ">") && (T.operator === "<=" || T.operator === "<"), Ee = a(this.semver, ">", T.semver, f) && (this.operator === "<=" || this.operator === "<") && (T.operator === ">=" || T.operator === ">");
      return v || m || F && oe || N || Ee;
    }
  }
  Ks = e;
  const t = hi, { re: i, t: s } = Tt.exports, a = Cl, l = _i, c = de, u = Ue();
  return Ks;
}
const CT = Ue(), VT = (r, e, t) => {
  try {
    e = new CT(e, t);
  } catch {
    return !1;
  }
  return e.test(r);
};
var Si = VT;
const OT = Ue(), wT = (r, e) => new OT(r, e).set.map((t) => t.map((i) => i.value).join(" ").trim().split(" "));
var MT = wT;
const RT = de, IT = Ue(), xT = (r, e, t) => {
  let i = null, s = null, a = null;
  try {
    a = new IT(e, t);
  } catch {
    return null;
  }
  return r.forEach((l) => {
    a.test(l) && (!i || s.compare(l) === -1) && (i = l, s = new RT(i, t));
  }), i;
};
var UT = xT;
const $T = de, DT = Ue(), jT = (r, e, t) => {
  let i = null, s = null, a = null;
  try {
    a = new DT(e, t);
  } catch {
    return null;
  }
  return r.forEach((l) => {
    a.test(l) && (!i || s.compare(l) === 1) && (i = l, s = new $T(i, t));
  }), i;
};
var kT = jT;
const Xs = de, FT = Ue(), _o = mi, NT = (r, e) => {
  r = new FT(r, e);
  let t = new Xs("0.0.0");
  if (r.test(t) || (t = new Xs("0.0.0-0"), r.test(t)))
    return t;
  t = null;
  for (let i = 0; i < r.set.length; ++i) {
    const s = r.set[i];
    let a = null;
    s.forEach((l) => {
      const c = new Xs(l.semver.version);
      switch (l.operator) {
        case ">":
          c.prerelease.length === 0 ? c.patch++ : c.prerelease.push(0), c.raw = c.format();
        case "":
        case ">=":
          (!a || _o(c, a)) && (a = c);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${l.operator}`);
      }
    }), a && (!t || _o(t, a)) && (t = a);
  }
  return t && r.test(t) ? t : null;
};
var BT = NT;
const GT = Ue(), WT = (r, e) => {
  try {
    return new GT(r, e).range || "*";
  } catch {
    return null;
  }
};
var HT = WT;
const KT = de, Ol = yi(), { ANY: XT } = Ol, qT = Ue(), zT = Si, ho = mi, mo = Ma, JT = Ia, QT = Ra, ZT = (r, e, t, i) => {
  r = new KT(r, i), e = new qT(e, i);
  let s, a, l, c, u;
  switch (t) {
    case ">":
      s = ho, a = JT, l = mo, c = ">", u = ">=";
      break;
    case "<":
      s = mo, a = QT, l = ho, c = "<", u = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (zT(r, e, i))
    return !1;
  for (let Y = 0; Y < e.set.length; ++Y) {
    const T = e.set[Y];
    let f = null, v = null;
    if (T.forEach((m) => {
      m.semver === XT && (m = new Ol(">=0.0.0")), f = f || m, v = v || m, s(m.semver, f.semver, i) ? f = m : l(m.semver, v.semver, i) && (v = m);
    }), f.operator === c || f.operator === u || (!v.operator || v.operator === c) && a(r, v.semver))
      return !1;
    if (v.operator === u && l(r, v.semver))
      return !1;
  }
  return !0;
};
var xa = ZT;
const ed = xa, td = (r, e, t) => ed(r, e, ">", t);
var rd = td;
const nd = xa, id = (r, e, t) => nd(r, e, "<", t);
var sd = id;
const yo = Ue(), ad = (r, e, t) => (r = new yo(r, t), e = new yo(e, t), r.intersects(e));
var od = ad;
const ld = Si, cd = xe;
var ud = (r, e, t) => {
  const i = [];
  let s = null, a = null;
  const l = r.sort((T, f) => cd(T, f, t));
  for (const T of l)
    ld(T, e, t) ? (a = T, s || (s = T)) : (a && i.push([s, a]), a = null, s = null);
  s && i.push([s, null]);
  const c = [];
  for (const [T, f] of i)
    T === f ? c.push(T) : !f && T === l[0] ? c.push("*") : f ? T === l[0] ? c.push(`<=${f}`) : c.push(`${T} - ${f}`) : c.push(`>=${T}`);
  const u = c.join(" || "), Y = typeof e.raw == "string" ? e.raw : String(e);
  return u.length < Y.length ? u : e;
};
const So = Ue(), Bn = yi(), { ANY: qs } = Bn, gr = Si, Ua = xe, pd = (r, e, t = {}) => {
  if (r === e)
    return !0;
  r = new So(r, t), e = new So(e, t);
  let i = !1;
  e:
    for (const s of r.set) {
      for (const a of e.set) {
        const l = Ed(s, a, t);
        if (i = i || l !== null, l)
          continue e;
      }
      if (i)
        return !1;
    }
  return !0;
}, Ed = (r, e, t) => {
  if (r === e)
    return !0;
  if (r.length === 1 && r[0].semver === qs) {
    if (e.length === 1 && e[0].semver === qs)
      return !0;
    t.includePrerelease ? r = [new Bn(">=0.0.0-0")] : r = [new Bn(">=0.0.0")];
  }
  if (e.length === 1 && e[0].semver === qs) {
    if (t.includePrerelease)
      return !0;
    e = [new Bn(">=0.0.0")];
  }
  const i = /* @__PURE__ */ new Set();
  let s, a;
  for (const m of r)
    m.operator === ">" || m.operator === ">=" ? s = vo(s, m, t) : m.operator === "<" || m.operator === "<=" ? a = go(a, m, t) : i.add(m.semver);
  if (i.size > 1)
    return null;
  let l;
  if (s && a) {
    if (l = Ua(s.semver, a.semver, t), l > 0)
      return null;
    if (l === 0 && (s.operator !== ">=" || a.operator !== "<="))
      return null;
  }
  for (const m of i) {
    if (s && !gr(m, String(s), t) || a && !gr(m, String(a), t))
      return null;
    for (const F of e)
      if (!gr(m, String(F), t))
        return !1;
    return !0;
  }
  let c, u, Y, T, f = a && !t.includePrerelease && a.semver.prerelease.length ? a.semver : !1, v = s && !t.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
  f && f.prerelease.length === 1 && a.operator === "<" && f.prerelease[0] === 0 && (f = !1);
  for (const m of e) {
    if (T = T || m.operator === ">" || m.operator === ">=", Y = Y || m.operator === "<" || m.operator === "<=", s) {
      if (v && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === v.major && m.semver.minor === v.minor && m.semver.patch === v.patch && (v = !1), m.operator === ">" || m.operator === ">=") {
        if (c = vo(s, m, t), c === m && c !== s)
          return !1;
      } else if (s.operator === ">=" && !gr(s.semver, String(m), t))
        return !1;
    }
    if (a) {
      if (f && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === f.major && m.semver.minor === f.minor && m.semver.patch === f.patch && (f = !1), m.operator === "<" || m.operator === "<=") {
        if (u = go(a, m, t), u === m && u !== a)
          return !1;
      } else if (a.operator === "<=" && !gr(a.semver, String(m), t))
        return !1;
    }
    if (!m.operator && (a || s) && l !== 0)
      return !1;
  }
  return !(s && Y && !a && l !== 0 || a && T && !s && l !== 0 || v || f);
}, vo = (r, e, t) => {
  if (!r)
    return e;
  const i = Ua(r.semver, e.semver, t);
  return i > 0 ? r : i < 0 || e.operator === ">" && r.operator === ">=" ? e : r;
}, go = (r, e, t) => {
  if (!r)
    return e;
  const i = Ua(r.semver, e.semver, t);
  return i < 0 ? r : i > 0 || e.operator === "<" && r.operator === "<=" ? e : r;
};
var fd = pd;
const zs = Tt.exports, Td = Pi, dd = de, bo = Al, Pd = tr, _d = df, hd = hf, md = yf, yd = Af, Sd = Vf, vd = Mf, gd = xf, bd = Df, Yd = xe, Ad = Ff, Ld = Gf, Cd = wa, Vd = Xf, Od = Jf, wd = mi, Md = Ma, Rd = Oa, Id = Ll, xd = Ra, Ud = Ia, $d = Cl, Dd = hT, jd = yi(), kd = Ue(), Fd = Si, Nd = MT, Bd = UT, Gd = kT, Wd = BT, Hd = HT, Kd = xa, Xd = rd, qd = sd, zd = od, Jd = ud, Qd = fd;
var wl = {
  parse: Pd,
  valid: _d,
  clean: hd,
  inc: md,
  diff: yd,
  major: Sd,
  minor: vd,
  patch: gd,
  prerelease: bd,
  compare: Yd,
  rcompare: Ad,
  compareLoose: Ld,
  compareBuild: Cd,
  sort: Vd,
  rsort: Od,
  gt: wd,
  lt: Md,
  eq: Rd,
  neq: Id,
  gte: xd,
  lte: Ud,
  cmp: $d,
  coerce: Dd,
  Comparator: jd,
  Range: kd,
  satisfies: Fd,
  toComparators: Nd,
  maxSatisfying: Bd,
  minSatisfying: Gd,
  minVersion: Wd,
  validRange: Hd,
  outside: Kd,
  gtr: Xd,
  ltr: qd,
  intersects: zd,
  simplifyRange: Jd,
  subset: Qd,
  SemVer: dd,
  re: zs.re,
  src: zs.src,
  tokens: zs.t,
  SEMVER_SPEC_VERSION: Td.SEMVER_SPEC_VERSION,
  compareIdentifiers: bo.compareIdentifiers,
  rcompareIdentifiers: bo.rcompareIdentifiers
}, kr = {};
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.RuleTester = void 0;
const Zd = $r;
class eP extends Zd.RuleTester {
}
kr.RuleTester = eP;
var vi = {}, tP = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), rP = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), nP = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && tP(e, r, t);
  return rP(e, r), e;
};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.satisfiesAllDependencyConstraints = void 0;
const iP = nP(wl), sP = {
  includePrerelease: !0
};
function aP(r, e) {
  const t = typeof e == "string" ? {
    range: `>=${e}`
  } : e;
  return iP.satisfies(bl(`${r}/package.json`).version, t.range, typeof t.options == "object" ? Object.assign(Object.assign({}, sP), t.options) : t.options);
}
function oP(r) {
  if (r == null)
    return !0;
  for (const [e, t] of Object.entries(r))
    if (!aP(e, t))
      return !1;
  return !0;
}
vi.satisfiesAllDependencyConstraints = oP;
var lP = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), cP = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), $a = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && lP(e, r, t);
  return cP(e, r), e;
}, In = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Yo = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, Ao = p && p.__rest || function(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[s]) && (t[i[s]] = r[i[s]]);
  return t;
}, uP = p && p.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
}, oa, Dt, la;
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.RuleTester = zt.noFormat = void 0;
const pP = uP(er), EP = ZE, fP = $a(er), TP = $a(wl), dP = $a(kr), PP = ft, xn = vi, ca = "@typescript-eslint/parser", _P = `Do not set the parser at the test level unless you want to use a parser other than ${ca}`;
function hP(r) {
  return typeof r == "object" && r != null && "skip" in r && typeof r.skip == "function";
}
class Ml extends dP.RuleTester {
  static get afterAll() {
    var e;
    return (e = In(this, oa, "f", la)) !== null && e !== void 0 ? e : typeof afterAll == "function" ? afterAll : () => {
    };
  }
  static set afterAll(e) {
    Yo(this, oa, e, "f", la);
  }
  get staticThis() {
    return this.constructor;
  }
  constructor(e) {
    var t, i;
    const s = Ao(e, ["dependencyConstraints"]);
    super(Object.assign(Object.assign({}, s), {
      parserOptions: Object.assign(Object.assign({}, e.parserOptions), { warnOnUnsupportedTypeScriptVersion: (i = (t = e.parserOptions) === null || t === void 0 ? void 0 : t.warnOnUnsupportedTypeScriptVersion) !== null && i !== void 0 ? i : !1 }),
      parser: require.resolve(e.parser)
    })), Dt.set(this, void 0), Yo(this, Dt, e, "f"), this.staticThis.afterAll(() => {
      try {
        bl(ca).clearCaches();
      } catch {
      }
    });
  }
  getFilename(e) {
    var t;
    const i = (0, PP.deepMerge)(In(this, Dt, "f").parserOptions, e), s = `file.ts${!((t = i.ecmaFeatures) === null || t === void 0) && t.jsx ? "x" : ""}`;
    return i.project ? fP.join(i.tsconfigRootDir != null ? i.tsconfigRootDir : process.cwd(), s) : s;
  }
  run(e, t, i) {
    if (In(this, Dt, "f").dependencyConstraints && !(0, xn.satisfiesAllDependencyConstraints)(In(this, Dt, "f").dependencyConstraints)) {
      hP(this.staticThis.describe) ? this.staticThis.describe.skip(e, () => {
        this.staticThis.it("All tests skipped due to unsatisfied constructor dependency constraints", () => {
        });
      }) : this.staticThis.describe(e, () => {
        this.staticThis.it("All tests skipped due to unsatisfied constructor dependency constraints", () => {
          pP.default.equal(!0, !0);
        });
      });
      return;
    }
    const s = {
      valid: i.valid.map((u) => typeof u == "string" ? {
        code: u
      } : u),
      invalid: i.invalid
    }, a = {
      *[Symbol.iterator]() {
        for (const u of s.valid)
          yield u;
        for (const u of s.invalid)
          yield u;
      }
    }, l = (u) => {
      var Y = Ao(u, ["dependencyConstraints"]);
      if (Y.parser === ca)
        throw new Error(_P);
      return Y.filename ? Y : Object.assign(Object.assign({}, Y), { filename: this.getFilename(Y.parserOptions) });
    };
    if (s.valid = s.valid.map(l), s.invalid = s.invalid.map(l), !(() => {
      for (const u of a)
        if (u.only)
          return !0;
      return !1;
    })() && (() => {
      for (const Y of a)
        if (Y.dependencyConstraints && Object.keys(Y.dependencyConstraints).length > 0)
          return !0;
      return !1;
    })())
      if (TP.satisfies(EP.version, ">=7.29.0")) {
        const Y = (T) => Object.assign(Object.assign({}, T), { only: (0, xn.satisfiesAllDependencyConstraints)(T.dependencyConstraints) });
        s.valid = s.valid.map(Y), s.invalid = s.invalid.map(Y);
      } else
        s.valid = s.valid.filter((Y) => (0, xn.satisfiesAllDependencyConstraints)(Y.dependencyConstraints)), s.invalid = s.invalid.filter((Y) => (0, xn.satisfiesAllDependencyConstraints)(Y.dependencyConstraints));
    super.run(e, t, s);
  }
}
zt.RuleTester = Ml;
oa = Ml, Dt = /* @__PURE__ */ new WeakMap();
la = { value: void 0 };
function mP(r, ...e) {
  const t = r.length - 1;
  return r.slice(0, t).reduce((i, s, a) => i + s + e[a], "") + r[t];
}
zt.noFormat = mP;
var Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.NullThrowsReasons = Jt.nullThrows = void 0;
const yP = {
  MissingParent: "Expected node to have a parent.",
  MissingToken: (r, e) => `Expected to find a ${r} for the ${e}.`
};
Jt.NullThrowsReasons = yP;
function SP(r, e) {
  if (r == null)
    throw new Error(`Non-null Assertion Failed: ${e}`);
  return r;
}
Jt.nullThrows = SP;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(i, s, a, l) {
    l === void 0 && (l = a);
    var c = Object.getOwnPropertyDescriptor(s, a);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[a];
    } }), Object.defineProperty(i, l, c);
  } : function(i, s, a, l) {
    l === void 0 && (l = a), i[l] = s[a];
  }), t = p && p.__exportStar || function(i, s) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), t(jr, r), t(fi, r), t(Ti, r), t(Sl, r), t(di, r), t(zt, r), t(ft, r), t(Jt, r);
})(ml);
var Rl = {};
Object.defineProperty(Rl, "__esModule", { value: !0 });
var Il = {}, xl = {};
Object.defineProperty(xl, "__esModule", { value: !0 });
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.CLIEngine = void 0;
const Lo = $r, vP = Lo.CLIEngine ? class extends Lo.CLIEngine {
} : void 0;
gi.CLIEngine = vP;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.ESLint = void 0;
const Js = $r, gP = Js.ESLint !== null && Js.ESLint !== void 0 ? Js.ESLint : function() {
  throw new Error("Attempted to construct an ESLint instance on less than ESLint v7.0.0");
};
class bP extends gP {
}
bi.ESLint = bP;
var Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.Linter = void 0;
const YP = $r;
class AP extends YP.Linter {
}
Yi.Linter = AP;
var Ul = {};
Object.defineProperty(Ul, "__esModule", { value: !0 });
var $l = {};
Object.defineProperty($l, "__esModule", { value: !0 });
var Ai = {}, Dl = {}, Li = {}, Da = {}, Ci = {}, rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
const Fr = {
  AssignmentExpression: [
    "left",
    "right"
  ],
  AssignmentPattern: [
    "left",
    "right"
  ],
  ArrayExpression: [
    "elements"
  ],
  ArrayPattern: [
    "elements"
  ],
  ArrowFunctionExpression: [
    "params",
    "body"
  ],
  AwaitExpression: [
    "argument"
  ],
  BlockStatement: [
    "body"
  ],
  BinaryExpression: [
    "left",
    "right"
  ],
  BreakStatement: [
    "label"
  ],
  CallExpression: [
    "callee",
    "arguments"
  ],
  CatchClause: [
    "param",
    "body"
  ],
  ChainExpression: [
    "expression"
  ],
  ClassBody: [
    "body"
  ],
  ClassDeclaration: [
    "id",
    "superClass",
    "body"
  ],
  ClassExpression: [
    "id",
    "superClass",
    "body"
  ],
  ConditionalExpression: [
    "test",
    "consequent",
    "alternate"
  ],
  ContinueStatement: [
    "label"
  ],
  DebuggerStatement: [],
  DoWhileStatement: [
    "body",
    "test"
  ],
  EmptyStatement: [],
  ExportAllDeclaration: [
    "exported",
    "source"
  ],
  ExportDefaultDeclaration: [
    "declaration"
  ],
  ExportNamedDeclaration: [
    "declaration",
    "specifiers",
    "source"
  ],
  ExportSpecifier: [
    "exported",
    "local"
  ],
  ExpressionStatement: [
    "expression"
  ],
  ExperimentalRestProperty: [
    "argument"
  ],
  ExperimentalSpreadProperty: [
    "argument"
  ],
  ForStatement: [
    "init",
    "test",
    "update",
    "body"
  ],
  ForInStatement: [
    "left",
    "right",
    "body"
  ],
  ForOfStatement: [
    "left",
    "right",
    "body"
  ],
  FunctionDeclaration: [
    "id",
    "params",
    "body"
  ],
  FunctionExpression: [
    "id",
    "params",
    "body"
  ],
  Identifier: [],
  IfStatement: [
    "test",
    "consequent",
    "alternate"
  ],
  ImportDeclaration: [
    "specifiers",
    "source"
  ],
  ImportDefaultSpecifier: [
    "local"
  ],
  ImportExpression: [
    "source"
  ],
  ImportNamespaceSpecifier: [
    "local"
  ],
  ImportSpecifier: [
    "imported",
    "local"
  ],
  JSXAttribute: [
    "name",
    "value"
  ],
  JSXClosingElement: [
    "name"
  ],
  JSXElement: [
    "openingElement",
    "children",
    "closingElement"
  ],
  JSXEmptyExpression: [],
  JSXExpressionContainer: [
    "expression"
  ],
  JSXIdentifier: [],
  JSXMemberExpression: [
    "object",
    "property"
  ],
  JSXNamespacedName: [
    "namespace",
    "name"
  ],
  JSXOpeningElement: [
    "name",
    "attributes"
  ],
  JSXSpreadAttribute: [
    "argument"
  ],
  JSXText: [],
  JSXFragment: [
    "openingFragment",
    "children",
    "closingFragment"
  ],
  JSXClosingFragment: [],
  JSXOpeningFragment: [],
  Literal: [],
  LabeledStatement: [
    "label",
    "body"
  ],
  LogicalExpression: [
    "left",
    "right"
  ],
  MemberExpression: [
    "object",
    "property"
  ],
  MetaProperty: [
    "meta",
    "property"
  ],
  MethodDefinition: [
    "key",
    "value"
  ],
  NewExpression: [
    "callee",
    "arguments"
  ],
  ObjectExpression: [
    "properties"
  ],
  ObjectPattern: [
    "properties"
  ],
  PrivateIdentifier: [],
  Program: [
    "body"
  ],
  Property: [
    "key",
    "value"
  ],
  PropertyDefinition: [
    "key",
    "value"
  ],
  RestElement: [
    "argument"
  ],
  ReturnStatement: [
    "argument"
  ],
  SequenceExpression: [
    "expressions"
  ],
  SpreadElement: [
    "argument"
  ],
  StaticBlock: [
    "body"
  ],
  Super: [],
  SwitchStatement: [
    "discriminant",
    "cases"
  ],
  SwitchCase: [
    "test",
    "consequent"
  ],
  TaggedTemplateExpression: [
    "tag",
    "quasi"
  ],
  TemplateElement: [],
  TemplateLiteral: [
    "quasis",
    "expressions"
  ],
  ThisExpression: [],
  ThrowStatement: [
    "argument"
  ],
  TryStatement: [
    "block",
    "handler",
    "finalizer"
  ],
  UnaryExpression: [
    "argument"
  ],
  UpdateExpression: [
    "argument"
  ],
  VariableDeclaration: [
    "declarations"
  ],
  VariableDeclarator: [
    "id",
    "init"
  ],
  WhileStatement: [
    "test",
    "body"
  ],
  WithStatement: [
    "object",
    "body"
  ],
  YieldExpression: [
    "argument"
  ]
}, LP = Object.keys(Fr);
for (const r of LP)
  Object.freeze(Fr[r]);
Object.freeze(Fr);
const CP = /* @__PURE__ */ new Set([
  "parent",
  "leadingComments",
  "trailingComments"
]);
function VP(r) {
  return !CP.has(r) && r[0] !== "_";
}
function OP(r) {
  return Object.keys(r).filter(VP);
}
function wP(r) {
  const e = Object.assign({}, Fr);
  for (const t of Object.keys(r))
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      const i = new Set(r[t]);
      for (const s of e[t])
        i.add(s);
      e[t] = Object.freeze(Array.from(i));
    } else
      e[t] = Object.freeze(Array.from(r[t]));
  return Object.freeze(e);
}
rr.KEYS = Fr;
rr.getKeys = OP;
rr.unionWith = wP;
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.getKeys = void 0;
const MP = rr, RP = MP.getKeys;
Ci.getKeys = RP;
var Vi = {}, IP = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), xP = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), UP = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && IP(e, r, t);
  return xP(e, r), e;
};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.visitorKeys = void 0;
const $P = UP(rr), DP = {
  ImportAttribute: ["key", "value"],
  ArrayPattern: ["decorators", "elements", "typeAnnotation"],
  ArrowFunctionExpression: ["typeParameters", "params", "returnType", "body"],
  AssignmentPattern: ["decorators", "left", "right", "typeAnnotation"],
  CallExpression: ["callee", "typeParameters", "arguments"],
  ClassDeclaration: [
    "decorators",
    "id",
    "typeParameters",
    "superClass",
    "superTypeParameters",
    "implements",
    "body"
  ],
  ClassExpression: [
    "decorators",
    "id",
    "typeParameters",
    "superClass",
    "superTypeParameters",
    "implements",
    "body"
  ],
  ExportAllDeclaration: ["exported", "source", "assertions"],
  ExportNamedDeclaration: ["declaration", "specifiers", "source", "assertions"],
  FunctionDeclaration: ["id", "typeParameters", "params", "returnType", "body"],
  FunctionExpression: ["id", "typeParameters", "params", "returnType", "body"],
  Identifier: ["decorators", "typeAnnotation"],
  ImportDeclaration: ["specifiers", "source", "assertions"],
  ImportExpression: ["source", "attributes"],
  MethodDefinition: ["decorators", "key", "value", "typeParameters"],
  NewExpression: ["callee", "typeParameters", "arguments"],
  ObjectPattern: ["decorators", "properties", "typeAnnotation"],
  PropertyDefinition: ["decorators", "key", "typeAnnotation", "value"],
  RestElement: ["decorators", "argument", "typeAnnotation"],
  TaggedTemplateExpression: ["tag", "typeParameters", "quasi"],
  StaticBlock: ["body"],
  JSXOpeningElement: ["name", "typeParameters", "attributes"],
  JSXClosingFragment: [],
  JSXOpeningFragment: [],
  JSXSpreadChild: ["expression"],
  Decorator: ["expression"],
  TSAbstractKeyword: [],
  TSAbstractMethodDefinition: ["key", "value"],
  TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
  TSAnyKeyword: [],
  TSArrayType: ["elementType"],
  TSAsExpression: ["expression", "typeAnnotation"],
  TSAsyncKeyword: [],
  TSBigIntKeyword: [],
  TSBooleanKeyword: [],
  TSCallSignatureDeclaration: ["typeParameters", "params", "returnType"],
  TSClassImplements: ["expression", "typeParameters"],
  TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
  TSConstructorType: ["typeParameters", "params", "returnType"],
  TSConstructSignatureDeclaration: ["typeParameters", "params", "returnType"],
  TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"],
  TSDeclareKeyword: [],
  TSEmptyBodyFunctionExpression: [
    "id",
    "typeParameters",
    "params",
    "returnType"
  ],
  TSEnumDeclaration: ["id", "members"],
  TSEnumMember: ["id", "initializer"],
  TSExportAssignment: ["expression"],
  TSExportKeyword: [],
  TSExternalModuleReference: ["expression"],
  TSFunctionType: ["typeParameters", "params", "returnType"],
  TSImportEqualsDeclaration: ["id", "moduleReference"],
  TSImportType: ["parameter", "qualifier", "typeParameters"],
  TSIndexedAccessType: ["indexType", "objectType"],
  TSIndexSignature: ["parameters", "typeAnnotation"],
  TSInferType: ["typeParameter"],
  TSInstantiationExpression: ["expression", "typeParameters"],
  TSInterfaceBody: ["body"],
  TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  TSInterfaceHeritage: ["expression", "typeParameters"],
  TSIntersectionType: ["types"],
  TSIntrinsicKeyword: [],
  TSLiteralType: ["literal"],
  TSMappedType: ["nameType", "typeParameter", "typeAnnotation"],
  TSMethodSignature: ["typeParameters", "key", "params", "returnType"],
  TSModuleBlock: ["body"],
  TSModuleDeclaration: ["id", "body"],
  TSNamedTupleMember: ["label", "elementType"],
  TSNamespaceExportDeclaration: ["id"],
  TSNeverKeyword: [],
  TSNonNullExpression: ["expression"],
  TSNullKeyword: [],
  TSNumberKeyword: [],
  TSObjectKeyword: [],
  TSOptionalType: ["typeAnnotation"],
  TSParameterProperty: ["decorators", "parameter"],
  TSPrivateKeyword: [],
  TSPropertySignature: ["typeAnnotation", "key", "initializer"],
  TSProtectedKeyword: [],
  TSPublicKeyword: [],
  TSQualifiedName: ["left", "right"],
  TSReadonlyKeyword: [],
  TSRestType: ["typeAnnotation"],
  TSSatisfiesExpression: ["typeAnnotation", "expression"],
  TSStaticKeyword: [],
  TSStringKeyword: [],
  TSSymbolKeyword: [],
  TSTemplateLiteralType: ["quasis", "types"],
  TSThisType: [],
  TSTupleType: ["elementTypes"],
  TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
  TSTypeAnnotation: ["typeAnnotation"],
  TSTypeAssertion: ["typeAnnotation", "expression"],
  TSTypeLiteral: ["members"],
  TSTypeOperator: ["typeAnnotation"],
  TSTypeParameter: ["name", "constraint", "default"],
  TSTypeParameterDeclaration: ["params"],
  TSTypeParameterInstantiation: ["params"],
  TSTypePredicate: ["typeAnnotation", "parameterName"],
  TSTypeQuery: ["exprName", "typeParameters"],
  TSTypeReference: ["typeName", "typeParameters"],
  TSUndefinedKeyword: [],
  TSUnionType: ["types"],
  TSUnknownKeyword: [],
  TSVoidKeyword: []
}, jP = $P.unionWith(DP);
Vi.visitorKeys = jP;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.visitorKeys = r.getKeys = void 0;
  var e = Ci;
  Object.defineProperty(r, "getKeys", { enumerable: !0, get: function() {
    return e.getKeys;
  } });
  var t = Vi;
  Object.defineProperty(r, "visitorKeys", { enumerable: !0, get: function() {
    return t.visitorKeys;
  } });
})(Da);
var Nr = {}, Se = {}, O = {};
Object.defineProperty(O, "__esModule", { value: !0 });
O.TYPE_VALUE = O.VALUE = O.TYPE = void 0;
O.TYPE = Object.freeze({
  eslintImplicitGlobalSetting: "readonly",
  isTypeVariable: !0,
  isValueVariable: !1
});
O.VALUE = Object.freeze({
  eslintImplicitGlobalSetting: "readonly",
  isTypeVariable: !1,
  isValueVariable: !0
});
O.TYPE_VALUE = Object.freeze({
  eslintImplicitGlobalSetting: "readonly",
  isTypeVariable: !0,
  isValueVariable: !0
});
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.dom = void 0;
const n = O;
Se.dom = {
  AddEventListenerOptions: n.TYPE,
  AesCbcParams: n.TYPE,
  AesCtrParams: n.TYPE,
  AesDerivedKeyParams: n.TYPE,
  AesGcmParams: n.TYPE,
  AesKeyAlgorithm: n.TYPE,
  AesKeyGenParams: n.TYPE,
  Algorithm: n.TYPE,
  AnalyserOptions: n.TYPE,
  AnimationEventInit: n.TYPE,
  AnimationPlaybackEventInit: n.TYPE,
  AssignedNodesOptions: n.TYPE,
  AudioBufferOptions: n.TYPE,
  AudioBufferSourceOptions: n.TYPE,
  AudioConfiguration: n.TYPE,
  AudioContextOptions: n.TYPE,
  AudioNodeOptions: n.TYPE,
  AudioProcessingEventInit: n.TYPE,
  AudioTimestamp: n.TYPE,
  AudioWorkletNodeOptions: n.TYPE,
  AuthenticationExtensionsClientInputs: n.TYPE,
  AuthenticationExtensionsClientOutputs: n.TYPE,
  AuthenticatorSelectionCriteria: n.TYPE,
  BiquadFilterOptions: n.TYPE,
  BlobEventInit: n.TYPE,
  BlobPropertyBag: n.TYPE,
  CSSStyleSheetInit: n.TYPE,
  CacheQueryOptions: n.TYPE,
  CanvasRenderingContext2DSettings: n.TYPE,
  ChannelMergerOptions: n.TYPE,
  ChannelSplitterOptions: n.TYPE,
  ClientQueryOptions: n.TYPE,
  ClipboardEventInit: n.TYPE,
  ClipboardItemOptions: n.TYPE,
  CloseEventInit: n.TYPE,
  CompositionEventInit: n.TYPE,
  ComputedEffectTiming: n.TYPE,
  ComputedKeyframe: n.TYPE,
  ConstantSourceOptions: n.TYPE,
  ConstrainBooleanParameters: n.TYPE,
  ConstrainDOMStringParameters: n.TYPE,
  ConstrainDoubleRange: n.TYPE,
  ConstrainULongRange: n.TYPE,
  ConvolverOptions: n.TYPE,
  CredentialCreationOptions: n.TYPE,
  CredentialPropertiesOutput: n.TYPE,
  CredentialRequestOptions: n.TYPE,
  CryptoKeyPair: n.TYPE,
  CustomEventInit: n.TYPE,
  DOMMatrix2DInit: n.TYPE,
  DOMMatrixInit: n.TYPE,
  DOMPointInit: n.TYPE,
  DOMQuadInit: n.TYPE,
  DOMRectInit: n.TYPE,
  DelayOptions: n.TYPE,
  DeviceMotionEventAccelerationInit: n.TYPE,
  DeviceMotionEventInit: n.TYPE,
  DeviceMotionEventRotationRateInit: n.TYPE,
  DeviceOrientationEventInit: n.TYPE,
  DisplayMediaStreamOptions: n.TYPE,
  DocumentTimelineOptions: n.TYPE,
  DoubleRange: n.TYPE,
  DragEventInit: n.TYPE,
  DynamicsCompressorOptions: n.TYPE,
  EcKeyAlgorithm: n.TYPE,
  EcKeyGenParams: n.TYPE,
  EcKeyImportParams: n.TYPE,
  EcdhKeyDeriveParams: n.TYPE,
  EcdsaParams: n.TYPE,
  EffectTiming: n.TYPE,
  ElementCreationOptions: n.TYPE,
  ElementDefinitionOptions: n.TYPE,
  ErrorEventInit: n.TYPE,
  EventInit: n.TYPE,
  EventListenerOptions: n.TYPE,
  EventModifierInit: n.TYPE,
  EventSourceInit: n.TYPE,
  FilePropertyBag: n.TYPE,
  FileSystemFlags: n.TYPE,
  FileSystemGetDirectoryOptions: n.TYPE,
  FileSystemGetFileOptions: n.TYPE,
  FileSystemRemoveOptions: n.TYPE,
  FocusEventInit: n.TYPE,
  FocusOptions: n.TYPE,
  FontFaceDescriptors: n.TYPE,
  FontFaceSetLoadEventInit: n.TYPE,
  FormDataEventInit: n.TYPE,
  FullscreenOptions: n.TYPE,
  GainOptions: n.TYPE,
  GamepadEventInit: n.TYPE,
  GetAnimationsOptions: n.TYPE,
  GetNotificationOptions: n.TYPE,
  GetRootNodeOptions: n.TYPE,
  HashChangeEventInit: n.TYPE,
  HkdfParams: n.TYPE,
  HmacImportParams: n.TYPE,
  HmacKeyAlgorithm: n.TYPE,
  HmacKeyGenParams: n.TYPE,
  IDBDatabaseInfo: n.TYPE,
  IDBIndexParameters: n.TYPE,
  IDBObjectStoreParameters: n.TYPE,
  IDBTransactionOptions: n.TYPE,
  IDBVersionChangeEventInit: n.TYPE,
  IIRFilterOptions: n.TYPE,
  IdleRequestOptions: n.TYPE,
  ImageBitmapOptions: n.TYPE,
  ImageBitmapRenderingContextSettings: n.TYPE,
  ImageDataSettings: n.TYPE,
  ImportMeta: n.TYPE,
  InputEventInit: n.TYPE,
  IntersectionObserverEntryInit: n.TYPE,
  IntersectionObserverInit: n.TYPE,
  JsonWebKey: n.TYPE,
  KeyAlgorithm: n.TYPE,
  KeyboardEventInit: n.TYPE,
  Keyframe: n.TYPE,
  KeyframeAnimationOptions: n.TYPE,
  KeyframeEffectOptions: n.TYPE,
  LockInfo: n.TYPE,
  LockManagerSnapshot: n.TYPE,
  LockOptions: n.TYPE,
  MediaCapabilitiesDecodingInfo: n.TYPE,
  MediaCapabilitiesEncodingInfo: n.TYPE,
  MediaCapabilitiesInfo: n.TYPE,
  MediaConfiguration: n.TYPE,
  MediaDecodingConfiguration: n.TYPE,
  MediaElementAudioSourceOptions: n.TYPE,
  MediaEncodingConfiguration: n.TYPE,
  MediaEncryptedEventInit: n.TYPE,
  MediaImage: n.TYPE,
  MediaKeyMessageEventInit: n.TYPE,
  MediaKeySystemConfiguration: n.TYPE,
  MediaKeySystemMediaCapability: n.TYPE,
  MediaMetadataInit: n.TYPE,
  MediaPositionState: n.TYPE,
  MediaQueryListEventInit: n.TYPE,
  MediaRecorderOptions: n.TYPE,
  MediaSessionActionDetails: n.TYPE,
  MediaStreamAudioSourceOptions: n.TYPE,
  MediaStreamConstraints: n.TYPE,
  MediaStreamTrackEventInit: n.TYPE,
  MediaTrackCapabilities: n.TYPE,
  MediaTrackConstraintSet: n.TYPE,
  MediaTrackConstraints: n.TYPE,
  MediaTrackSettings: n.TYPE,
  MediaTrackSupportedConstraints: n.TYPE,
  MessageEventInit: n.TYPE,
  MouseEventInit: n.TYPE,
  MultiCacheQueryOptions: n.TYPE,
  MutationObserverInit: n.TYPE,
  NavigationPreloadState: n.TYPE,
  NotificationAction: n.TYPE,
  NotificationOptions: n.TYPE,
  OfflineAudioCompletionEventInit: n.TYPE,
  OfflineAudioContextOptions: n.TYPE,
  OptionalEffectTiming: n.TYPE,
  OscillatorOptions: n.TYPE,
  PageTransitionEventInit: n.TYPE,
  PannerOptions: n.TYPE,
  PaymentCurrencyAmount: n.TYPE,
  PaymentDetailsBase: n.TYPE,
  PaymentDetailsInit: n.TYPE,
  PaymentDetailsModifier: n.TYPE,
  PaymentDetailsUpdate: n.TYPE,
  PaymentItem: n.TYPE,
  PaymentMethodChangeEventInit: n.TYPE,
  PaymentMethodData: n.TYPE,
  PaymentRequestUpdateEventInit: n.TYPE,
  PaymentValidationErrors: n.TYPE,
  Pbkdf2Params: n.TYPE,
  PerformanceMarkOptions: n.TYPE,
  PerformanceMeasureOptions: n.TYPE,
  PerformanceObserverInit: n.TYPE,
  PeriodicWaveConstraints: n.TYPE,
  PeriodicWaveOptions: n.TYPE,
  PermissionDescriptor: n.TYPE,
  PictureInPictureEventInit: n.TYPE,
  PointerEventInit: n.TYPE,
  PopStateEventInit: n.TYPE,
  PositionOptions: n.TYPE,
  ProgressEventInit: n.TYPE,
  PromiseRejectionEventInit: n.TYPE,
  PropertyIndexedKeyframes: n.TYPE,
  PublicKeyCredentialCreationOptions: n.TYPE,
  PublicKeyCredentialDescriptor: n.TYPE,
  PublicKeyCredentialEntity: n.TYPE,
  PublicKeyCredentialParameters: n.TYPE,
  PublicKeyCredentialRequestOptions: n.TYPE,
  PublicKeyCredentialRpEntity: n.TYPE,
  PublicKeyCredentialUserEntity: n.TYPE,
  PushSubscriptionJSON: n.TYPE,
  PushSubscriptionOptionsInit: n.TYPE,
  QueuingStrategy: n.TYPE,
  QueuingStrategyInit: n.TYPE,
  RTCAnswerOptions: n.TYPE,
  RTCCertificateExpiration: n.TYPE,
  RTCConfiguration: n.TYPE,
  RTCDTMFToneChangeEventInit: n.TYPE,
  RTCDataChannelEventInit: n.TYPE,
  RTCDataChannelInit: n.TYPE,
  RTCDtlsFingerprint: n.TYPE,
  RTCEncodedAudioFrameMetadata: n.TYPE,
  RTCEncodedVideoFrameMetadata: n.TYPE,
  RTCErrorEventInit: n.TYPE,
  RTCErrorInit: n.TYPE,
  RTCIceCandidateInit: n.TYPE,
  RTCIceCandidatePairStats: n.TYPE,
  RTCIceServer: n.TYPE,
  RTCInboundRtpStreamStats: n.TYPE,
  RTCLocalSessionDescriptionInit: n.TYPE,
  RTCOfferAnswerOptions: n.TYPE,
  RTCOfferOptions: n.TYPE,
  RTCOutboundRtpStreamStats: n.TYPE,
  RTCPeerConnectionIceErrorEventInit: n.TYPE,
  RTCPeerConnectionIceEventInit: n.TYPE,
  RTCReceivedRtpStreamStats: n.TYPE,
  RTCRtcpParameters: n.TYPE,
  RTCRtpCapabilities: n.TYPE,
  RTCRtpCodecCapability: n.TYPE,
  RTCRtpCodecParameters: n.TYPE,
  RTCRtpCodingParameters: n.TYPE,
  RTCRtpContributingSource: n.TYPE,
  RTCRtpEncodingParameters: n.TYPE,
  RTCRtpHeaderExtensionCapability: n.TYPE,
  RTCRtpHeaderExtensionParameters: n.TYPE,
  RTCRtpParameters: n.TYPE,
  RTCRtpReceiveParameters: n.TYPE,
  RTCRtpSendParameters: n.TYPE,
  RTCRtpStreamStats: n.TYPE,
  RTCRtpSynchronizationSource: n.TYPE,
  RTCRtpTransceiverInit: n.TYPE,
  RTCSentRtpStreamStats: n.TYPE,
  RTCSessionDescriptionInit: n.TYPE,
  RTCStats: n.TYPE,
  RTCTrackEventInit: n.TYPE,
  RTCTransportStats: n.TYPE,
  ReadableStreamGetReaderOptions: n.TYPE,
  ReadableStreamReadDoneResult: n.TYPE,
  ReadableStreamReadValueResult: n.TYPE,
  ReadableWritablePair: n.TYPE,
  RegistrationOptions: n.TYPE,
  RequestInit: n.TYPE,
  ResizeObserverOptions: n.TYPE,
  ResponseInit: n.TYPE,
  RsaHashedImportParams: n.TYPE,
  RsaHashedKeyAlgorithm: n.TYPE,
  RsaHashedKeyGenParams: n.TYPE,
  RsaKeyAlgorithm: n.TYPE,
  RsaKeyGenParams: n.TYPE,
  RsaOaepParams: n.TYPE,
  RsaOtherPrimesInfo: n.TYPE,
  RsaPssParams: n.TYPE,
  SVGBoundingBoxOptions: n.TYPE,
  ScrollIntoViewOptions: n.TYPE,
  ScrollOptions: n.TYPE,
  ScrollToOptions: n.TYPE,
  SecurityPolicyViolationEventInit: n.TYPE,
  ShadowRootInit: n.TYPE,
  ShareData: n.TYPE,
  SpeechSynthesisErrorEventInit: n.TYPE,
  SpeechSynthesisEventInit: n.TYPE,
  StaticRangeInit: n.TYPE,
  StereoPannerOptions: n.TYPE,
  StorageEstimate: n.TYPE,
  StorageEventInit: n.TYPE,
  StreamPipeOptions: n.TYPE,
  StructuredSerializeOptions: n.TYPE,
  SubmitEventInit: n.TYPE,
  TextDecodeOptions: n.TYPE,
  TextDecoderOptions: n.TYPE,
  TextEncoderEncodeIntoResult: n.TYPE,
  TouchEventInit: n.TYPE,
  TouchInit: n.TYPE,
  TrackEventInit: n.TYPE,
  Transformer: n.TYPE,
  TransitionEventInit: n.TYPE,
  UIEventInit: n.TYPE,
  ULongRange: n.TYPE,
  UnderlyingByteSource: n.TYPE,
  UnderlyingDefaultSource: n.TYPE,
  UnderlyingSink: n.TYPE,
  UnderlyingSource: n.TYPE,
  ValidityStateFlags: n.TYPE,
  VideoColorSpaceInit: n.TYPE,
  VideoConfiguration: n.TYPE,
  VideoFrameCallbackMetadata: n.TYPE,
  WaveShaperOptions: n.TYPE,
  WebGLContextAttributes: n.TYPE,
  WebGLContextEventInit: n.TYPE,
  WheelEventInit: n.TYPE,
  WindowPostMessageOptions: n.TYPE,
  WorkerOptions: n.TYPE,
  WorkletOptions: n.TYPE,
  NodeFilter: n.TYPE_VALUE,
  XPathNSResolver: n.TYPE,
  ANGLE_instanced_arrays: n.TYPE,
  ARIAMixin: n.TYPE,
  AbortController: n.TYPE_VALUE,
  AbortSignalEventMap: n.TYPE,
  AbortSignal: n.TYPE_VALUE,
  AbstractRange: n.TYPE_VALUE,
  AbstractWorkerEventMap: n.TYPE,
  AbstractWorker: n.TYPE,
  AnalyserNode: n.TYPE_VALUE,
  Animatable: n.TYPE,
  AnimationEventMap: n.TYPE,
  Animation: n.TYPE_VALUE,
  AnimationEffect: n.TYPE_VALUE,
  AnimationEvent: n.TYPE_VALUE,
  AnimationFrameProvider: n.TYPE,
  AnimationPlaybackEvent: n.TYPE_VALUE,
  AnimationTimeline: n.TYPE_VALUE,
  Attr: n.TYPE_VALUE,
  AudioBuffer: n.TYPE_VALUE,
  AudioBufferSourceNode: n.TYPE_VALUE,
  AudioContext: n.TYPE_VALUE,
  AudioDestinationNode: n.TYPE_VALUE,
  AudioListener: n.TYPE_VALUE,
  AudioNode: n.TYPE_VALUE,
  AudioParam: n.TYPE_VALUE,
  AudioParamMap: n.TYPE_VALUE,
  AudioProcessingEvent: n.TYPE_VALUE,
  AudioScheduledSourceNodeEventMap: n.TYPE,
  AudioScheduledSourceNode: n.TYPE_VALUE,
  AudioWorklet: n.TYPE_VALUE,
  AudioWorkletNodeEventMap: n.TYPE,
  AudioWorkletNode: n.TYPE_VALUE,
  AuthenticatorAssertionResponse: n.TYPE_VALUE,
  AuthenticatorAttestationResponse: n.TYPE_VALUE,
  AuthenticatorResponse: n.TYPE_VALUE,
  BarProp: n.TYPE_VALUE,
  BaseAudioContextEventMap: n.TYPE,
  BaseAudioContext: n.TYPE_VALUE,
  BeforeUnloadEvent: n.TYPE_VALUE,
  BiquadFilterNode: n.TYPE_VALUE,
  Blob: n.TYPE_VALUE,
  BlobEvent: n.TYPE_VALUE,
  Body: n.TYPE,
  BroadcastChannelEventMap: n.TYPE,
  BroadcastChannel: n.TYPE_VALUE,
  ByteLengthQueuingStrategy: n.TYPE_VALUE,
  CDATASection: n.TYPE_VALUE,
  CSSAnimation: n.TYPE_VALUE,
  CSSConditionRule: n.TYPE_VALUE,
  CSSContainerRule: n.TYPE_VALUE,
  CSSCounterStyleRule: n.TYPE_VALUE,
  CSSFontFaceRule: n.TYPE_VALUE,
  CSSFontPaletteValuesRule: n.TYPE_VALUE,
  CSSGroupingRule: n.TYPE_VALUE,
  CSSImportRule: n.TYPE_VALUE,
  CSSKeyframeRule: n.TYPE_VALUE,
  CSSKeyframesRule: n.TYPE_VALUE,
  CSSLayerBlockRule: n.TYPE_VALUE,
  CSSLayerStatementRule: n.TYPE_VALUE,
  CSSMediaRule: n.TYPE_VALUE,
  CSSNamespaceRule: n.TYPE_VALUE,
  CSSPageRule: n.TYPE_VALUE,
  CSSRule: n.TYPE_VALUE,
  CSSRuleList: n.TYPE_VALUE,
  CSSStyleDeclaration: n.TYPE_VALUE,
  CSSStyleRule: n.TYPE_VALUE,
  CSSStyleSheet: n.TYPE_VALUE,
  CSSSupportsRule: n.TYPE_VALUE,
  CSSTransition: n.TYPE_VALUE,
  Cache: n.TYPE_VALUE,
  CacheStorage: n.TYPE_VALUE,
  CanvasCaptureMediaStreamTrack: n.TYPE_VALUE,
  CanvasCompositing: n.TYPE,
  CanvasDrawImage: n.TYPE,
  CanvasDrawPath: n.TYPE,
  CanvasFillStrokeStyles: n.TYPE,
  CanvasFilters: n.TYPE,
  CanvasGradient: n.TYPE_VALUE,
  CanvasImageData: n.TYPE,
  CanvasImageSmoothing: n.TYPE,
  CanvasPath: n.TYPE,
  CanvasPathDrawingStyles: n.TYPE,
  CanvasPattern: n.TYPE_VALUE,
  CanvasRect: n.TYPE,
  CanvasRenderingContext2D: n.TYPE_VALUE,
  CanvasShadowStyles: n.TYPE,
  CanvasState: n.TYPE,
  CanvasText: n.TYPE,
  CanvasTextDrawingStyles: n.TYPE,
  CanvasTransform: n.TYPE,
  CanvasUserInterface: n.TYPE,
  ChannelMergerNode: n.TYPE_VALUE,
  ChannelSplitterNode: n.TYPE_VALUE,
  CharacterData: n.TYPE_VALUE,
  ChildNode: n.TYPE,
  ClientRect: n.TYPE,
  Clipboard: n.TYPE_VALUE,
  ClipboardEvent: n.TYPE_VALUE,
  ClipboardItem: n.TYPE_VALUE,
  CloseEvent: n.TYPE_VALUE,
  Comment: n.TYPE_VALUE,
  CompositionEvent: n.TYPE_VALUE,
  ConstantSourceNode: n.TYPE_VALUE,
  ConvolverNode: n.TYPE_VALUE,
  CountQueuingStrategy: n.TYPE_VALUE,
  Credential: n.TYPE_VALUE,
  CredentialsContainer: n.TYPE_VALUE,
  Crypto: n.TYPE_VALUE,
  CryptoKey: n.TYPE_VALUE,
  CustomElementRegistry: n.TYPE_VALUE,
  CustomEvent: n.TYPE_VALUE,
  DOMException: n.TYPE_VALUE,
  DOMImplementation: n.TYPE_VALUE,
  DOMMatrix: n.TYPE_VALUE,
  SVGMatrix: n.TYPE_VALUE,
  WebKitCSSMatrix: n.TYPE_VALUE,
  DOMMatrixReadOnly: n.TYPE_VALUE,
  DOMParser: n.TYPE_VALUE,
  DOMPoint: n.TYPE_VALUE,
  SVGPoint: n.TYPE_VALUE,
  DOMPointReadOnly: n.TYPE_VALUE,
  DOMQuad: n.TYPE_VALUE,
  DOMRect: n.TYPE_VALUE,
  SVGRect: n.TYPE_VALUE,
  DOMRectList: n.TYPE_VALUE,
  DOMRectReadOnly: n.TYPE_VALUE,
  DOMStringList: n.TYPE_VALUE,
  DOMStringMap: n.TYPE_VALUE,
  DOMTokenList: n.TYPE_VALUE,
  DataTransfer: n.TYPE_VALUE,
  DataTransferItem: n.TYPE_VALUE,
  DataTransferItemList: n.TYPE_VALUE,
  DelayNode: n.TYPE_VALUE,
  DeviceMotionEvent: n.TYPE_VALUE,
  DeviceMotionEventAcceleration: n.TYPE,
  DeviceMotionEventRotationRate: n.TYPE,
  DeviceOrientationEvent: n.TYPE_VALUE,
  DocumentEventMap: n.TYPE,
  Document: n.TYPE_VALUE,
  DocumentAndElementEventHandlersEventMap: n.TYPE,
  DocumentAndElementEventHandlers: n.TYPE,
  DocumentFragment: n.TYPE_VALUE,
  DocumentOrShadowRoot: n.TYPE,
  DocumentTimeline: n.TYPE_VALUE,
  DocumentType: n.TYPE_VALUE,
  DragEvent: n.TYPE_VALUE,
  DynamicsCompressorNode: n.TYPE_VALUE,
  EXT_blend_minmax: n.TYPE,
  EXT_color_buffer_float: n.TYPE,
  EXT_color_buffer_half_float: n.TYPE,
  EXT_float_blend: n.TYPE,
  EXT_frag_depth: n.TYPE,
  EXT_sRGB: n.TYPE,
  EXT_shader_texture_lod: n.TYPE,
  EXT_texture_compression_bptc: n.TYPE,
  EXT_texture_compression_rgtc: n.TYPE,
  EXT_texture_filter_anisotropic: n.TYPE,
  EXT_texture_norm16: n.TYPE,
  ElementEventMap: n.TYPE,
  Element: n.TYPE_VALUE,
  ElementCSSInlineStyle: n.TYPE,
  ElementContentEditable: n.TYPE,
  ElementInternals: n.TYPE_VALUE,
  ErrorEvent: n.TYPE_VALUE,
  Event: n.TYPE_VALUE,
  EventCounts: n.TYPE_VALUE,
  EventListener: n.TYPE,
  EventListenerObject: n.TYPE,
  EventSourceEventMap: n.TYPE,
  EventSource: n.TYPE_VALUE,
  EventTarget: n.TYPE_VALUE,
  External: n.TYPE_VALUE,
  File: n.TYPE_VALUE,
  FileList: n.TYPE_VALUE,
  FileReaderEventMap: n.TYPE,
  FileReader: n.TYPE_VALUE,
  FileSystem: n.TYPE_VALUE,
  FileSystemDirectoryEntry: n.TYPE_VALUE,
  FileSystemDirectoryHandle: n.TYPE_VALUE,
  FileSystemDirectoryReader: n.TYPE_VALUE,
  FileSystemEntry: n.TYPE_VALUE,
  FileSystemFileEntry: n.TYPE_VALUE,
  FileSystemFileHandle: n.TYPE_VALUE,
  FileSystemHandle: n.TYPE_VALUE,
  FocusEvent: n.TYPE_VALUE,
  FontFace: n.TYPE_VALUE,
  FontFaceSetEventMap: n.TYPE,
  FontFaceSet: n.TYPE_VALUE,
  FontFaceSetLoadEvent: n.TYPE_VALUE,
  FontFaceSource: n.TYPE,
  FormData: n.TYPE_VALUE,
  FormDataEvent: n.TYPE_VALUE,
  GainNode: n.TYPE_VALUE,
  Gamepad: n.TYPE_VALUE,
  GamepadButton: n.TYPE_VALUE,
  GamepadEvent: n.TYPE_VALUE,
  GamepadHapticActuator: n.TYPE_VALUE,
  GenericTransformStream: n.TYPE,
  Geolocation: n.TYPE_VALUE,
  GeolocationCoordinates: n.TYPE_VALUE,
  GeolocationPosition: n.TYPE_VALUE,
  GeolocationPositionError: n.TYPE_VALUE,
  GlobalEventHandlersEventMap: n.TYPE,
  GlobalEventHandlers: n.TYPE,
  HTMLAllCollection: n.TYPE_VALUE,
  HTMLAnchorElement: n.TYPE_VALUE,
  HTMLAreaElement: n.TYPE_VALUE,
  HTMLAudioElement: n.TYPE_VALUE,
  HTMLBRElement: n.TYPE_VALUE,
  HTMLBaseElement: n.TYPE_VALUE,
  HTMLBodyElementEventMap: n.TYPE,
  HTMLBodyElement: n.TYPE_VALUE,
  HTMLButtonElement: n.TYPE_VALUE,
  HTMLCanvasElement: n.TYPE_VALUE,
  HTMLCollectionBase: n.TYPE,
  HTMLCollection: n.TYPE_VALUE,
  HTMLCollectionOf: n.TYPE,
  HTMLDListElement: n.TYPE_VALUE,
  HTMLDataElement: n.TYPE_VALUE,
  HTMLDataListElement: n.TYPE_VALUE,
  HTMLDetailsElement: n.TYPE_VALUE,
  HTMLDialogElement: n.TYPE_VALUE,
  HTMLDirectoryElement: n.TYPE_VALUE,
  HTMLDivElement: n.TYPE_VALUE,
  HTMLDocument: n.TYPE_VALUE,
  HTMLElementEventMap: n.TYPE,
  HTMLElement: n.TYPE_VALUE,
  HTMLEmbedElement: n.TYPE_VALUE,
  HTMLFieldSetElement: n.TYPE_VALUE,
  HTMLFontElement: n.TYPE_VALUE,
  HTMLFormControlsCollection: n.TYPE_VALUE,
  HTMLFormElement: n.TYPE_VALUE,
  HTMLFrameElement: n.TYPE_VALUE,
  HTMLFrameSetElementEventMap: n.TYPE,
  HTMLFrameSetElement: n.TYPE_VALUE,
  HTMLHRElement: n.TYPE_VALUE,
  HTMLHeadElement: n.TYPE_VALUE,
  HTMLHeadingElement: n.TYPE_VALUE,
  HTMLHtmlElement: n.TYPE_VALUE,
  HTMLHyperlinkElementUtils: n.TYPE,
  HTMLIFrameElement: n.TYPE_VALUE,
  HTMLImageElement: n.TYPE_VALUE,
  HTMLInputElement: n.TYPE_VALUE,
  HTMLLIElement: n.TYPE_VALUE,
  HTMLLabelElement: n.TYPE_VALUE,
  HTMLLegendElement: n.TYPE_VALUE,
  HTMLLinkElement: n.TYPE_VALUE,
  HTMLMapElement: n.TYPE_VALUE,
  HTMLMarqueeElement: n.TYPE_VALUE,
  HTMLMediaElementEventMap: n.TYPE,
  HTMLMediaElement: n.TYPE_VALUE,
  HTMLMenuElement: n.TYPE_VALUE,
  HTMLMetaElement: n.TYPE_VALUE,
  HTMLMeterElement: n.TYPE_VALUE,
  HTMLModElement: n.TYPE_VALUE,
  HTMLOListElement: n.TYPE_VALUE,
  HTMLObjectElement: n.TYPE_VALUE,
  HTMLOptGroupElement: n.TYPE_VALUE,
  HTMLOptionElement: n.TYPE_VALUE,
  HTMLOptionsCollection: n.TYPE_VALUE,
  HTMLOrSVGElement: n.TYPE,
  HTMLOutputElement: n.TYPE_VALUE,
  HTMLParagraphElement: n.TYPE_VALUE,
  HTMLParamElement: n.TYPE_VALUE,
  HTMLPictureElement: n.TYPE_VALUE,
  HTMLPreElement: n.TYPE_VALUE,
  HTMLProgressElement: n.TYPE_VALUE,
  HTMLQuoteElement: n.TYPE_VALUE,
  HTMLScriptElement: n.TYPE_VALUE,
  HTMLSelectElement: n.TYPE_VALUE,
  HTMLSlotElement: n.TYPE_VALUE,
  HTMLSourceElement: n.TYPE_VALUE,
  HTMLSpanElement: n.TYPE_VALUE,
  HTMLStyleElement: n.TYPE_VALUE,
  HTMLTableCaptionElement: n.TYPE_VALUE,
  HTMLTableCellElement: n.TYPE_VALUE,
  HTMLTableColElement: n.TYPE_VALUE,
  HTMLTableDataCellElement: n.TYPE,
  HTMLTableElement: n.TYPE_VALUE,
  HTMLTableHeaderCellElement: n.TYPE,
  HTMLTableRowElement: n.TYPE_VALUE,
  HTMLTableSectionElement: n.TYPE_VALUE,
  HTMLTemplateElement: n.TYPE_VALUE,
  HTMLTextAreaElement: n.TYPE_VALUE,
  HTMLTimeElement: n.TYPE_VALUE,
  HTMLTitleElement: n.TYPE_VALUE,
  HTMLTrackElement: n.TYPE_VALUE,
  HTMLUListElement: n.TYPE_VALUE,
  HTMLUnknownElement: n.TYPE_VALUE,
  HTMLVideoElementEventMap: n.TYPE,
  HTMLVideoElement: n.TYPE_VALUE,
  HashChangeEvent: n.TYPE_VALUE,
  Headers: n.TYPE_VALUE,
  History: n.TYPE_VALUE,
  IDBCursor: n.TYPE_VALUE,
  IDBCursorWithValue: n.TYPE_VALUE,
  IDBDatabaseEventMap: n.TYPE,
  IDBDatabase: n.TYPE_VALUE,
  IDBFactory: n.TYPE_VALUE,
  IDBIndex: n.TYPE_VALUE,
  IDBKeyRange: n.TYPE_VALUE,
  IDBObjectStore: n.TYPE_VALUE,
  IDBOpenDBRequestEventMap: n.TYPE,
  IDBOpenDBRequest: n.TYPE_VALUE,
  IDBRequestEventMap: n.TYPE,
  IDBRequest: n.TYPE_VALUE,
  IDBTransactionEventMap: n.TYPE,
  IDBTransaction: n.TYPE_VALUE,
  IDBVersionChangeEvent: n.TYPE_VALUE,
  IIRFilterNode: n.TYPE_VALUE,
  IdleDeadline: n.TYPE_VALUE,
  ImageBitmap: n.TYPE_VALUE,
  ImageBitmapRenderingContext: n.TYPE_VALUE,
  ImageData: n.TYPE_VALUE,
  InnerHTML: n.TYPE,
  InputDeviceInfo: n.TYPE_VALUE,
  InputEvent: n.TYPE_VALUE,
  IntersectionObserver: n.TYPE_VALUE,
  IntersectionObserverEntry: n.TYPE_VALUE,
  KHR_parallel_shader_compile: n.TYPE,
  KeyboardEvent: n.TYPE_VALUE,
  KeyframeEffect: n.TYPE_VALUE,
  LinkStyle: n.TYPE,
  Location: n.TYPE_VALUE,
  Lock: n.TYPE_VALUE,
  LockManager: n.TYPE_VALUE,
  MathMLElementEventMap: n.TYPE,
  MathMLElement: n.TYPE_VALUE,
  MediaCapabilities: n.TYPE_VALUE,
  MediaDeviceInfo: n.TYPE_VALUE,
  MediaDevicesEventMap: n.TYPE,
  MediaDevices: n.TYPE_VALUE,
  MediaElementAudioSourceNode: n.TYPE_VALUE,
  MediaEncryptedEvent: n.TYPE_VALUE,
  MediaError: n.TYPE_VALUE,
  MediaKeyMessageEvent: n.TYPE_VALUE,
  MediaKeySessionEventMap: n.TYPE,
  MediaKeySession: n.TYPE_VALUE,
  MediaKeyStatusMap: n.TYPE_VALUE,
  MediaKeySystemAccess: n.TYPE_VALUE,
  MediaKeys: n.TYPE_VALUE,
  MediaList: n.TYPE_VALUE,
  MediaMetadata: n.TYPE_VALUE,
  MediaQueryListEventMap: n.TYPE,
  MediaQueryList: n.TYPE_VALUE,
  MediaQueryListEvent: n.TYPE_VALUE,
  MediaRecorderEventMap: n.TYPE,
  MediaRecorder: n.TYPE_VALUE,
  MediaSession: n.TYPE_VALUE,
  MediaSourceEventMap: n.TYPE,
  MediaSource: n.TYPE_VALUE,
  MediaStreamEventMap: n.TYPE,
  MediaStream: n.TYPE_VALUE,
  MediaStreamAudioDestinationNode: n.TYPE_VALUE,
  MediaStreamAudioSourceNode: n.TYPE_VALUE,
  MediaStreamTrackEventMap: n.TYPE,
  MediaStreamTrack: n.TYPE_VALUE,
  MediaStreamTrackEvent: n.TYPE_VALUE,
  MessageChannel: n.TYPE_VALUE,
  MessageEvent: n.TYPE_VALUE,
  MessagePortEventMap: n.TYPE,
  MessagePort: n.TYPE_VALUE,
  MimeType: n.TYPE_VALUE,
  MimeTypeArray: n.TYPE_VALUE,
  MouseEvent: n.TYPE_VALUE,
  MutationEvent: n.TYPE_VALUE,
  MutationObserver: n.TYPE_VALUE,
  MutationRecord: n.TYPE_VALUE,
  NamedNodeMap: n.TYPE_VALUE,
  NavigationPreloadManager: n.TYPE_VALUE,
  Navigator: n.TYPE_VALUE,
  NavigatorAutomationInformation: n.TYPE,
  NavigatorConcurrentHardware: n.TYPE,
  NavigatorContentUtils: n.TYPE,
  NavigatorCookies: n.TYPE,
  NavigatorID: n.TYPE,
  NavigatorLanguage: n.TYPE,
  NavigatorLocks: n.TYPE,
  NavigatorOnLine: n.TYPE,
  NavigatorPlugins: n.TYPE,
  NavigatorStorage: n.TYPE,
  Node: n.TYPE_VALUE,
  NodeIterator: n.TYPE_VALUE,
  NodeList: n.TYPE_VALUE,
  NodeListOf: n.TYPE,
  NonDocumentTypeChildNode: n.TYPE,
  NonElementParentNode: n.TYPE,
  NotificationEventMap: n.TYPE,
  Notification: n.TYPE_VALUE,
  OES_draw_buffers_indexed: n.TYPE,
  OES_element_index_uint: n.TYPE,
  OES_fbo_render_mipmap: n.TYPE,
  OES_standard_derivatives: n.TYPE,
  OES_texture_float: n.TYPE,
  OES_texture_float_linear: n.TYPE,
  OES_texture_half_float: n.TYPE,
  OES_texture_half_float_linear: n.TYPE,
  OES_vertex_array_object: n.TYPE,
  OVR_multiview2: n.TYPE,
  OfflineAudioCompletionEvent: n.TYPE_VALUE,
  OfflineAudioContextEventMap: n.TYPE,
  OfflineAudioContext: n.TYPE_VALUE,
  OffscreenCanvasEventMap: n.TYPE,
  OffscreenCanvas: n.TYPE_VALUE,
  OffscreenCanvasRenderingContext2D: n.TYPE_VALUE,
  OscillatorNode: n.TYPE_VALUE,
  OverconstrainedError: n.TYPE_VALUE,
  PageTransitionEvent: n.TYPE_VALUE,
  PannerNode: n.TYPE_VALUE,
  ParentNode: n.TYPE,
  Path2D: n.TYPE_VALUE,
  PaymentMethodChangeEvent: n.TYPE_VALUE,
  PaymentRequestEventMap: n.TYPE,
  PaymentRequest: n.TYPE_VALUE,
  PaymentRequestUpdateEvent: n.TYPE_VALUE,
  PaymentResponse: n.TYPE_VALUE,
  PerformanceEventMap: n.TYPE,
  Performance: n.TYPE_VALUE,
  PerformanceEntry: n.TYPE_VALUE,
  PerformanceEventTiming: n.TYPE_VALUE,
  PerformanceMark: n.TYPE_VALUE,
  PerformanceMeasure: n.TYPE_VALUE,
  PerformanceNavigation: n.TYPE_VALUE,
  PerformanceNavigationTiming: n.TYPE_VALUE,
  PerformanceObserver: n.TYPE_VALUE,
  PerformanceObserverEntryList: n.TYPE_VALUE,
  PerformancePaintTiming: n.TYPE_VALUE,
  PerformanceResourceTiming: n.TYPE_VALUE,
  PerformanceServerTiming: n.TYPE_VALUE,
  PerformanceTiming: n.TYPE_VALUE,
  PeriodicWave: n.TYPE_VALUE,
  PermissionStatusEventMap: n.TYPE,
  PermissionStatus: n.TYPE_VALUE,
  Permissions: n.TYPE_VALUE,
  PictureInPictureEvent: n.TYPE_VALUE,
  PictureInPictureWindowEventMap: n.TYPE,
  PictureInPictureWindow: n.TYPE_VALUE,
  Plugin: n.TYPE_VALUE,
  PluginArray: n.TYPE_VALUE,
  PointerEvent: n.TYPE_VALUE,
  PopStateEvent: n.TYPE_VALUE,
  ProcessingInstruction: n.TYPE_VALUE,
  ProgressEvent: n.TYPE_VALUE,
  PromiseRejectionEvent: n.TYPE_VALUE,
  PublicKeyCredential: n.TYPE_VALUE,
  PushManager: n.TYPE_VALUE,
  PushSubscription: n.TYPE_VALUE,
  PushSubscriptionOptions: n.TYPE_VALUE,
  RTCCertificate: n.TYPE_VALUE,
  RTCDTMFSenderEventMap: n.TYPE,
  RTCDTMFSender: n.TYPE_VALUE,
  RTCDTMFToneChangeEvent: n.TYPE_VALUE,
  RTCDataChannelEventMap: n.TYPE,
  RTCDataChannel: n.TYPE_VALUE,
  RTCDataChannelEvent: n.TYPE_VALUE,
  RTCDtlsTransportEventMap: n.TYPE,
  RTCDtlsTransport: n.TYPE_VALUE,
  RTCEncodedAudioFrame: n.TYPE_VALUE,
  RTCEncodedVideoFrame: n.TYPE_VALUE,
  RTCError: n.TYPE_VALUE,
  RTCErrorEvent: n.TYPE_VALUE,
  RTCIceCandidate: n.TYPE_VALUE,
  RTCIceTransportEventMap: n.TYPE,
  RTCIceTransport: n.TYPE_VALUE,
  RTCPeerConnectionEventMap: n.TYPE,
  RTCPeerConnection: n.TYPE_VALUE,
  RTCPeerConnectionIceErrorEvent: n.TYPE_VALUE,
  RTCPeerConnectionIceEvent: n.TYPE_VALUE,
  RTCRtpReceiver: n.TYPE_VALUE,
  RTCRtpSender: n.TYPE_VALUE,
  RTCRtpTransceiver: n.TYPE_VALUE,
  RTCSctpTransportEventMap: n.TYPE,
  RTCSctpTransport: n.TYPE_VALUE,
  RTCSessionDescription: n.TYPE_VALUE,
  RTCStatsReport: n.TYPE_VALUE,
  RTCTrackEvent: n.TYPE_VALUE,
  RadioNodeList: n.TYPE_VALUE,
  Range: n.TYPE_VALUE,
  ReadableByteStreamController: n.TYPE_VALUE,
  ReadableStream: n.TYPE_VALUE,
  ReadableStreamBYOBReader: n.TYPE_VALUE,
  ReadableStreamBYOBRequest: n.TYPE_VALUE,
  ReadableStreamDefaultController: n.TYPE_VALUE,
  ReadableStreamDefaultReader: n.TYPE_VALUE,
  ReadableStreamGenericReader: n.TYPE,
  RemotePlaybackEventMap: n.TYPE,
  RemotePlayback: n.TYPE_VALUE,
  Request: n.TYPE_VALUE,
  ResizeObserver: n.TYPE_VALUE,
  ResizeObserverEntry: n.TYPE_VALUE,
  ResizeObserverSize: n.TYPE_VALUE,
  Response: n.TYPE_VALUE,
  SVGAElement: n.TYPE_VALUE,
  SVGAngle: n.TYPE_VALUE,
  SVGAnimateElement: n.TYPE_VALUE,
  SVGAnimateMotionElement: n.TYPE_VALUE,
  SVGAnimateTransformElement: n.TYPE_VALUE,
  SVGAnimatedAngle: n.TYPE_VALUE,
  SVGAnimatedBoolean: n.TYPE_VALUE,
  SVGAnimatedEnumeration: n.TYPE_VALUE,
  SVGAnimatedInteger: n.TYPE_VALUE,
  SVGAnimatedLength: n.TYPE_VALUE,
  SVGAnimatedLengthList: n.TYPE_VALUE,
  SVGAnimatedNumber: n.TYPE_VALUE,
  SVGAnimatedNumberList: n.TYPE_VALUE,
  SVGAnimatedPoints: n.TYPE,
  SVGAnimatedPreserveAspectRatio: n.TYPE_VALUE,
  SVGAnimatedRect: n.TYPE_VALUE,
  SVGAnimatedString: n.TYPE_VALUE,
  SVGAnimatedTransformList: n.TYPE_VALUE,
  SVGAnimationElement: n.TYPE_VALUE,
  SVGCircleElement: n.TYPE_VALUE,
  SVGClipPathElement: n.TYPE_VALUE,
  SVGComponentTransferFunctionElement: n.TYPE_VALUE,
  SVGDefsElement: n.TYPE_VALUE,
  SVGDescElement: n.TYPE_VALUE,
  SVGElementEventMap: n.TYPE,
  SVGElement: n.TYPE_VALUE,
  SVGEllipseElement: n.TYPE_VALUE,
  SVGFEBlendElement: n.TYPE_VALUE,
  SVGFEColorMatrixElement: n.TYPE_VALUE,
  SVGFEComponentTransferElement: n.TYPE_VALUE,
  SVGFECompositeElement: n.TYPE_VALUE,
  SVGFEConvolveMatrixElement: n.TYPE_VALUE,
  SVGFEDiffuseLightingElement: n.TYPE_VALUE,
  SVGFEDisplacementMapElement: n.TYPE_VALUE,
  SVGFEDistantLightElement: n.TYPE_VALUE,
  SVGFEDropShadowElement: n.TYPE_VALUE,
  SVGFEFloodElement: n.TYPE_VALUE,
  SVGFEFuncAElement: n.TYPE_VALUE,
  SVGFEFuncBElement: n.TYPE_VALUE,
  SVGFEFuncGElement: n.TYPE_VALUE,
  SVGFEFuncRElement: n.TYPE_VALUE,
  SVGFEGaussianBlurElement: n.TYPE_VALUE,
  SVGFEImageElement: n.TYPE_VALUE,
  SVGFEMergeElement: n.TYPE_VALUE,
  SVGFEMergeNodeElement: n.TYPE_VALUE,
  SVGFEMorphologyElement: n.TYPE_VALUE,
  SVGFEOffsetElement: n.TYPE_VALUE,
  SVGFEPointLightElement: n.TYPE_VALUE,
  SVGFESpecularLightingElement: n.TYPE_VALUE,
  SVGFESpotLightElement: n.TYPE_VALUE,
  SVGFETileElement: n.TYPE_VALUE,
  SVGFETurbulenceElement: n.TYPE_VALUE,
  SVGFilterElement: n.TYPE_VALUE,
  SVGFilterPrimitiveStandardAttributes: n.TYPE,
  SVGFitToViewBox: n.TYPE,
  SVGForeignObjectElement: n.TYPE_VALUE,
  SVGGElement: n.TYPE_VALUE,
  SVGGeometryElement: n.TYPE_VALUE,
  SVGGradientElement: n.TYPE_VALUE,
  SVGGraphicsElement: n.TYPE_VALUE,
  SVGImageElement: n.TYPE_VALUE,
  SVGLength: n.TYPE_VALUE,
  SVGLengthList: n.TYPE_VALUE,
  SVGLineElement: n.TYPE_VALUE,
  SVGLinearGradientElement: n.TYPE_VALUE,
  SVGMPathElement: n.TYPE_VALUE,
  SVGMarkerElement: n.TYPE_VALUE,
  SVGMaskElement: n.TYPE_VALUE,
  SVGMetadataElement: n.TYPE_VALUE,
  SVGNumber: n.TYPE_VALUE,
  SVGNumberList: n.TYPE_VALUE,
  SVGPathElement: n.TYPE_VALUE,
  SVGPatternElement: n.TYPE_VALUE,
  SVGPointList: n.TYPE_VALUE,
  SVGPolygonElement: n.TYPE_VALUE,
  SVGPolylineElement: n.TYPE_VALUE,
  SVGPreserveAspectRatio: n.TYPE_VALUE,
  SVGRadialGradientElement: n.TYPE_VALUE,
  SVGRectElement: n.TYPE_VALUE,
  SVGSVGElementEventMap: n.TYPE,
  SVGSVGElement: n.TYPE_VALUE,
  SVGScriptElement: n.TYPE_VALUE,
  SVGSetElement: n.TYPE_VALUE,
  SVGStopElement: n.TYPE_VALUE,
  SVGStringList: n.TYPE_VALUE,
  SVGStyleElement: n.TYPE_VALUE,
  SVGSwitchElement: n.TYPE_VALUE,
  SVGSymbolElement: n.TYPE_VALUE,
  SVGTSpanElement: n.TYPE_VALUE,
  SVGTests: n.TYPE,
  SVGTextContentElement: n.TYPE_VALUE,
  SVGTextElement: n.TYPE_VALUE,
  SVGTextPathElement: n.TYPE_VALUE,
  SVGTextPositioningElement: n.TYPE_VALUE,
  SVGTitleElement: n.TYPE_VALUE,
  SVGTransform: n.TYPE_VALUE,
  SVGTransformList: n.TYPE_VALUE,
  SVGURIReference: n.TYPE,
  SVGUnitTypes: n.TYPE_VALUE,
  SVGUseElement: n.TYPE_VALUE,
  SVGViewElement: n.TYPE_VALUE,
  Screen: n.TYPE_VALUE,
  ScreenOrientationEventMap: n.TYPE,
  ScreenOrientation: n.TYPE_VALUE,
  ScriptProcessorNodeEventMap: n.TYPE,
  ScriptProcessorNode: n.TYPE_VALUE,
  SecurityPolicyViolationEvent: n.TYPE_VALUE,
  Selection: n.TYPE_VALUE,
  ServiceWorkerEventMap: n.TYPE,
  ServiceWorker: n.TYPE_VALUE,
  ServiceWorkerContainerEventMap: n.TYPE,
  ServiceWorkerContainer: n.TYPE_VALUE,
  ServiceWorkerRegistrationEventMap: n.TYPE,
  ServiceWorkerRegistration: n.TYPE_VALUE,
  ShadowRootEventMap: n.TYPE,
  ShadowRoot: n.TYPE_VALUE,
  SharedWorker: n.TYPE_VALUE,
  Slottable: n.TYPE,
  SourceBufferEventMap: n.TYPE,
  SourceBuffer: n.TYPE_VALUE,
  SourceBufferListEventMap: n.TYPE,
  SourceBufferList: n.TYPE_VALUE,
  SpeechRecognitionAlternative: n.TYPE_VALUE,
  SpeechRecognitionResult: n.TYPE_VALUE,
  SpeechRecognitionResultList: n.TYPE_VALUE,
  SpeechSynthesisEventMap: n.TYPE,
  SpeechSynthesis: n.TYPE_VALUE,
  SpeechSynthesisErrorEvent: n.TYPE_VALUE,
  SpeechSynthesisEvent: n.TYPE_VALUE,
  SpeechSynthesisUtteranceEventMap: n.TYPE,
  SpeechSynthesisUtterance: n.TYPE_VALUE,
  SpeechSynthesisVoice: n.TYPE_VALUE,
  StaticRange: n.TYPE_VALUE,
  StereoPannerNode: n.TYPE_VALUE,
  Storage: n.TYPE_VALUE,
  StorageEvent: n.TYPE_VALUE,
  StorageManager: n.TYPE_VALUE,
  StyleMedia: n.TYPE,
  StyleSheet: n.TYPE_VALUE,
  StyleSheetList: n.TYPE_VALUE,
  SubmitEvent: n.TYPE_VALUE,
  SubtleCrypto: n.TYPE_VALUE,
  Text: n.TYPE_VALUE,
  TextDecoder: n.TYPE_VALUE,
  TextDecoderCommon: n.TYPE,
  TextDecoderStream: n.TYPE_VALUE,
  TextEncoder: n.TYPE_VALUE,
  TextEncoderCommon: n.TYPE,
  TextEncoderStream: n.TYPE_VALUE,
  TextMetrics: n.TYPE_VALUE,
  TextTrackEventMap: n.TYPE,
  TextTrack: n.TYPE_VALUE,
  TextTrackCueEventMap: n.TYPE,
  TextTrackCue: n.TYPE_VALUE,
  TextTrackCueList: n.TYPE_VALUE,
  TextTrackListEventMap: n.TYPE,
  TextTrackList: n.TYPE_VALUE,
  TimeRanges: n.TYPE_VALUE,
  Touch: n.TYPE_VALUE,
  TouchEvent: n.TYPE_VALUE,
  TouchList: n.TYPE_VALUE,
  TrackEvent: n.TYPE_VALUE,
  TransformStream: n.TYPE_VALUE,
  TransformStreamDefaultController: n.TYPE_VALUE,
  TransitionEvent: n.TYPE_VALUE,
  TreeWalker: n.TYPE_VALUE,
  UIEvent: n.TYPE_VALUE,
  URL: n.TYPE_VALUE,
  webkitURL: n.TYPE_VALUE,
  URLSearchParams: n.TYPE_VALUE,
  VTTCue: n.TYPE_VALUE,
  VTTRegion: n.TYPE_VALUE,
  ValidityState: n.TYPE_VALUE,
  VideoColorSpace: n.TYPE_VALUE,
  VideoPlaybackQuality: n.TYPE_VALUE,
  VisualViewportEventMap: n.TYPE,
  VisualViewport: n.TYPE_VALUE,
  WEBGL_color_buffer_float: n.TYPE,
  WEBGL_compressed_texture_astc: n.TYPE,
  WEBGL_compressed_texture_etc: n.TYPE,
  WEBGL_compressed_texture_etc1: n.TYPE,
  WEBGL_compressed_texture_s3tc: n.TYPE,
  WEBGL_compressed_texture_s3tc_srgb: n.TYPE,
  WEBGL_debug_renderer_info: n.TYPE,
  WEBGL_debug_shaders: n.TYPE,
  WEBGL_depth_texture: n.TYPE,
  WEBGL_draw_buffers: n.TYPE,
  WEBGL_lose_context: n.TYPE,
  WEBGL_multi_draw: n.TYPE,
  WaveShaperNode: n.TYPE_VALUE,
  WebGL2RenderingContext: n.TYPE_VALUE,
  WebGL2RenderingContextBase: n.TYPE,
  WebGL2RenderingContextOverloads: n.TYPE,
  WebGLActiveInfo: n.TYPE_VALUE,
  WebGLBuffer: n.TYPE_VALUE,
  WebGLContextEvent: n.TYPE_VALUE,
  WebGLFramebuffer: n.TYPE_VALUE,
  WebGLProgram: n.TYPE_VALUE,
  WebGLQuery: n.TYPE_VALUE,
  WebGLRenderbuffer: n.TYPE_VALUE,
  WebGLRenderingContext: n.TYPE_VALUE,
  WebGLRenderingContextBase: n.TYPE,
  WebGLRenderingContextOverloads: n.TYPE,
  WebGLSampler: n.TYPE_VALUE,
  WebGLShader: n.TYPE_VALUE,
  WebGLShaderPrecisionFormat: n.TYPE_VALUE,
  WebGLSync: n.TYPE_VALUE,
  WebGLTexture: n.TYPE_VALUE,
  WebGLTransformFeedback: n.TYPE_VALUE,
  WebGLUniformLocation: n.TYPE_VALUE,
  WebGLVertexArrayObject: n.TYPE_VALUE,
  WebGLVertexArrayObjectOES: n.TYPE,
  WebSocketEventMap: n.TYPE,
  WebSocket: n.TYPE_VALUE,
  WheelEvent: n.TYPE_VALUE,
  WindowEventMap: n.TYPE,
  Window: n.TYPE_VALUE,
  WindowEventHandlersEventMap: n.TYPE,
  WindowEventHandlers: n.TYPE,
  WindowLocalStorage: n.TYPE,
  WindowOrWorkerGlobalScope: n.TYPE,
  WindowSessionStorage: n.TYPE,
  WorkerEventMap: n.TYPE,
  Worker: n.TYPE_VALUE,
  Worklet: n.TYPE_VALUE,
  WritableStream: n.TYPE_VALUE,
  WritableStreamDefaultController: n.TYPE_VALUE,
  WritableStreamDefaultWriter: n.TYPE_VALUE,
  XMLDocument: n.TYPE_VALUE,
  XMLHttpRequestEventMap: n.TYPE,
  XMLHttpRequest: n.TYPE_VALUE,
  XMLHttpRequestEventTargetEventMap: n.TYPE,
  XMLHttpRequestEventTarget: n.TYPE_VALUE,
  XMLHttpRequestUpload: n.TYPE_VALUE,
  XMLSerializer: n.TYPE_VALUE,
  XPathEvaluator: n.TYPE_VALUE,
  XPathEvaluatorBase: n.TYPE,
  XPathExpression: n.TYPE_VALUE,
  XPathResult: n.TYPE_VALUE,
  XSLTProcessor: n.TYPE_VALUE,
  Console: n.TYPE,
  CSS: n.TYPE_VALUE,
  WebAssembly: n.TYPE_VALUE,
  BlobCallback: n.TYPE,
  CustomElementConstructor: n.TYPE,
  DecodeErrorCallback: n.TYPE,
  DecodeSuccessCallback: n.TYPE,
  ErrorCallback: n.TYPE,
  FileCallback: n.TYPE,
  FileSystemEntriesCallback: n.TYPE,
  FileSystemEntryCallback: n.TYPE,
  FrameRequestCallback: n.TYPE,
  FunctionStringCallback: n.TYPE,
  IdleRequestCallback: n.TYPE,
  IntersectionObserverCallback: n.TYPE,
  LockGrantedCallback: n.TYPE,
  MediaSessionActionHandler: n.TYPE,
  MutationCallback: n.TYPE,
  NotificationPermissionCallback: n.TYPE,
  OnBeforeUnloadEventHandlerNonNull: n.TYPE,
  OnErrorEventHandlerNonNull: n.TYPE,
  PerformanceObserverCallback: n.TYPE,
  PositionCallback: n.TYPE,
  PositionErrorCallback: n.TYPE,
  QueuingStrategySize: n.TYPE,
  RTCPeerConnectionErrorCallback: n.TYPE,
  RTCSessionDescriptionCallback: n.TYPE,
  RemotePlaybackAvailabilityCallback: n.TYPE,
  ResizeObserverCallback: n.TYPE,
  TransformerFlushCallback: n.TYPE,
  TransformerStartCallback: n.TYPE,
  TransformerTransformCallback: n.TYPE,
  UnderlyingSinkAbortCallback: n.TYPE,
  UnderlyingSinkCloseCallback: n.TYPE,
  UnderlyingSinkStartCallback: n.TYPE,
  UnderlyingSinkWriteCallback: n.TYPE,
  UnderlyingSourceCancelCallback: n.TYPE,
  UnderlyingSourcePullCallback: n.TYPE,
  UnderlyingSourceStartCallback: n.TYPE,
  VideoFrameRequestCallback: n.TYPE,
  VoidFunction: n.TYPE,
  HTMLElementTagNameMap: n.TYPE,
  HTMLElementDeprecatedTagNameMap: n.TYPE,
  SVGElementTagNameMap: n.TYPE,
  ElementTagNameMap: n.TYPE,
  AlgorithmIdentifier: n.TYPE,
  BigInteger: n.TYPE,
  BinaryData: n.TYPE,
  BlobPart: n.TYPE,
  BodyInit: n.TYPE,
  BufferSource: n.TYPE,
  COSEAlgorithmIdentifier: n.TYPE,
  CSSNumberish: n.TYPE,
  CanvasImageSource: n.TYPE,
  ClipboardItemData: n.TYPE,
  ClipboardItems: n.TYPE,
  ConstrainBoolean: n.TYPE,
  ConstrainDOMString: n.TYPE,
  ConstrainDouble: n.TYPE,
  ConstrainULong: n.TYPE,
  DOMHighResTimeStamp: n.TYPE,
  EpochTimeStamp: n.TYPE,
  EventListenerOrEventListenerObject: n.TYPE,
  Float32List: n.TYPE,
  FormDataEntryValue: n.TYPE,
  GLbitfield: n.TYPE,
  GLboolean: n.TYPE,
  GLclampf: n.TYPE,
  GLenum: n.TYPE,
  GLfloat: n.TYPE,
  GLint: n.TYPE,
  GLint64: n.TYPE,
  GLintptr: n.TYPE,
  GLsizei: n.TYPE,
  GLsizeiptr: n.TYPE,
  GLuint: n.TYPE,
  GLuint64: n.TYPE,
  HTMLOrSVGImageElement: n.TYPE,
  HTMLOrSVGScriptElement: n.TYPE,
  HashAlgorithmIdentifier: n.TYPE,
  HeadersInit: n.TYPE,
  IDBValidKey: n.TYPE,
  ImageBitmapSource: n.TYPE,
  InsertPosition: n.TYPE,
  Int32List: n.TYPE,
  LineAndPositionSetting: n.TYPE,
  MediaProvider: n.TYPE,
  MessageEventSource: n.TYPE,
  MutationRecordType: n.TYPE,
  NamedCurve: n.TYPE,
  OffscreenRenderingContext: n.TYPE,
  OnBeforeUnloadEventHandler: n.TYPE,
  OnErrorEventHandler: n.TYPE,
  PerformanceEntryList: n.TYPE,
  ReadableStreamController: n.TYPE,
  ReadableStreamReadResult: n.TYPE,
  ReadableStreamReader: n.TYPE,
  RenderingContext: n.TYPE,
  RequestInfo: n.TYPE,
  TexImageSource: n.TYPE,
  TimerHandler: n.TYPE,
  Transferable: n.TYPE,
  Uint32List: n.TYPE,
  VibratePattern: n.TYPE,
  WindowProxy: n.TYPE,
  XMLHttpRequestBodyInit: n.TYPE,
  AlignSetting: n.TYPE,
  AnimationPlayState: n.TYPE,
  AnimationReplaceState: n.TYPE,
  AppendMode: n.TYPE,
  AttestationConveyancePreference: n.TYPE,
  AudioContextLatencyCategory: n.TYPE,
  AudioContextState: n.TYPE,
  AuthenticatorAttachment: n.TYPE,
  AuthenticatorTransport: n.TYPE,
  AutoKeyword: n.TYPE,
  AutomationRate: n.TYPE,
  BinaryType: n.TYPE,
  BiquadFilterType: n.TYPE,
  CanPlayTypeResult: n.TYPE,
  CanvasDirection: n.TYPE,
  CanvasFillRule: n.TYPE,
  CanvasFontKerning: n.TYPE,
  CanvasFontStretch: n.TYPE,
  CanvasFontVariantCaps: n.TYPE,
  CanvasLineCap: n.TYPE,
  CanvasLineJoin: n.TYPE,
  CanvasTextAlign: n.TYPE,
  CanvasTextBaseline: n.TYPE,
  CanvasTextRendering: n.TYPE,
  ChannelCountMode: n.TYPE,
  ChannelInterpretation: n.TYPE,
  ClientTypes: n.TYPE,
  ColorGamut: n.TYPE,
  ColorSpaceConversion: n.TYPE,
  CompositeOperation: n.TYPE,
  CompositeOperationOrAuto: n.TYPE,
  CredentialMediationRequirement: n.TYPE,
  DOMParserSupportedType: n.TYPE,
  DirectionSetting: n.TYPE,
  DisplayCaptureSurfaceType: n.TYPE,
  DistanceModelType: n.TYPE,
  DocumentReadyState: n.TYPE,
  DocumentVisibilityState: n.TYPE,
  EndOfStreamError: n.TYPE,
  EndingType: n.TYPE,
  FileSystemHandleKind: n.TYPE,
  FillMode: n.TYPE,
  FontFaceLoadStatus: n.TYPE,
  FontFaceSetLoadStatus: n.TYPE,
  FullscreenNavigationUI: n.TYPE,
  GamepadHapticActuatorType: n.TYPE,
  GamepadMappingType: n.TYPE,
  GlobalCompositeOperation: n.TYPE,
  HdrMetadataType: n.TYPE,
  IDBCursorDirection: n.TYPE,
  IDBRequestReadyState: n.TYPE,
  IDBTransactionDurability: n.TYPE,
  IDBTransactionMode: n.TYPE,
  ImageOrientation: n.TYPE,
  ImageSmoothingQuality: n.TYPE,
  IterationCompositeOperation: n.TYPE,
  KeyFormat: n.TYPE,
  KeyType: n.TYPE,
  KeyUsage: n.TYPE,
  LineAlignSetting: n.TYPE,
  LockMode: n.TYPE,
  MediaDecodingType: n.TYPE,
  MediaDeviceKind: n.TYPE,
  MediaEncodingType: n.TYPE,
  MediaKeyMessageType: n.TYPE,
  MediaKeySessionClosedReason: n.TYPE,
  MediaKeySessionType: n.TYPE,
  MediaKeyStatus: n.TYPE,
  MediaKeysRequirement: n.TYPE,
  MediaSessionAction: n.TYPE,
  MediaSessionPlaybackState: n.TYPE,
  MediaStreamTrackState: n.TYPE,
  NavigationTimingType: n.TYPE,
  NotificationDirection: n.TYPE,
  NotificationPermission: n.TYPE,
  OffscreenRenderingContextId: n.TYPE,
  OrientationLockType: n.TYPE,
  OrientationType: n.TYPE,
  OscillatorType: n.TYPE,
  OverSampleType: n.TYPE,
  PanningModelType: n.TYPE,
  PaymentComplete: n.TYPE,
  PermissionName: n.TYPE,
  PermissionState: n.TYPE,
  PlaybackDirection: n.TYPE,
  PositionAlignSetting: n.TYPE,
  PredefinedColorSpace: n.TYPE,
  PremultiplyAlpha: n.TYPE,
  PresentationStyle: n.TYPE,
  PublicKeyCredentialType: n.TYPE,
  PushEncryptionKeyName: n.TYPE,
  RTCBundlePolicy: n.TYPE,
  RTCDataChannelState: n.TYPE,
  RTCDegradationPreference: n.TYPE,
  RTCDtlsTransportState: n.TYPE,
  RTCEncodedVideoFrameType: n.TYPE,
  RTCErrorDetailType: n.TYPE,
  RTCIceCandidateType: n.TYPE,
  RTCIceComponent: n.TYPE,
  RTCIceConnectionState: n.TYPE,
  RTCIceGathererState: n.TYPE,
  RTCIceGatheringState: n.TYPE,
  RTCIceProtocol: n.TYPE,
  RTCIceTcpCandidateType: n.TYPE,
  RTCIceTransportPolicy: n.TYPE,
  RTCIceTransportState: n.TYPE,
  RTCPeerConnectionState: n.TYPE,
  RTCPriorityType: n.TYPE,
  RTCRtcpMuxPolicy: n.TYPE,
  RTCRtpTransceiverDirection: n.TYPE,
  RTCSctpTransportState: n.TYPE,
  RTCSdpType: n.TYPE,
  RTCSignalingState: n.TYPE,
  RTCStatsIceCandidatePairState: n.TYPE,
  RTCStatsType: n.TYPE,
  ReadableStreamReaderMode: n.TYPE,
  ReadableStreamType: n.TYPE,
  ReadyState: n.TYPE,
  RecordingState: n.TYPE,
  ReferrerPolicy: n.TYPE,
  RemotePlaybackState: n.TYPE,
  RequestCache: n.TYPE,
  RequestCredentials: n.TYPE,
  RequestDestination: n.TYPE,
  RequestMode: n.TYPE,
  RequestRedirect: n.TYPE,
  ResidentKeyRequirement: n.TYPE,
  ResizeObserverBoxOptions: n.TYPE,
  ResizeQuality: n.TYPE,
  ResponseType: n.TYPE,
  ScrollBehavior: n.TYPE,
  ScrollLogicalPosition: n.TYPE,
  ScrollRestoration: n.TYPE,
  ScrollSetting: n.TYPE,
  SecurityPolicyViolationEventDisposition: n.TYPE,
  SelectionMode: n.TYPE,
  ServiceWorkerState: n.TYPE,
  ServiceWorkerUpdateViaCache: n.TYPE,
  ShadowRootMode: n.TYPE,
  SlotAssignmentMode: n.TYPE,
  SpeechSynthesisErrorCode: n.TYPE,
  TextTrackKind: n.TYPE,
  TextTrackMode: n.TYPE,
  TouchType: n.TYPE,
  TransferFunction: n.TYPE,
  UserVerificationRequirement: n.TYPE,
  VideoColorPrimaries: n.TYPE,
  VideoFacingModeEnum: n.TYPE,
  VideoMatrixCoefficients: n.TYPE,
  VideoTransferCharacteristics: n.TYPE,
  WebGLPowerPreference: n.TYPE,
  WorkerType: n.TYPE,
  XMLHttpRequestResponseType: n.TYPE
};
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.dom_iterable = void 0;
const M = O;
Le.dom_iterable = {
  AudioParam: M.TYPE,
  AudioParamMap: M.TYPE,
  BaseAudioContext: M.TYPE,
  CSSRuleList: M.TYPE,
  CSSStyleDeclaration: M.TYPE,
  Cache: M.TYPE,
  CanvasPath: M.TYPE,
  CanvasPathDrawingStyles: M.TYPE,
  DOMRectList: M.TYPE,
  DOMStringList: M.TYPE,
  DOMTokenList: M.TYPE,
  DataTransferItemList: M.TYPE,
  EventCounts: M.TYPE,
  FileList: M.TYPE,
  FontFaceSet: M.TYPE,
  FormData: M.TYPE,
  HTMLAllCollection: M.TYPE,
  HTMLCollectionBase: M.TYPE,
  HTMLCollectionOf: M.TYPE,
  HTMLFormElement: M.TYPE,
  HTMLSelectElement: M.TYPE,
  Headers: M.TYPE,
  IDBDatabase: M.TYPE,
  IDBObjectStore: M.TYPE,
  MediaKeyStatusMap: M.TYPE,
  MediaList: M.TYPE,
  MessageEvent: M.TYPE,
  MimeTypeArray: M.TYPE,
  NamedNodeMap: M.TYPE,
  Navigator: M.TYPE,
  NodeList: M.TYPE,
  NodeListOf: M.TYPE,
  Plugin: M.TYPE,
  PluginArray: M.TYPE,
  RTCRtpTransceiver: M.TYPE,
  RTCStatsReport: M.TYPE,
  SVGLengthList: M.TYPE,
  SVGNumberList: M.TYPE,
  SVGPointList: M.TYPE,
  SVGStringList: M.TYPE,
  SVGTransformList: M.TYPE,
  SourceBufferList: M.TYPE,
  SpeechRecognitionResult: M.TYPE,
  SpeechRecognitionResultList: M.TYPE,
  StyleSheetList: M.TYPE,
  SubtleCrypto: M.TYPE,
  TextTrackCueList: M.TYPE,
  TextTrackList: M.TYPE,
  TouchList: M.TYPE,
  URLSearchParams: M.TYPE,
  WEBGL_draw_buffers: M.TYPE,
  WEBGL_multi_draw: M.TYPE,
  WebGL2RenderingContextBase: M.TYPE,
  WebGL2RenderingContextOverloads: M.TYPE,
  WebGLRenderingContextBase: M.TYPE,
  WebGLRenderingContextOverloads: M.TYPE
};
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.es5 = void 0;
const S = O;
Ot.es5 = {
  Symbol: S.TYPE,
  PropertyKey: S.TYPE,
  PropertyDescriptor: S.TYPE,
  PropertyDescriptorMap: S.TYPE,
  Object: S.TYPE_VALUE,
  ObjectConstructor: S.TYPE,
  Function: S.TYPE_VALUE,
  FunctionConstructor: S.TYPE,
  ThisParameterType: S.TYPE,
  OmitThisParameter: S.TYPE,
  CallableFunction: S.TYPE,
  NewableFunction: S.TYPE,
  IArguments: S.TYPE,
  String: S.TYPE_VALUE,
  StringConstructor: S.TYPE,
  Boolean: S.TYPE_VALUE,
  BooleanConstructor: S.TYPE,
  Number: S.TYPE_VALUE,
  NumberConstructor: S.TYPE,
  TemplateStringsArray: S.TYPE,
  ImportMeta: S.TYPE,
  ImportCallOptions: S.TYPE,
  ImportAssertions: S.TYPE,
  Math: S.TYPE_VALUE,
  Date: S.TYPE_VALUE,
  DateConstructor: S.TYPE,
  RegExpMatchArray: S.TYPE,
  RegExpExecArray: S.TYPE,
  RegExp: S.TYPE_VALUE,
  RegExpConstructor: S.TYPE,
  Error: S.TYPE_VALUE,
  ErrorConstructor: S.TYPE,
  EvalError: S.TYPE_VALUE,
  EvalErrorConstructor: S.TYPE,
  RangeError: S.TYPE_VALUE,
  RangeErrorConstructor: S.TYPE,
  ReferenceError: S.TYPE_VALUE,
  ReferenceErrorConstructor: S.TYPE,
  SyntaxError: S.TYPE_VALUE,
  SyntaxErrorConstructor: S.TYPE,
  TypeError: S.TYPE_VALUE,
  TypeErrorConstructor: S.TYPE,
  URIError: S.TYPE_VALUE,
  URIErrorConstructor: S.TYPE,
  JSON: S.TYPE_VALUE,
  ReadonlyArray: S.TYPE,
  ConcatArray: S.TYPE,
  Array: S.TYPE_VALUE,
  ArrayConstructor: S.TYPE,
  TypedPropertyDescriptor: S.TYPE,
  ClassDecorator: S.TYPE,
  PropertyDecorator: S.TYPE,
  MethodDecorator: S.TYPE,
  ParameterDecorator: S.TYPE,
  PromiseConstructorLike: S.TYPE,
  PromiseLike: S.TYPE,
  Promise: S.TYPE,
  Awaited: S.TYPE,
  ArrayLike: S.TYPE,
  Partial: S.TYPE,
  Required: S.TYPE,
  Readonly: S.TYPE,
  Pick: S.TYPE,
  Record: S.TYPE,
  Exclude: S.TYPE,
  Extract: S.TYPE,
  Omit: S.TYPE,
  NonNullable: S.TYPE,
  Parameters: S.TYPE,
  ConstructorParameters: S.TYPE,
  ReturnType: S.TYPE,
  InstanceType: S.TYPE,
  Uppercase: S.TYPE,
  Lowercase: S.TYPE,
  Capitalize: S.TYPE,
  Uncapitalize: S.TYPE,
  ThisType: S.TYPE,
  ArrayBuffer: S.TYPE_VALUE,
  ArrayBufferTypes: S.TYPE,
  ArrayBufferLike: S.TYPE,
  ArrayBufferConstructor: S.TYPE,
  ArrayBufferView: S.TYPE,
  DataView: S.TYPE_VALUE,
  DataViewConstructor: S.TYPE,
  Int8Array: S.TYPE_VALUE,
  Int8ArrayConstructor: S.TYPE,
  Uint8Array: S.TYPE_VALUE,
  Uint8ArrayConstructor: S.TYPE,
  Uint8ClampedArray: S.TYPE_VALUE,
  Uint8ClampedArrayConstructor: S.TYPE,
  Int16Array: S.TYPE_VALUE,
  Int16ArrayConstructor: S.TYPE,
  Uint16Array: S.TYPE_VALUE,
  Uint16ArrayConstructor: S.TYPE,
  Int32Array: S.TYPE_VALUE,
  Int32ArrayConstructor: S.TYPE,
  Uint32Array: S.TYPE_VALUE,
  Uint32ArrayConstructor: S.TYPE,
  Float32Array: S.TYPE_VALUE,
  Float32ArrayConstructor: S.TYPE,
  Float64Array: S.TYPE_VALUE,
  Float64ArrayConstructor: S.TYPE,
  Intl: S.TYPE_VALUE
};
var Oi = {}, nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.es2015_collection = void 0;
const je = O;
nr.es2015_collection = {
  Map: je.TYPE_VALUE,
  MapConstructor: je.TYPE,
  ReadonlyMap: je.TYPE,
  WeakMap: je.TYPE_VALUE,
  WeakMapConstructor: je.TYPE,
  Set: je.TYPE_VALUE,
  SetConstructor: je.TYPE,
  ReadonlySet: je.TYPE,
  WeakSet: je.TYPE_VALUE,
  WeakSetConstructor: je.TYPE
};
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.es2015_core = void 0;
const Ye = O;
ir.es2015_core = {
  Array: Ye.TYPE,
  ArrayConstructor: Ye.TYPE,
  DateConstructor: Ye.TYPE,
  Function: Ye.TYPE,
  Math: Ye.TYPE,
  NumberConstructor: Ye.TYPE,
  ObjectConstructor: Ye.TYPE,
  ReadonlyArray: Ye.TYPE,
  RegExp: Ye.TYPE,
  RegExpConstructor: Ye.TYPE,
  String: Ye.TYPE,
  StringConstructor: Ye.TYPE
};
var sr = {}, Ce = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.es2015_symbol = void 0;
const kP = O;
Ve.es2015_symbol = {
  SymbolConstructor: kP.TYPE
};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.es2015_iterable = void 0;
const D = O, FP = Ve;
Ce.es2015_iterable = Object.assign(Object.assign({}, FP.es2015_symbol), { SymbolConstructor: D.TYPE, IteratorYieldResult: D.TYPE, IteratorReturnResult: D.TYPE, IteratorResult: D.TYPE, Iterator: D.TYPE, Iterable: D.TYPE, IterableIterator: D.TYPE, Array: D.TYPE, ArrayConstructor: D.TYPE, ReadonlyArray: D.TYPE, IArguments: D.TYPE, Map: D.TYPE, ReadonlyMap: D.TYPE, MapConstructor: D.TYPE, WeakMap: D.TYPE, WeakMapConstructor: D.TYPE, Set: D.TYPE, ReadonlySet: D.TYPE, SetConstructor: D.TYPE, WeakSet: D.TYPE, WeakSetConstructor: D.TYPE, Promise: D.TYPE, PromiseConstructor: D.TYPE, String: D.TYPE, Int8Array: D.TYPE, Int8ArrayConstructor: D.TYPE, Uint8Array: D.TYPE, Uint8ArrayConstructor: D.TYPE, Uint8ClampedArray: D.TYPE, Uint8ClampedArrayConstructor: D.TYPE, Int16Array: D.TYPE, Int16ArrayConstructor: D.TYPE, Uint16Array: D.TYPE, Uint16ArrayConstructor: D.TYPE, Int32Array: D.TYPE, Int32ArrayConstructor: D.TYPE, Uint32Array: D.TYPE, Uint32ArrayConstructor: D.TYPE, Float32Array: D.TYPE, Float32ArrayConstructor: D.TYPE, Float64Array: D.TYPE, Float64ArrayConstructor: D.TYPE });
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.es2015_generator = void 0;
const Qs = O, NP = Ce;
sr.es2015_generator = Object.assign(Object.assign({}, NP.es2015_iterable), { Generator: Qs.TYPE, GeneratorFunction: Qs.TYPE, GeneratorFunctionConstructor: Qs.TYPE });
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.es2015_promise = void 0;
const BP = O;
ar.es2015_promise = {
  PromiseConstructor: BP.TYPE
};
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.es2015_proxy = void 0;
const Co = O;
or.es2015_proxy = {
  ProxyHandler: Co.TYPE,
  ProxyConstructor: Co.TYPE
};
var lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.es2015_reflect = void 0;
const GP = O;
lr.es2015_reflect = {
  Reflect: GP.TYPE_VALUE
};
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.es2015_symbol_wellknown = void 0;
const G = O, WP = Ve;
wt.es2015_symbol_wellknown = Object.assign(Object.assign({}, WP.es2015_symbol), { SymbolConstructor: G.TYPE, Symbol: G.TYPE, Array: G.TYPE, Date: G.TYPE, Map: G.TYPE, WeakMap: G.TYPE, Set: G.TYPE, WeakSet: G.TYPE, JSON: G.TYPE, Function: G.TYPE, GeneratorFunction: G.TYPE, Math: G.TYPE, Promise: G.TYPE, PromiseConstructor: G.TYPE, RegExp: G.TYPE, RegExpConstructor: G.TYPE, String: G.TYPE, ArrayBuffer: G.TYPE, DataView: G.TYPE, Int8Array: G.TYPE, Uint8Array: G.TYPE, Uint8ClampedArray: G.TYPE, Int16Array: G.TYPE, Uint16Array: G.TYPE, Int32Array: G.TYPE, Uint32Array: G.TYPE, Float32Array: G.TYPE, Float64Array: G.TYPE, ArrayConstructor: G.TYPE, MapConstructor: G.TYPE, SetConstructor: G.TYPE, ArrayBufferConstructor: G.TYPE });
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.es6 = void 0;
const HP = Ot, KP = nr, XP = ir, qP = sr, zP = Ce, JP = ar, QP = or, ZP = lr, e_ = Ve, t_ = wt;
Oi.es6 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, HP.es5), XP.es2015_core), KP.es2015_collection), zP.es2015_iterable), qP.es2015_generator), JP.es2015_promise), QP.es2015_proxy), ZP.es2015_reflect), e_.es2015_symbol), t_.es2015_symbol_wellknown);
var wi = {}, cr = {};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.es2015 = void 0;
const r_ = Ot, n_ = nr, i_ = ir, s_ = sr, a_ = Ce, o_ = ar, l_ = or, c_ = lr, u_ = Ve, p_ = wt;
cr.es2015 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r_.es5), i_.es2015_core), n_.es2015_collection), a_.es2015_iterable), s_.es2015_generator), o_.es2015_promise), l_.es2015_proxy), c_.es2015_reflect), u_.es2015_symbol), p_.es2015_symbol_wellknown);
var ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.es2016_array_include = void 0;
const Oe = O;
ur.es2016_array_include = {
  Array: Oe.TYPE,
  ReadonlyArray: Oe.TYPE,
  Int8Array: Oe.TYPE,
  Uint8Array: Oe.TYPE,
  Uint8ClampedArray: Oe.TYPE,
  Int16Array: Oe.TYPE,
  Uint16Array: Oe.TYPE,
  Int32Array: Oe.TYPE,
  Uint32Array: Oe.TYPE,
  Float32Array: Oe.TYPE,
  Float64Array: Oe.TYPE
};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.es7 = void 0;
const E_ = cr, f_ = ur;
wi.es7 = Object.assign(Object.assign({}, E_.es2015), f_.es2016_array_include);
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.es2016 = void 0;
const T_ = cr, d_ = ur;
pr.es2016 = Object.assign(Object.assign({}, T_.es2015), d_.es2016_array_include);
var Mi = {}, ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.scripthost = void 0;
const he = O;
ve.scripthost = {
  ActiveXObject: he.TYPE_VALUE,
  ITextWriter: he.TYPE,
  TextStreamBase: he.TYPE,
  TextStreamWriter: he.TYPE,
  TextStreamReader: he.TYPE,
  SafeArray: he.TYPE_VALUE,
  Enumerator: he.TYPE_VALUE,
  EnumeratorConstructor: he.TYPE,
  VBArray: he.TYPE_VALUE,
  VBArrayConstructor: he.TYPE,
  VarDate: he.TYPE_VALUE,
  DateConstructor: he.TYPE,
  Date: he.TYPE
};
var ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.webworker_importscripts = void 0;
ge.webworker_importscripts = {};
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.es2016_full = void 0;
const P_ = Se, __ = Le, h_ = pr, m_ = ve, y_ = ge;
Mi.es2016_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, h_.es2016), P_.dom), y_.webworker_importscripts), m_.scripthost), __.dom_iterable);
var Er = {}, Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.es2017_intl = void 0;
const S_ = O;
Br.es2017_intl = {
  Intl: S_.TYPE_VALUE
};
var Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.es2017_object = void 0;
const v_ = O;
Gr.es2017_object = {
  ObjectConstructor: v_.TYPE
};
var Wr = {};
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.es2017_sharedmemory = void 0;
const Un = O, g_ = Ve, b_ = wt;
Wr.es2017_sharedmemory = Object.assign(Object.assign(Object.assign({}, g_.es2015_symbol), b_.es2015_symbol_wellknown), { SharedArrayBuffer: Un.TYPE_VALUE, SharedArrayBufferConstructor: Un.TYPE, ArrayBufferTypes: Un.TYPE, Atomics: Un.TYPE_VALUE });
var Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.es2017_string = void 0;
const Y_ = O;
Hr.es2017_string = {
  String: Y_.TYPE
};
var Kr = {};
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.es2017_typedarrays = void 0;
const ze = O;
Kr.es2017_typedarrays = {
  Int8ArrayConstructor: ze.TYPE,
  Uint8ArrayConstructor: ze.TYPE,
  Uint8ClampedArrayConstructor: ze.TYPE,
  Int16ArrayConstructor: ze.TYPE,
  Uint16ArrayConstructor: ze.TYPE,
  Int32ArrayConstructor: ze.TYPE,
  Uint32ArrayConstructor: ze.TYPE,
  Float32ArrayConstructor: ze.TYPE,
  Float64ArrayConstructor: ze.TYPE
};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.es2017 = void 0;
const A_ = pr, L_ = Br, C_ = Gr, V_ = Wr, O_ = Hr, w_ = Kr;
Er.es2017 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, A_.es2016), C_.es2017_object), V_.es2017_sharedmemory), O_.es2017_string), L_.es2017_intl), w_.es2017_typedarrays);
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.es2017_full = void 0;
const M_ = Se, R_ = Le, I_ = Er, x_ = ve, U_ = ge;
Ri.es2017_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, I_.es2017), M_.dom), U_.webworker_importscripts), x_.scripthost), R_.dom_iterable);
var fr = {}, Xr = {}, Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.es2018_asynciterable = void 0;
const $n = O, $_ = Ce, D_ = Ve;
Tr.es2018_asynciterable = Object.assign(Object.assign(Object.assign({}, D_.es2015_symbol), $_.es2015_iterable), { SymbolConstructor: $n.TYPE, AsyncIterator: $n.TYPE, AsyncIterable: $n.TYPE, AsyncIterableIterator: $n.TYPE });
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.es2018_asyncgenerator = void 0;
const Zs = O, j_ = Tr;
Xr.es2018_asyncgenerator = Object.assign(Object.assign({}, j_.es2018_asynciterable), { AsyncGenerator: Zs.TYPE, AsyncGeneratorFunction: Zs.TYPE, AsyncGeneratorFunctionConstructor: Zs.TYPE });
var dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.es2018_intl = void 0;
const k_ = O;
dr.es2018_intl = {
  Intl: k_.TYPE_VALUE
};
var qr = {};
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.es2018_promise = void 0;
const F_ = O;
qr.es2018_promise = {
  Promise: F_.TYPE
};
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.es2018_regexp = void 0;
const ea = O;
zr.es2018_regexp = {
  RegExpMatchArray: ea.TYPE,
  RegExpExecArray: ea.TYPE,
  RegExp: ea.TYPE
};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.es2018 = void 0;
const N_ = Er, B_ = Xr, G_ = Tr, W_ = dr, H_ = qr, K_ = zr;
fr.es2018 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, N_.es2017), G_.es2018_asynciterable), B_.es2018_asyncgenerator), H_.es2018_promise), K_.es2018_regexp), W_.es2018_intl);
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.es2018_full = void 0;
const X_ = Se, q_ = Le, z_ = fr, J_ = ve, Q_ = ge;
Ii.es2018_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, z_.es2018), X_.dom), Q_.webworker_importscripts), J_.scripthost), q_.dom_iterable);
var Pr = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.es2019_array = void 0;
const ta = O;
Jr.es2019_array = {
  FlatArray: ta.TYPE,
  ReadonlyArray: ta.TYPE,
  Array: ta.TYPE
};
var Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.es2019_intl = void 0;
const Z_ = O;
Qr.es2019_intl = {
  Intl: Z_.TYPE_VALUE
};
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.es2019_object = void 0;
const eh = O, th = Ce;
Zr.es2019_object = Object.assign(Object.assign({}, th.es2015_iterable), { ObjectConstructor: eh.TYPE });
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.es2019_string = void 0;
const rh = O;
en.es2019_string = {
  String: rh.TYPE
};
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.es2019_symbol = void 0;
const nh = O;
tn.es2019_symbol = {
  Symbol: nh.TYPE
};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.es2019 = void 0;
const ih = fr, sh = Jr, ah = Qr, oh = Zr, lh = en, ch = tn;
Pr.es2019 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ih.es2018), sh.es2019_array), oh.es2019_object), lh.es2019_string), ch.es2019_symbol), ah.es2019_intl);
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.es2019_full = void 0;
const uh = Se, ph = Le, Eh = Pr, fh = ve, Th = ge;
xi.es2019_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Eh.es2019), uh.dom), Th.webworker_importscripts), fh.scripthost), ph.dom_iterable);
var _r = {}, rn = {}, nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.es2020_intl = void 0;
const dh = O, Ph = dr;
nt.es2020_intl = Object.assign(Object.assign({}, Ph.es2018_intl), { Intl: dh.TYPE_VALUE });
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.es2020_bigint = void 0;
const Je = O, _h = nt;
rn.es2020_bigint = Object.assign(Object.assign({}, _h.es2020_intl), { BigIntToLocaleStringOptions: Je.TYPE, BigInt: Je.TYPE_VALUE, BigIntConstructor: Je.TYPE, BigInt64Array: Je.TYPE_VALUE, BigInt64ArrayConstructor: Je.TYPE, BigUint64Array: Je.TYPE_VALUE, BigUint64ArrayConstructor: Je.TYPE, DataView: Je.TYPE, Intl: Je.TYPE_VALUE });
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.es2020_date = void 0;
const hh = O, mh = nt;
nn.es2020_date = Object.assign(Object.assign({}, mh.es2020_intl), { Date: hh.TYPE });
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.es2020_number = void 0;
const yh = O, Sh = nt;
sn.es2020_number = Object.assign(Object.assign({}, Sh.es2020_intl), { Number: yh.TYPE });
var an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.es2020_promise = void 0;
const Dn = O;
an.es2020_promise = {
  PromiseFulfilledResult: Dn.TYPE,
  PromiseRejectedResult: Dn.TYPE,
  PromiseSettledResult: Dn.TYPE,
  PromiseConstructor: Dn.TYPE
};
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.es2020_sharedmemory = void 0;
const vh = O;
on.es2020_sharedmemory = {
  Atomics: vh.TYPE
};
var ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.es2020_string = void 0;
const gh = O, bh = Ce;
ln.es2020_string = Object.assign(Object.assign({}, bh.es2015_iterable), { String: gh.TYPE });
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.es2020_symbol_wellknown = void 0;
const Vo = O, Yh = Ce, Ah = Ve;
cn.es2020_symbol_wellknown = Object.assign(Object.assign(Object.assign({}, Yh.es2015_iterable), Ah.es2015_symbol), { SymbolConstructor: Vo.TYPE, RegExp: Vo.TYPE });
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.es2020 = void 0;
const Lh = Pr, Ch = rn, Vh = nn, Oh = nt, wh = sn, Mh = an, Rh = on, Ih = ln, xh = cn;
_r.es2020 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Lh.es2019), Ch.es2020_bigint), Vh.es2020_date), wh.es2020_number), Mh.es2020_promise), Rh.es2020_sharedmemory), Ih.es2020_string), xh.es2020_symbol_wellknown), Oh.es2020_intl);
var Ui = {};
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.es2020_full = void 0;
const Uh = Se, $h = Le, Dh = _r, jh = ve, kh = ge;
Ui.es2020_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Dh.es2020), Uh.dom), kh.webworker_importscripts), jh.scripthost), $h.dom_iterable);
var hr = {}, un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.es2021_intl = void 0;
const Fh = O;
un.es2021_intl = {
  Intl: Fh.TYPE_VALUE
};
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.es2021_promise = void 0;
const ra = O;
pn.es2021_promise = {
  AggregateError: ra.TYPE_VALUE,
  AggregateErrorConstructor: ra.TYPE,
  PromiseConstructor: ra.TYPE
};
var En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.es2021_string = void 0;
const Nh = O;
En.es2021_string = {
  String: Nh.TYPE
};
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.es2021_weakref = void 0;
const jn = O;
fn.es2021_weakref = {
  WeakRef: jn.TYPE_VALUE,
  WeakRefConstructor: jn.TYPE,
  FinalizationRegistry: jn.TYPE_VALUE,
  FinalizationRegistryConstructor: jn.TYPE
};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.es2021 = void 0;
const Bh = _r, Gh = un, Wh = pn, Hh = En, Kh = fn;
hr.es2021 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Bh.es2020), Wh.es2021_promise), Hh.es2021_string), Kh.es2021_weakref), Gh.es2021_intl);
var $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
$i.es2021_full = void 0;
const Xh = Se, qh = Le, zh = hr, Jh = ve, Qh = ge;
$i.es2021_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, zh.es2021), Xh.dom), Qh.webworker_importscripts), Jh.scripthost), qh.dom_iterable);
var mr = {}, Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.es2022_array = void 0;
const me = O;
Tn.es2022_array = {
  Array: me.TYPE,
  ReadonlyArray: me.TYPE,
  Int8Array: me.TYPE,
  Uint8Array: me.TYPE,
  Uint8ClampedArray: me.TYPE,
  Int16Array: me.TYPE,
  Uint16Array: me.TYPE,
  Int32Array: me.TYPE,
  Uint32Array: me.TYPE,
  Float32Array: me.TYPE,
  Float64Array: me.TYPE,
  BigInt64Array: me.TYPE,
  BigUint64Array: me.TYPE
};
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.es2022_error = void 0;
const ke = O;
dn.es2022_error = {
  ErrorOptions: ke.TYPE,
  Error: ke.TYPE,
  ErrorConstructor: ke.TYPE,
  EvalErrorConstructor: ke.TYPE,
  RangeErrorConstructor: ke.TYPE,
  ReferenceErrorConstructor: ke.TYPE,
  SyntaxErrorConstructor: ke.TYPE,
  TypeErrorConstructor: ke.TYPE,
  URIErrorConstructor: ke.TYPE,
  AggregateErrorConstructor: ke.TYPE
};
var Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.es2022_intl = void 0;
const Zh = O;
Pn.es2022_intl = {
  Intl: Zh.TYPE_VALUE
};
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.es2022_object = void 0;
const em = O;
_n.es2022_object = {
  ObjectConstructor: em.TYPE
};
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.es2022_sharedmemory = void 0;
const tm = O;
hn.es2022_sharedmemory = {
  Atomics: tm.TYPE
};
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.es2022_string = void 0;
const rm = O;
mn.es2022_string = {
  String: rm.TYPE
};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.es2022 = void 0;
const nm = hr, im = Tn, sm = dn, am = Pn, om = _n, lm = hn, cm = mn;
mr.es2022 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, nm.es2021), im.es2022_array), sm.es2022_error), am.es2022_intl), om.es2022_object), lm.es2022_sharedmemory), cm.es2022_string);
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.es2022_full = void 0;
const um = Se, pm = Le, Em = mr, fm = ve, Tm = ge;
Di.es2022_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Em.es2022), um.dom), Tm.webworker_importscripts), fm.scripthost), pm.dom_iterable);
var yn = {}, Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.esnext_intl = void 0;
const dm = O;
Sn.esnext_intl = {
  Intl: dm.TYPE_VALUE
};
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.esnext = void 0;
const Pm = mr, _m = Sn;
yn.esnext = Object.assign(Object.assign({}, Pm.es2022), _m.esnext_intl);
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.esnext_array = void 0;
const ye = O;
ji.esnext_array = {
  Array: ye.TYPE,
  ReadonlyArray: ye.TYPE,
  Int8Array: ye.TYPE,
  Uint8Array: ye.TYPE,
  Uint8ClampedArray: ye.TYPE,
  Int16Array: ye.TYPE,
  Uint16Array: ye.TYPE,
  Int32Array: ye.TYPE,
  Uint32Array: ye.TYPE,
  Float32Array: ye.TYPE,
  Float64Array: ye.TYPE,
  BigInt64Array: ye.TYPE,
  BigUint64Array: ye.TYPE
};
var ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.esnext_asynciterable = void 0;
const kn = O, hm = Ce, mm = Ve;
ki.esnext_asynciterable = Object.assign(Object.assign(Object.assign({}, mm.es2015_symbol), hm.es2015_iterable), { SymbolConstructor: kn.TYPE, AsyncIterator: kn.TYPE, AsyncIterable: kn.TYPE, AsyncIterableIterator: kn.TYPE });
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.esnext_bigint = void 0;
const Qe = O, ym = nt;
Fi.esnext_bigint = Object.assign(Object.assign({}, ym.es2020_intl), { BigIntToLocaleStringOptions: Qe.TYPE, BigInt: Qe.TYPE_VALUE, BigIntConstructor: Qe.TYPE, BigInt64Array: Qe.TYPE_VALUE, BigInt64ArrayConstructor: Qe.TYPE, BigUint64Array: Qe.TYPE_VALUE, BigUint64ArrayConstructor: Qe.TYPE, DataView: Qe.TYPE, Intl: Qe.TYPE_VALUE });
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.esnext_full = void 0;
const Sm = Se, vm = Le, gm = yn, bm = ve, Ym = ge;
Ni.esnext_full = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, gm.esnext), Sm.dom), Ym.webworker_importscripts), bm.scripthost), vm.dom_iterable);
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.esnext_promise = void 0;
const na = O;
Bi.esnext_promise = {
  AggregateError: na.TYPE_VALUE,
  AggregateErrorConstructor: na.TYPE,
  PromiseConstructor: na.TYPE
};
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.esnext_string = void 0;
const Am = O;
Gi.esnext_string = {
  String: Am.TYPE
};
var Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.esnext_symbol = void 0;
const Lm = O;
Wi.esnext_symbol = {
  Symbol: Lm.TYPE
};
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.esnext_weakref = void 0;
const Fn = O;
Hi.esnext_weakref = {
  WeakRef: Fn.TYPE_VALUE,
  WeakRefConstructor: Fn.TYPE,
  FinalizationRegistry: Fn.TYPE_VALUE,
  FinalizationRegistryConstructor: Fn.TYPE
};
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.lib = void 0;
const Cm = Se, Vm = Ot, Om = ve, wm = ge;
Ki.lib = Object.assign(Object.assign(Object.assign(Object.assign({}, Vm.es5), Cm.dom), wm.webworker_importscripts), Om.scripthost);
var Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.webworker = void 0;
const o = O;
Xi.webworker = {
  AddEventListenerOptions: o.TYPE,
  AesCbcParams: o.TYPE,
  AesCtrParams: o.TYPE,
  AesDerivedKeyParams: o.TYPE,
  AesGcmParams: o.TYPE,
  AesKeyAlgorithm: o.TYPE,
  AesKeyGenParams: o.TYPE,
  Algorithm: o.TYPE,
  AudioConfiguration: o.TYPE,
  BlobPropertyBag: o.TYPE,
  CacheQueryOptions: o.TYPE,
  ClientQueryOptions: o.TYPE,
  CloseEventInit: o.TYPE,
  CryptoKeyPair: o.TYPE,
  CustomEventInit: o.TYPE,
  DOMMatrix2DInit: o.TYPE,
  DOMMatrixInit: o.TYPE,
  DOMPointInit: o.TYPE,
  DOMQuadInit: o.TYPE,
  DOMRectInit: o.TYPE,
  EcKeyGenParams: o.TYPE,
  EcKeyImportParams: o.TYPE,
  EcdhKeyDeriveParams: o.TYPE,
  EcdsaParams: o.TYPE,
  ErrorEventInit: o.TYPE,
  EventInit: o.TYPE,
  EventListenerOptions: o.TYPE,
  EventSourceInit: o.TYPE,
  ExtendableEventInit: o.TYPE,
  ExtendableMessageEventInit: o.TYPE,
  FetchEventInit: o.TYPE,
  FilePropertyBag: o.TYPE,
  FileSystemGetDirectoryOptions: o.TYPE,
  FileSystemGetFileOptions: o.TYPE,
  FileSystemRemoveOptions: o.TYPE,
  FontFaceDescriptors: o.TYPE,
  FontFaceSetLoadEventInit: o.TYPE,
  GetNotificationOptions: o.TYPE,
  HkdfParams: o.TYPE,
  HmacImportParams: o.TYPE,
  HmacKeyGenParams: o.TYPE,
  IDBDatabaseInfo: o.TYPE,
  IDBIndexParameters: o.TYPE,
  IDBObjectStoreParameters: o.TYPE,
  IDBTransactionOptions: o.TYPE,
  IDBVersionChangeEventInit: o.TYPE,
  ImageBitmapOptions: o.TYPE,
  ImageBitmapRenderingContextSettings: o.TYPE,
  ImageDataSettings: o.TYPE,
  ImportMeta: o.TYPE,
  JsonWebKey: o.TYPE,
  KeyAlgorithm: o.TYPE,
  LockInfo: o.TYPE,
  LockManagerSnapshot: o.TYPE,
  LockOptions: o.TYPE,
  MediaCapabilitiesDecodingInfo: o.TYPE,
  MediaCapabilitiesEncodingInfo: o.TYPE,
  MediaCapabilitiesInfo: o.TYPE,
  MediaConfiguration: o.TYPE,
  MediaDecodingConfiguration: o.TYPE,
  MediaEncodingConfiguration: o.TYPE,
  MessageEventInit: o.TYPE,
  MultiCacheQueryOptions: o.TYPE,
  NavigationPreloadState: o.TYPE,
  NotificationAction: o.TYPE,
  NotificationEventInit: o.TYPE,
  NotificationOptions: o.TYPE,
  Pbkdf2Params: o.TYPE,
  PerformanceMarkOptions: o.TYPE,
  PerformanceMeasureOptions: o.TYPE,
  PerformanceObserverInit: o.TYPE,
  PermissionDescriptor: o.TYPE,
  ProgressEventInit: o.TYPE,
  PromiseRejectionEventInit: o.TYPE,
  PushEventInit: o.TYPE,
  PushSubscriptionJSON: o.TYPE,
  PushSubscriptionOptionsInit: o.TYPE,
  QueuingStrategy: o.TYPE,
  QueuingStrategyInit: o.TYPE,
  RTCEncodedAudioFrameMetadata: o.TYPE,
  RTCEncodedVideoFrameMetadata: o.TYPE,
  ReadableStreamGetReaderOptions: o.TYPE,
  ReadableStreamReadDoneResult: o.TYPE,
  ReadableStreamReadValueResult: o.TYPE,
  ReadableWritablePair: o.TYPE,
  RegistrationOptions: o.TYPE,
  RequestInit: o.TYPE,
  ResponseInit: o.TYPE,
  RsaHashedImportParams: o.TYPE,
  RsaHashedKeyGenParams: o.TYPE,
  RsaKeyGenParams: o.TYPE,
  RsaOaepParams: o.TYPE,
  RsaOtherPrimesInfo: o.TYPE,
  RsaPssParams: o.TYPE,
  SecurityPolicyViolationEventInit: o.TYPE,
  StorageEstimate: o.TYPE,
  StreamPipeOptions: o.TYPE,
  StructuredSerializeOptions: o.TYPE,
  TextDecodeOptions: o.TYPE,
  TextDecoderOptions: o.TYPE,
  TextEncoderEncodeIntoResult: o.TYPE,
  Transformer: o.TYPE,
  UnderlyingByteSource: o.TYPE,
  UnderlyingDefaultSource: o.TYPE,
  UnderlyingSink: o.TYPE,
  UnderlyingSource: o.TYPE,
  VideoColorSpaceInit: o.TYPE,
  VideoConfiguration: o.TYPE,
  WebGLContextAttributes: o.TYPE,
  WebGLContextEventInit: o.TYPE,
  WorkerOptions: o.TYPE,
  ANGLE_instanced_arrays: o.TYPE,
  AbortController: o.TYPE_VALUE,
  AbortSignalEventMap: o.TYPE,
  AbortSignal: o.TYPE_VALUE,
  AbstractWorkerEventMap: o.TYPE,
  AbstractWorker: o.TYPE,
  AnimationFrameProvider: o.TYPE,
  Blob: o.TYPE_VALUE,
  Body: o.TYPE,
  BroadcastChannelEventMap: o.TYPE,
  BroadcastChannel: o.TYPE_VALUE,
  ByteLengthQueuingStrategy: o.TYPE_VALUE,
  Cache: o.TYPE_VALUE,
  CacheStorage: o.TYPE_VALUE,
  CanvasCompositing: o.TYPE,
  CanvasDrawImage: o.TYPE,
  CanvasDrawPath: o.TYPE,
  CanvasFillStrokeStyles: o.TYPE,
  CanvasFilters: o.TYPE,
  CanvasGradient: o.TYPE_VALUE,
  CanvasImageData: o.TYPE,
  CanvasImageSmoothing: o.TYPE,
  CanvasPath: o.TYPE,
  CanvasPathDrawingStyles: o.TYPE,
  CanvasPattern: o.TYPE_VALUE,
  CanvasRect: o.TYPE,
  CanvasShadowStyles: o.TYPE,
  CanvasState: o.TYPE,
  CanvasText: o.TYPE,
  CanvasTextDrawingStyles: o.TYPE,
  CanvasTransform: o.TYPE,
  Client: o.TYPE_VALUE,
  Clients: o.TYPE_VALUE,
  CloseEvent: o.TYPE_VALUE,
  CountQueuingStrategy: o.TYPE_VALUE,
  Crypto: o.TYPE_VALUE,
  CryptoKey: o.TYPE_VALUE,
  CustomEvent: o.TYPE_VALUE,
  DOMException: o.TYPE_VALUE,
  DOMMatrix: o.TYPE_VALUE,
  DOMMatrixReadOnly: o.TYPE_VALUE,
  DOMPoint: o.TYPE_VALUE,
  DOMPointReadOnly: o.TYPE_VALUE,
  DOMQuad: o.TYPE_VALUE,
  DOMRect: o.TYPE_VALUE,
  DOMRectReadOnly: o.TYPE_VALUE,
  DOMStringList: o.TYPE_VALUE,
  DedicatedWorkerGlobalScopeEventMap: o.TYPE,
  DedicatedWorkerGlobalScope: o.TYPE_VALUE,
  EXT_blend_minmax: o.TYPE,
  EXT_color_buffer_float: o.TYPE,
  EXT_color_buffer_half_float: o.TYPE,
  EXT_float_blend: o.TYPE,
  EXT_frag_depth: o.TYPE,
  EXT_sRGB: o.TYPE,
  EXT_shader_texture_lod: o.TYPE,
  EXT_texture_compression_bptc: o.TYPE,
  EXT_texture_compression_rgtc: o.TYPE,
  EXT_texture_filter_anisotropic: o.TYPE,
  EXT_texture_norm16: o.TYPE,
  ErrorEvent: o.TYPE_VALUE,
  Event: o.TYPE_VALUE,
  EventListener: o.TYPE,
  EventListenerObject: o.TYPE,
  EventSourceEventMap: o.TYPE,
  EventSource: o.TYPE_VALUE,
  EventTarget: o.TYPE_VALUE,
  ExtendableEvent: o.TYPE_VALUE,
  ExtendableMessageEvent: o.TYPE_VALUE,
  FetchEvent: o.TYPE_VALUE,
  File: o.TYPE_VALUE,
  FileList: o.TYPE_VALUE,
  FileReaderEventMap: o.TYPE,
  FileReader: o.TYPE_VALUE,
  FileReaderSync: o.TYPE_VALUE,
  FileSystemDirectoryHandle: o.TYPE_VALUE,
  FileSystemFileHandle: o.TYPE_VALUE,
  FileSystemHandle: o.TYPE_VALUE,
  FontFace: o.TYPE_VALUE,
  FontFaceSetEventMap: o.TYPE,
  FontFaceSet: o.TYPE_VALUE,
  FontFaceSetLoadEvent: o.TYPE_VALUE,
  FontFaceSource: o.TYPE,
  FormData: o.TYPE_VALUE,
  GenericTransformStream: o.TYPE,
  Headers: o.TYPE_VALUE,
  IDBCursor: o.TYPE_VALUE,
  IDBCursorWithValue: o.TYPE_VALUE,
  IDBDatabaseEventMap: o.TYPE,
  IDBDatabase: o.TYPE_VALUE,
  IDBFactory: o.TYPE_VALUE,
  IDBIndex: o.TYPE_VALUE,
  IDBKeyRange: o.TYPE_VALUE,
  IDBObjectStore: o.TYPE_VALUE,
  IDBOpenDBRequestEventMap: o.TYPE,
  IDBOpenDBRequest: o.TYPE_VALUE,
  IDBRequestEventMap: o.TYPE,
  IDBRequest: o.TYPE_VALUE,
  IDBTransactionEventMap: o.TYPE,
  IDBTransaction: o.TYPE_VALUE,
  IDBVersionChangeEvent: o.TYPE_VALUE,
  ImageBitmap: o.TYPE_VALUE,
  ImageBitmapRenderingContext: o.TYPE_VALUE,
  ImageData: o.TYPE_VALUE,
  KHR_parallel_shader_compile: o.TYPE,
  Lock: o.TYPE_VALUE,
  LockManager: o.TYPE_VALUE,
  MediaCapabilities: o.TYPE_VALUE,
  MessageChannel: o.TYPE_VALUE,
  MessageEvent: o.TYPE_VALUE,
  MessagePortEventMap: o.TYPE,
  MessagePort: o.TYPE_VALUE,
  NavigationPreloadManager: o.TYPE_VALUE,
  NavigatorConcurrentHardware: o.TYPE,
  NavigatorID: o.TYPE,
  NavigatorLanguage: o.TYPE,
  NavigatorLocks: o.TYPE,
  NavigatorOnLine: o.TYPE,
  NavigatorStorage: o.TYPE,
  NotificationEventMap: o.TYPE,
  Notification: o.TYPE_VALUE,
  NotificationEvent: o.TYPE_VALUE,
  OES_draw_buffers_indexed: o.TYPE,
  OES_element_index_uint: o.TYPE,
  OES_fbo_render_mipmap: o.TYPE,
  OES_standard_derivatives: o.TYPE,
  OES_texture_float: o.TYPE,
  OES_texture_float_linear: o.TYPE,
  OES_texture_half_float: o.TYPE,
  OES_texture_half_float_linear: o.TYPE,
  OES_vertex_array_object: o.TYPE,
  OVR_multiview2: o.TYPE,
  OffscreenCanvasEventMap: o.TYPE,
  OffscreenCanvas: o.TYPE_VALUE,
  OffscreenCanvasRenderingContext2D: o.TYPE_VALUE,
  Path2D: o.TYPE_VALUE,
  PerformanceEventMap: o.TYPE,
  Performance: o.TYPE_VALUE,
  PerformanceEntry: o.TYPE_VALUE,
  PerformanceMark: o.TYPE_VALUE,
  PerformanceMeasure: o.TYPE_VALUE,
  PerformanceObserver: o.TYPE_VALUE,
  PerformanceObserverEntryList: o.TYPE_VALUE,
  PerformanceResourceTiming: o.TYPE_VALUE,
  PerformanceServerTiming: o.TYPE_VALUE,
  PermissionStatusEventMap: o.TYPE,
  PermissionStatus: o.TYPE_VALUE,
  Permissions: o.TYPE_VALUE,
  ProgressEvent: o.TYPE_VALUE,
  PromiseRejectionEvent: o.TYPE_VALUE,
  PushEvent: o.TYPE_VALUE,
  PushManager: o.TYPE_VALUE,
  PushMessageData: o.TYPE_VALUE,
  PushSubscription: o.TYPE_VALUE,
  PushSubscriptionOptions: o.TYPE_VALUE,
  RTCEncodedAudioFrame: o.TYPE_VALUE,
  RTCEncodedVideoFrame: o.TYPE_VALUE,
  ReadableByteStreamController: o.TYPE_VALUE,
  ReadableStream: o.TYPE_VALUE,
  ReadableStreamBYOBReader: o.TYPE_VALUE,
  ReadableStreamBYOBRequest: o.TYPE_VALUE,
  ReadableStreamDefaultController: o.TYPE_VALUE,
  ReadableStreamDefaultReader: o.TYPE_VALUE,
  ReadableStreamGenericReader: o.TYPE,
  Request: o.TYPE_VALUE,
  Response: o.TYPE_VALUE,
  SecurityPolicyViolationEvent: o.TYPE_VALUE,
  ServiceWorkerEventMap: o.TYPE,
  ServiceWorker: o.TYPE_VALUE,
  ServiceWorkerContainerEventMap: o.TYPE,
  ServiceWorkerContainer: o.TYPE_VALUE,
  ServiceWorkerGlobalScopeEventMap: o.TYPE,
  ServiceWorkerGlobalScope: o.TYPE_VALUE,
  ServiceWorkerRegistrationEventMap: o.TYPE,
  ServiceWorkerRegistration: o.TYPE_VALUE,
  SharedWorkerGlobalScopeEventMap: o.TYPE,
  SharedWorkerGlobalScope: o.TYPE_VALUE,
  StorageManager: o.TYPE_VALUE,
  SubtleCrypto: o.TYPE_VALUE,
  TextDecoder: o.TYPE_VALUE,
  TextDecoderCommon: o.TYPE,
  TextDecoderStream: o.TYPE_VALUE,
  TextEncoder: o.TYPE_VALUE,
  TextEncoderCommon: o.TYPE,
  TextEncoderStream: o.TYPE_VALUE,
  TextMetrics: o.TYPE_VALUE,
  TransformStream: o.TYPE_VALUE,
  TransformStreamDefaultController: o.TYPE_VALUE,
  URL: o.TYPE_VALUE,
  URLSearchParams: o.TYPE_VALUE,
  VideoColorSpace: o.TYPE_VALUE,
  WEBGL_color_buffer_float: o.TYPE,
  WEBGL_compressed_texture_astc: o.TYPE,
  WEBGL_compressed_texture_etc: o.TYPE,
  WEBGL_compressed_texture_etc1: o.TYPE,
  WEBGL_compressed_texture_s3tc: o.TYPE,
  WEBGL_compressed_texture_s3tc_srgb: o.TYPE,
  WEBGL_debug_renderer_info: o.TYPE,
  WEBGL_debug_shaders: o.TYPE,
  WEBGL_depth_texture: o.TYPE,
  WEBGL_draw_buffers: o.TYPE,
  WEBGL_lose_context: o.TYPE,
  WEBGL_multi_draw: o.TYPE,
  WebGL2RenderingContext: o.TYPE_VALUE,
  WebGL2RenderingContextBase: o.TYPE,
  WebGL2RenderingContextOverloads: o.TYPE,
  WebGLActiveInfo: o.TYPE_VALUE,
  WebGLBuffer: o.TYPE_VALUE,
  WebGLContextEvent: o.TYPE_VALUE,
  WebGLFramebuffer: o.TYPE_VALUE,
  WebGLProgram: o.TYPE_VALUE,
  WebGLQuery: o.TYPE_VALUE,
  WebGLRenderbuffer: o.TYPE_VALUE,
  WebGLRenderingContext: o.TYPE_VALUE,
  WebGLRenderingContextBase: o.TYPE,
  WebGLRenderingContextOverloads: o.TYPE,
  WebGLSampler: o.TYPE_VALUE,
  WebGLShader: o.TYPE_VALUE,
  WebGLShaderPrecisionFormat: o.TYPE_VALUE,
  WebGLSync: o.TYPE_VALUE,
  WebGLTexture: o.TYPE_VALUE,
  WebGLTransformFeedback: o.TYPE_VALUE,
  WebGLUniformLocation: o.TYPE_VALUE,
  WebGLVertexArrayObject: o.TYPE_VALUE,
  WebGLVertexArrayObjectOES: o.TYPE,
  WebSocketEventMap: o.TYPE,
  WebSocket: o.TYPE_VALUE,
  WindowClient: o.TYPE_VALUE,
  WindowOrWorkerGlobalScope: o.TYPE,
  WorkerEventMap: o.TYPE,
  Worker: o.TYPE_VALUE,
  WorkerGlobalScopeEventMap: o.TYPE,
  WorkerGlobalScope: o.TYPE_VALUE,
  WorkerLocation: o.TYPE_VALUE,
  WorkerNavigator: o.TYPE_VALUE,
  WritableStream: o.TYPE_VALUE,
  WritableStreamDefaultController: o.TYPE_VALUE,
  WritableStreamDefaultWriter: o.TYPE_VALUE,
  XMLHttpRequestEventMap: o.TYPE,
  XMLHttpRequest: o.TYPE_VALUE,
  XMLHttpRequestEventTargetEventMap: o.TYPE,
  XMLHttpRequestEventTarget: o.TYPE_VALUE,
  XMLHttpRequestUpload: o.TYPE_VALUE,
  Console: o.TYPE,
  WebAssembly: o.TYPE_VALUE,
  FrameRequestCallback: o.TYPE,
  LockGrantedCallback: o.TYPE,
  OnErrorEventHandlerNonNull: o.TYPE,
  PerformanceObserverCallback: o.TYPE,
  QueuingStrategySize: o.TYPE,
  TransformerFlushCallback: o.TYPE,
  TransformerStartCallback: o.TYPE,
  TransformerTransformCallback: o.TYPE,
  UnderlyingSinkAbortCallback: o.TYPE,
  UnderlyingSinkCloseCallback: o.TYPE,
  UnderlyingSinkStartCallback: o.TYPE,
  UnderlyingSinkWriteCallback: o.TYPE,
  UnderlyingSourceCancelCallback: o.TYPE,
  UnderlyingSourcePullCallback: o.TYPE,
  UnderlyingSourceStartCallback: o.TYPE,
  VoidFunction: o.TYPE,
  AlgorithmIdentifier: o.TYPE,
  BigInteger: o.TYPE,
  BinaryData: o.TYPE,
  BlobPart: o.TYPE,
  BodyInit: o.TYPE,
  BufferSource: o.TYPE,
  CanvasImageSource: o.TYPE,
  DOMHighResTimeStamp: o.TYPE,
  EpochTimeStamp: o.TYPE,
  EventListenerOrEventListenerObject: o.TYPE,
  Float32List: o.TYPE,
  FormDataEntryValue: o.TYPE,
  GLbitfield: o.TYPE,
  GLboolean: o.TYPE,
  GLclampf: o.TYPE,
  GLenum: o.TYPE,
  GLfloat: o.TYPE,
  GLint: o.TYPE,
  GLint64: o.TYPE,
  GLintptr: o.TYPE,
  GLsizei: o.TYPE,
  GLsizeiptr: o.TYPE,
  GLuint: o.TYPE,
  GLuint64: o.TYPE,
  HashAlgorithmIdentifier: o.TYPE,
  HeadersInit: o.TYPE,
  IDBValidKey: o.TYPE,
  ImageBitmapSource: o.TYPE,
  Int32List: o.TYPE,
  MessageEventSource: o.TYPE,
  NamedCurve: o.TYPE,
  OffscreenRenderingContext: o.TYPE,
  OnErrorEventHandler: o.TYPE,
  PerformanceEntryList: o.TYPE,
  PushMessageDataInit: o.TYPE,
  ReadableStreamController: o.TYPE,
  ReadableStreamReadResult: o.TYPE,
  ReadableStreamReader: o.TYPE,
  RequestInfo: o.TYPE,
  TexImageSource: o.TYPE,
  TimerHandler: o.TYPE,
  Transferable: o.TYPE,
  Uint32List: o.TYPE,
  VibratePattern: o.TYPE,
  XMLHttpRequestBodyInit: o.TYPE,
  BinaryType: o.TYPE,
  CanvasDirection: o.TYPE,
  CanvasFillRule: o.TYPE,
  CanvasFontKerning: o.TYPE,
  CanvasFontStretch: o.TYPE,
  CanvasFontVariantCaps: o.TYPE,
  CanvasLineCap: o.TYPE,
  CanvasLineJoin: o.TYPE,
  CanvasTextAlign: o.TYPE,
  CanvasTextBaseline: o.TYPE,
  CanvasTextRendering: o.TYPE,
  ClientTypes: o.TYPE,
  ColorGamut: o.TYPE,
  ColorSpaceConversion: o.TYPE,
  DocumentVisibilityState: o.TYPE,
  EndingType: o.TYPE,
  FileSystemHandleKind: o.TYPE,
  FontFaceLoadStatus: o.TYPE,
  FontFaceSetLoadStatus: o.TYPE,
  FrameType: o.TYPE,
  GlobalCompositeOperation: o.TYPE,
  HdrMetadataType: o.TYPE,
  IDBCursorDirection: o.TYPE,
  IDBRequestReadyState: o.TYPE,
  IDBTransactionDurability: o.TYPE,
  IDBTransactionMode: o.TYPE,
  ImageOrientation: o.TYPE,
  ImageSmoothingQuality: o.TYPE,
  KeyFormat: o.TYPE,
  KeyType: o.TYPE,
  KeyUsage: o.TYPE,
  LockMode: o.TYPE,
  MediaDecodingType: o.TYPE,
  MediaEncodingType: o.TYPE,
  NotificationDirection: o.TYPE,
  NotificationPermission: o.TYPE,
  OffscreenRenderingContextId: o.TYPE,
  PermissionName: o.TYPE,
  PermissionState: o.TYPE,
  PredefinedColorSpace: o.TYPE,
  PremultiplyAlpha: o.TYPE,
  PushEncryptionKeyName: o.TYPE,
  RTCEncodedVideoFrameType: o.TYPE,
  ReadableStreamReaderMode: o.TYPE,
  ReadableStreamType: o.TYPE,
  ReferrerPolicy: o.TYPE,
  RequestCache: o.TYPE,
  RequestCredentials: o.TYPE,
  RequestDestination: o.TYPE,
  RequestMode: o.TYPE,
  RequestRedirect: o.TYPE,
  ResizeQuality: o.TYPE,
  ResponseType: o.TYPE,
  SecurityPolicyViolationEventDisposition: o.TYPE,
  ServiceWorkerState: o.TYPE,
  ServiceWorkerUpdateViaCache: o.TYPE,
  TransferFunction: o.TYPE,
  VideoColorPrimaries: o.TYPE,
  VideoMatrixCoefficients: o.TYPE,
  VideoTransferCharacteristics: o.TYPE,
  WebGLPowerPreference: o.TYPE,
  WorkerType: o.TYPE,
  XMLHttpRequestResponseType: o.TYPE
};
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.webworker_iterable = void 0;
const ie = O;
qi.webworker_iterable = {
  Cache: ie.TYPE,
  CanvasPath: ie.TYPE,
  CanvasPathDrawingStyles: ie.TYPE,
  DOMStringList: ie.TYPE,
  FileList: ie.TYPE,
  FontFaceSet: ie.TYPE,
  FormData: ie.TYPE,
  Headers: ie.TYPE,
  IDBDatabase: ie.TYPE,
  IDBObjectStore: ie.TYPE,
  MessageEvent: ie.TYPE,
  SubtleCrypto: ie.TYPE,
  URLSearchParams: ie.TYPE,
  WEBGL_draw_buffers: ie.TYPE,
  WEBGL_multi_draw: ie.TYPE,
  WebGL2RenderingContextBase: ie.TYPE,
  WebGL2RenderingContextOverloads: ie.TYPE,
  WebGLRenderingContextBase: ie.TYPE,
  WebGLRenderingContextOverloads: ie.TYPE
};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.lib = void 0;
const Mm = Se, Rm = Le, Im = Ot, xm = Oi, Um = wi, $m = cr, Dm = nr, jm = ir, km = sr, Fm = Ce, Nm = ar, Bm = or, Gm = lr, Wm = Ve, Hm = wt, Km = pr, Xm = ur, qm = Mi, zm = Er, Jm = Ri, Qm = Br, Zm = Gr, ey = Wr, ty = Hr, ry = Kr, ny = fr, iy = Xr, sy = Tr, ay = Ii, oy = dr, ly = qr, cy = zr, uy = Pr, py = Jr, Ey = xi, fy = Qr, Ty = Zr, dy = en, Py = tn, _y = _r, hy = rn, my = nn, yy = Ui, Sy = nt, vy = sn, gy = an, by = on, Yy = ln, Ay = cn, Ly = hr, Cy = $i, Vy = un, Oy = pn, wy = En, My = fn, Ry = mr, Iy = Tn, xy = dn, Uy = Di, $y = Pn, Dy = _n, jy = hn, ky = mn, Fy = yn, Ny = ji, By = ki, Gy = Fi, Wy = Ni, Hy = Sn, Ky = Bi, Xy = Gi, qy = Wi, zy = Hi, Jy = Ki, Qy = ve, Zy = Xi, eS = ge, tS = qi, rS = {
  es5: Im.es5,
  es6: xm.es6,
  es2015: $m.es2015,
  es7: Um.es7,
  es2016: Km.es2016,
  es2017: zm.es2017,
  es2018: ny.es2018,
  es2019: uy.es2019,
  es2020: _y.es2020,
  es2021: Ly.es2021,
  es2022: Ry.es2022,
  esnext: Fy.esnext,
  dom: Mm.dom,
  "dom.iterable": Rm.dom_iterable,
  webworker: Zy.webworker,
  "webworker.importscripts": eS.webworker_importscripts,
  "webworker.iterable": tS.webworker_iterable,
  scripthost: Qy.scripthost,
  "es2015.core": jm.es2015_core,
  "es2015.collection": Dm.es2015_collection,
  "es2015.generator": km.es2015_generator,
  "es2015.iterable": Fm.es2015_iterable,
  "es2015.promise": Nm.es2015_promise,
  "es2015.proxy": Bm.es2015_proxy,
  "es2015.reflect": Gm.es2015_reflect,
  "es2015.symbol": Wm.es2015_symbol,
  "es2015.symbol.wellknown": Hm.es2015_symbol_wellknown,
  "es2016.array.include": Xm.es2016_array_include,
  "es2017.object": Zm.es2017_object,
  "es2017.sharedmemory": ey.es2017_sharedmemory,
  "es2017.string": ty.es2017_string,
  "es2017.intl": Qm.es2017_intl,
  "es2017.typedarrays": ry.es2017_typedarrays,
  "es2018.asyncgenerator": iy.es2018_asyncgenerator,
  "es2018.asynciterable": sy.es2018_asynciterable,
  "es2018.intl": oy.es2018_intl,
  "es2018.promise": ly.es2018_promise,
  "es2018.regexp": cy.es2018_regexp,
  "es2019.array": py.es2019_array,
  "es2019.object": Ty.es2019_object,
  "es2019.string": dy.es2019_string,
  "es2019.symbol": Py.es2019_symbol,
  "es2019.intl": fy.es2019_intl,
  "es2020.bigint": hy.es2020_bigint,
  "es2020.date": my.es2020_date,
  "es2020.promise": gy.es2020_promise,
  "es2020.sharedmemory": by.es2020_sharedmemory,
  "es2020.string": Yy.es2020_string,
  "es2020.symbol.wellknown": Ay.es2020_symbol_wellknown,
  "es2020.intl": Sy.es2020_intl,
  "es2020.number": vy.es2020_number,
  "es2021.promise": Oy.es2021_promise,
  "es2021.string": wy.es2021_string,
  "es2021.weakref": My.es2021_weakref,
  "es2021.intl": Vy.es2021_intl,
  "es2022.array": Iy.es2022_array,
  "es2022.error": xy.es2022_error,
  "es2022.intl": $y.es2022_intl,
  "es2022.object": Dy.es2022_object,
  "es2022.sharedmemory": jy.es2022_sharedmemory,
  "es2022.string": ky.es2022_string,
  "esnext.array": Ny.esnext_array,
  "esnext.symbol": qy.esnext_symbol,
  "esnext.asynciterable": By.esnext_asynciterable,
  "esnext.intl": Hy.esnext_intl,
  "esnext.bigint": Gy.esnext_bigint,
  "esnext.string": Xy.esnext_string,
  "esnext.promise": Ky.esnext_promise,
  "esnext.weakref": zy.esnext_weakref,
  "es2016.full": qm.es2016_full,
  "es2017.full": Jm.es2017_full,
  "es2018.full": ay.es2018_full,
  "es2019.full": Ey.es2019_full,
  "es2020.full": yy.es2020_full,
  "es2021.full": Cy.es2021_full,
  "es2022.full": Uy.es2022_full,
  "esnext.full": Wy.esnext_full,
  lib: Jy.lib
};
Nr.lib = rS;
var jl = {}, zi = {}, dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.assert = void 0;
function nS(r, e) {
  if (r == null)
    throw new Error(e);
}
dt.assert = nS;
var Pt = {}, Ji = {}, _e = {}, rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.resetIds = rt.createIdGenerator = void 0;
const Gn = /* @__PURE__ */ new Map();
let iS = 0;
function sS() {
  const r = iS += 1;
  return Gn.set(r, 0), () => {
    var e;
    const i = ((e = Gn.get(r)) !== null && e !== void 0 ? e : 0) + 1;
    return Gn.set(r, i), i;
  };
}
rt.createIdGenerator = sS;
function aS() {
  Gn.clear();
}
rt.resetIds = aS;
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.DefinitionBase = void 0;
const oS = rt, lS = (0, oS.createIdGenerator)();
class cS {
  constructor(e, t, i, s) {
    this.$id = lS(), this.type = e, this.name = t, this.node = i, this.parent = s;
  }
}
_e.DefinitionBase = cS;
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.DefinitionType = void 0;
var ua;
(function(r) {
  r.CatchClause = "CatchClause", r.ClassName = "ClassName", r.FunctionName = "FunctionName", r.ImplicitGlobalVariable = "ImplicitGlobalVariable", r.ImportBinding = "ImportBinding", r.Parameter = "Parameter", r.TSEnumName = "TSEnumName", r.TSEnumMember = "TSEnumMemberName", r.TSModuleName = "TSModuleName", r.Type = "Type", r.Variable = "Variable";
})(ua || (ua = {}));
Pe.DefinitionType = ua;
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.CatchClauseDefinition = void 0;
const uS = _e, pS = Pe;
class ES extends uS.DefinitionBase {
  constructor(e, t) {
    super(pS.DefinitionType.CatchClause, e, t, null), this.isTypeDefinition = !1, this.isVariableDefinition = !0;
  }
}
Ji.CatchClauseDefinition = ES;
var Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.ClassNameDefinition = void 0;
const fS = _e, TS = Pe;
class dS extends fS.DefinitionBase {
  constructor(e, t) {
    super(TS.DefinitionType.ClassName, e, t, null), this.isTypeDefinition = !0, this.isVariableDefinition = !0;
  }
}
Qi.ClassNameDefinition = dS;
var kl = {};
Object.defineProperty(kl, "__esModule", { value: !0 });
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.FunctionNameDefinition = void 0;
const PS = _e, _S = Pe;
class hS extends PS.DefinitionBase {
  constructor(e, t) {
    super(_S.DefinitionType.FunctionName, e, t, null), this.isTypeDefinition = !1, this.isVariableDefinition = !0;
  }
}
Zi.FunctionNameDefinition = hS;
var vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.ImplicitGlobalVariableDefinition = void 0;
const mS = _e, yS = Pe;
class SS extends mS.DefinitionBase {
  constructor(e, t) {
    super(yS.DefinitionType.ImplicitGlobalVariable, e, t, null), this.isTypeDefinition = !1, this.isVariableDefinition = !0;
  }
}
vn.ImplicitGlobalVariableDefinition = SS;
var es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.ImportBindingDefinition = void 0;
const vS = _e, gS = Pe;
class bS extends vS.DefinitionBase {
  constructor(e, t, i) {
    super(gS.DefinitionType.ImportBinding, e, t, i), this.isTypeDefinition = !0, this.isVariableDefinition = !0;
  }
}
es.ImportBindingDefinition = bS;
var ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.ParameterDefinition = void 0;
const YS = _e, AS = Pe;
class LS extends YS.DefinitionBase {
  constructor(e, t, i) {
    super(AS.DefinitionType.Parameter, e, t, null), this.isTypeDefinition = !1, this.isVariableDefinition = !0, this.rest = i;
  }
}
ts.ParameterDefinition = LS;
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.TSEnumMemberDefinition = void 0;
const CS = _e, VS = Pe;
class OS extends CS.DefinitionBase {
  constructor(e, t) {
    super(VS.DefinitionType.TSEnumMember, e, t, null), this.isTypeDefinition = !0, this.isVariableDefinition = !0;
  }
}
rs.TSEnumMemberDefinition = OS;
var ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.TSEnumNameDefinition = void 0;
const wS = _e, MS = Pe;
class RS extends wS.DefinitionBase {
  constructor(e, t) {
    super(MS.DefinitionType.TSEnumName, e, t, null), this.isTypeDefinition = !0, this.isVariableDefinition = !0;
  }
}
ns.TSEnumNameDefinition = RS;
var is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
is.TSModuleNameDefinition = void 0;
const IS = _e, xS = Pe;
class US extends IS.DefinitionBase {
  constructor(e, t) {
    super(xS.DefinitionType.TSModuleName, e, t, null), this.isTypeDefinition = !0, this.isVariableDefinition = !0;
  }
}
is.TSModuleNameDefinition = US;
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.TypeDefinition = void 0;
const $S = _e, DS = Pe;
class jS extends $S.DefinitionBase {
  constructor(e, t) {
    super(DS.DefinitionType.Type, e, t, null), this.isTypeDefinition = !0, this.isVariableDefinition = !1;
  }
}
ss.TypeDefinition = jS;
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.VariableDefinition = void 0;
const kS = _e, FS = Pe;
class NS extends kS.DefinitionBase {
  constructor(e, t, i) {
    super(FS.DefinitionType.Variable, e, t, i), this.isTypeDefinition = !1, this.isVariableDefinition = !0;
  }
}
as.VariableDefinition = NS;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(i, s, a, l) {
    l === void 0 && (l = a);
    var c = Object.getOwnPropertyDescriptor(s, a);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[a];
    } }), Object.defineProperty(i, l, c);
  } : function(i, s, a, l) {
    l === void 0 && (l = a), i[l] = s[a];
  }), t = p && p.__exportStar || function(i, s) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), t(Ji, r), t(Qi, r), t(kl, r), t(Pe, r), t(Zi, r), t(vn, r), t(es, r), t(ts, r), t(rs, r), t(ns, r), t(is, r), t(ss, r), t(as, r);
})(Pt);
var os = {}, gn = {}, ls = {}, cs = {}, te = {}, We = {}, mt = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Oo = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, ut, Lr;
Object.defineProperty(We, "__esModule", { value: !0 });
We.ReferenceTypeFlag = We.ReferenceFlag = We.Reference = void 0;
const BS = rt;
var pt;
(function(r) {
  r[r.Read = 1] = "Read", r[r.Write = 2] = "Write", r[r.ReadWrite = 3] = "ReadWrite";
})(pt || (pt = {}));
We.ReferenceFlag = pt;
const GS = (0, BS.createIdGenerator)();
var Kt;
(function(r) {
  r[r.Value = 1] = "Value", r[r.Type = 2] = "Type";
})(Kt || (Kt = {}));
We.ReferenceTypeFlag = Kt;
class WS {
  get isTypeReference() {
    return (mt(this, Lr, "f") & Kt.Type) !== 0;
  }
  get isValueReference() {
    return (mt(this, Lr, "f") & Kt.Value) !== 0;
  }
  constructor(e, t, i, s, a, l, c = Kt.Value) {
    this.$id = GS(), ut.set(this, void 0), Lr.set(this, void 0), this.identifier = e, this.from = t, this.resolved = null, Oo(this, ut, i, "f"), this.isWrite() && (this.writeExpr = s, this.init = l), this.maybeImplicitGlobal = a, Oo(this, Lr, c, "f");
  }
  isWrite() {
    return !!(mt(this, ut, "f") & pt.Write);
  }
  isRead() {
    return !!(mt(this, ut, "f") & pt.Read);
  }
  isReadOnly() {
    return mt(this, ut, "f") === pt.Read;
  }
  isWriteOnly() {
    return mt(this, ut, "f") === pt.Write;
  }
  isReadWrite() {
    return mt(this, ut, "f") === pt.ReadWrite;
  }
}
We.Reference = WS;
ut = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap();
var us = {}, bn = {}, Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.VariableBase = void 0;
const HS = rt, KS = (0, HS.createIdGenerator)();
class XS {
  constructor(e, t) {
    this.$id = KS(), this.defs = [], this.eslintUsed = !1, this.identifiers = [], this.references = [], this.name = e, this.scope = t;
  }
}
Yn.VariableBase = XS;
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.ESLintScopeVariable = void 0;
const qS = Yn;
class zS extends qS.VariableBase {
}
bn.ESLintScopeVariable = zS;
var ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.ImplicitLibVariable = void 0;
const JS = bn;
class QS extends JS.ESLintScopeVariable {
  constructor(e, t, { isTypeVariable: i, isValueVariable: s, writeable: a, eslintImplicitGlobalSetting: l }) {
    super(t, e), this.isTypeVariable = i != null ? i : !1, this.isValueVariable = s != null ? s : !1, this.writeable = a != null ? a : !1, this.eslintImplicitGlobalSetting = l != null ? l : "readonly";
  }
}
ps.ImplicitLibVariable = QS;
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.Variable = void 0;
const ZS = Yn;
class ev extends ZS.VariableBase {
  get isTypeVariable() {
    return this.defs.length === 0 ? !0 : this.defs.some((e) => e.isTypeDefinition);
  }
  get isValueVariable() {
    return this.defs.length === 0 ? !0 : this.defs.some((e) => e.isVariableDefinition);
  }
}
Es.Variable = ev;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Variable = r.ImplicitLibVariable = r.ESLintScopeVariable = void 0;
  var e = bn;
  Object.defineProperty(r, "ESLintScopeVariable", { enumerable: !0, get: function() {
    return e.ESLintScopeVariable;
  } });
  var t = ps;
  Object.defineProperty(r, "ImplicitLibVariable", { enumerable: !0, get: function() {
    return t.ImplicitLibVariable;
  } });
  var i = Es;
  Object.defineProperty(r, "Variable", { enumerable: !0, get: function() {
    return i.Variable;
  } });
})(us);
var Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.ScopeType = void 0;
var pa;
(function(r) {
  r.block = "block", r.catch = "catch", r.class = "class", r.classFieldInitializer = "class-field-initializer", r.classStaticBlock = "class-static-block", r.conditionalType = "conditionalType", r.for = "for", r.function = "function", r.functionExpressionName = "function-expression-name", r.functionType = "functionType", r.global = "global", r.mappedType = "mappedType", r.module = "module", r.switch = "switch", r.tsEnum = "tsEnum", r.tsModule = "tsModule", r.type = "type", r.with = "with";
})(pa || (pa = {}));
Q.ScopeType = pa;
var wo = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, ot = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Cr, Wn, Hn, Kn, Ea;
Object.defineProperty(te, "__esModule", { value: !0 });
te.ScopeBase = void 0;
const jt = Ke, tv = dt, rv = Pt, nv = rt, Fe = We, iv = us, ne = Q;
function sv(r, e, t) {
  var i;
  let s;
  if (!((i = r.upper) === null || i === void 0) && i.isStrict || t || r.type === ne.ScopeType.class || r.type === ne.ScopeType.conditionalType || r.type === ne.ScopeType.functionType || r.type === ne.ScopeType.mappedType || r.type === ne.ScopeType.module || r.type === ne.ScopeType.tsEnum || r.type === ne.ScopeType.tsModule || r.type === ne.ScopeType.type)
    return !0;
  if (r.type === ne.ScopeType.block || r.type === ne.ScopeType.switch)
    return !1;
  if (r.type === ne.ScopeType.function) {
    const a = e;
    switch (a.type) {
      case jt.AST_NODE_TYPES.ArrowFunctionExpression:
        if (a.body.type !== jt.AST_NODE_TYPES.BlockStatement)
          return !1;
        s = a.body;
        break;
      case jt.AST_NODE_TYPES.Program:
        s = a;
        break;
      default:
        s = a.body;
    }
    if (!s)
      return !1;
  } else if (r.type === ne.ScopeType.global)
    s = e;
  else
    return !1;
  for (const a of s.body) {
    if (a.type !== jt.AST_NODE_TYPES.ExpressionStatement)
      break;
    if (a.directive === "use strict")
      return !0;
    const l = a.expression;
    if (l.type !== jt.AST_NODE_TYPES.Literal)
      break;
    if (l.raw === '"use strict"' || l.raw === "'use strict'" || l.value === "use strict")
      return !0;
  }
  return !1;
}
function av(r, e) {
  r.scopes.push(e);
  const t = r.nodeToScope.get(e.block);
  t ? t.push(e) : r.nodeToScope.set(e.block, [e]);
}
const ov = (0, nv.createIdGenerator)(), lv = /* @__PURE__ */ new Set([
  ne.ScopeType.classFieldInitializer,
  ne.ScopeType.classStaticBlock,
  ne.ScopeType.function,
  ne.ScopeType.global,
  ne.ScopeType.module,
  ne.ScopeType.tsModule
]);
class cv {
  constructor(e, t, i, s, a) {
    this.$id = ov(), this.childScopes = [], Cr.set(this, void 0), Wn.set(this, void 0), this.functionExpressionScope = !1, this.leftToResolve = [], this.references = [], this.set = /* @__PURE__ */ new Map(), this.through = [], this.variables = [], Hn.set(this, (c) => {
      (() => {
        const Y = c.identifier.name, T = this.set.get(Y);
        if (!T || !this.isValidResolution(c, T))
          return !1;
        const f = c.isTypeReference && T.isTypeVariable, v = c.isValueReference && T.isValueVariable;
        return !f && !v ? !1 : (T.references.push(c), c.resolved = T, !0);
      })() || this.delegateToUpperScope(c);
    }), Kn.set(this, (c) => {
      let u = this;
      do
        u.through.push(c), u = u.upper;
      while (u);
    }), Ea.set(this, (c, u) => {
      this.shouldStaticallyCloseForGlobal(c, u) ? ot(this, Hn, "f").call(this, c) : ot(this, Kn, "f").call(this, c);
    });
    const l = i;
    this.type = t, wo(this, Wn, this.type === ne.ScopeType.global || this.type === ne.ScopeType.with, "f"), this.block = s, this.variableScope = this.isVariableScope() ? this : l.variableScope, this.upper = i, this.isStrict = sv(this, s, a), l && l.childScopes.push(this), wo(this, Cr, e.declaredVariables, "f"), av(e, this);
  }
  isVariableScope() {
    return lv.has(this.type);
  }
  shouldStaticallyClose() {
    return !ot(this, Wn, "f");
  }
  shouldStaticallyCloseForGlobal(e, t) {
    const i = e.identifier.name, s = this.set.get(i);
    if (!s)
      return !1;
    if (t.isModule())
      return !0;
    const a = s.defs;
    return a.length > 0 && a.every((l) => {
      var c;
      return !(l.type === rv.DefinitionType.Variable && ((c = l.parent) === null || c === void 0 ? void 0 : c.type) === jt.AST_NODE_TYPES.VariableDeclaration && l.parent.kind === "var");
    });
  }
  close(e) {
    let t;
    return this.shouldStaticallyClose() ? t = ot(this, Hn, "f") : this.type !== "global" ? t = ot(this, Kn, "f") : t = ot(this, Ea, "f"), (0, tv.assert)(this.leftToResolve), this.leftToResolve.forEach((i) => t(i, e)), this.leftToResolve = null, this.upper;
  }
  isValidResolution(e, t) {
    return !0;
  }
  delegateToUpperScope(e) {
    const t = this.upper;
    t != null && t.leftToResolve && t.leftToResolve.push(e), this.through.push(e);
  }
  addDeclaredVariablesOfNode(e, t) {
    if (t == null)
      return;
    let i = ot(this, Cr, "f").get(t);
    i == null && (i = [], ot(this, Cr, "f").set(t, i)), i.includes(e) || i.push(e);
  }
  defineVariable(e, t, i, s, a) {
    const l = typeof e == "string" ? e : e.name;
    let c = t.get(l);
    c || (c = typeof e == "string" ? new iv.Variable(l, this) : e, t.set(l, c), i.push(c)), a && (c.defs.push(a), this.addDeclaredVariablesOfNode(c, a.node), this.addDeclaredVariablesOfNode(c, a.parent)), s && c.identifiers.push(s);
  }
  defineIdentifier(e, t) {
    this.defineVariable(e.name, this.set, this.variables, e, t);
  }
  defineLiteralIdentifier(e, t) {
    this.defineVariable(e.value, this.set, this.variables, null, t);
  }
  referenceValue(e, t = Fe.ReferenceFlag.Read, i, s, a = !1) {
    var l;
    const c = new Fe.Reference(e, this, t, i, s, a, Fe.ReferenceTypeFlag.Value);
    this.references.push(c), (l = this.leftToResolve) === null || l === void 0 || l.push(c);
  }
  referenceType(e) {
    var t;
    const i = new Fe.Reference(e, this, Fe.ReferenceFlag.Read, null, null, !1, Fe.ReferenceTypeFlag.Type);
    this.references.push(i), (t = this.leftToResolve) === null || t === void 0 || t.push(i);
  }
  referenceDualValueType(e) {
    var t;
    const i = new Fe.Reference(e, this, Fe.ReferenceFlag.Read, null, null, !1, Fe.ReferenceTypeFlag.Type | Fe.ReferenceTypeFlag.Value);
    this.references.push(i), (t = this.leftToResolve) === null || t === void 0 || t.push(i);
  }
}
te.ScopeBase = cv;
Cr = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap();
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.BlockScope = void 0;
const uv = te, pv = Q;
class Ev extends uv.ScopeBase {
  constructor(e, t, i) {
    super(e, pv.ScopeType.block, t, i, !1);
  }
}
cs.BlockScope = Ev;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.CatchScope = void 0;
const fv = te, Tv = Q;
class dv extends fv.ScopeBase {
  constructor(e, t, i) {
    super(e, Tv.ScopeType.catch, t, i, !1);
  }
}
fs.CatchScope = dv;
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
An.ClassFieldInitializerScope = void 0;
const Pv = te, _v = Q;
class hv extends Pv.ScopeBase {
  constructor(e, t, i) {
    super(e, _v.ScopeType.classFieldInitializer, t, i, !1);
  }
}
An.ClassFieldInitializerScope = hv;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.ClassScope = void 0;
const mv = te, yv = Q;
class Sv extends mv.ScopeBase {
  constructor(e, t, i) {
    super(e, yv.ScopeType.class, t, i, !1);
  }
}
Ts.ClassScope = Sv;
var ds = {};
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.ConditionalTypeScope = void 0;
const vv = te, gv = Q;
class bv extends vv.ScopeBase {
  constructor(e, t, i) {
    super(e, gv.ScopeType.conditionalType, t, i, !1);
  }
}
ds.ConditionalTypeScope = bv;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.ForScope = void 0;
const Yv = te, Av = Q;
class Lv extends Yv.ScopeBase {
  constructor(e, t, i) {
    super(e, Av.ScopeType.for, t, i, !1);
  }
}
Ps.ForScope = Lv;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.FunctionExpressionNameScope = void 0;
const Cv = Pt, Vv = te, Ov = Q;
class wv extends Vv.ScopeBase {
  constructor(e, t, i) {
    super(e, Ov.ScopeType.functionExpressionName, t, i, !1), i.id && this.defineIdentifier(i.id, new Cv.FunctionNameDefinition(i.id, i)), this.functionExpressionScope = !0;
  }
}
_s.FunctionExpressionNameScope = wv;
var hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.FunctionScope = void 0;
const Mo = Ke, Mv = te, Rv = Q;
class Iv extends Mv.ScopeBase {
  constructor(e, t, i, s) {
    super(e, Rv.ScopeType.function, t, i, s), this.block.type !== Mo.AST_NODE_TYPES.ArrowFunctionExpression && this.defineVariable("arguments", this.set, this.variables, null, null);
  }
  isValidResolution(e, t) {
    var i, s;
    if (this.block.type === Mo.AST_NODE_TYPES.Program)
      return !0;
    const a = (s = (i = this.block.body) === null || i === void 0 ? void 0 : i.range[0]) !== null && s !== void 0 ? s : -1;
    return !(t.scope === this && e.identifier.range[0] < a && t.defs.every((l) => l.name.range[0] >= a));
  }
}
hs.FunctionScope = Iv;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.FunctionTypeScope = void 0;
const xv = te, Uv = Q;
class $v extends xv.ScopeBase {
  constructor(e, t, i) {
    super(e, Uv.ScopeType.functionType, t, i, !1);
  }
}
ms.FunctionTypeScope = $v;
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.GlobalScope = void 0;
const Dv = Ke, jv = dt, kv = vn, Fv = us, Nv = te, Bv = Q;
class Gv extends Nv.ScopeBase {
  constructor(e, t) {
    super(e, Bv.ScopeType.global, null, t, !1), this.implicit = {
      set: /* @__PURE__ */ new Map(),
      variables: [],
      leftToBeResolved: []
    };
  }
  defineImplicitVariable(e, t) {
    this.defineVariable(new Fv.ImplicitLibVariable(this, e, t), this.set, this.variables, null, null);
  }
  close(e) {
    (0, jv.assert)(this.leftToResolve);
    for (const t of this.leftToResolve)
      if (t.maybeImplicitGlobal && !this.set.has(t.identifier.name)) {
        const i = t.maybeImplicitGlobal, s = i.pattern;
        s && s.type === Dv.AST_NODE_TYPES.Identifier && this.defineVariable(s.name, this.implicit.set, this.implicit.variables, s, new kv.ImplicitGlobalVariableDefinition(i.pattern, i.node));
      }
    return this.implicit.leftToBeResolved = this.leftToResolve, super.close(e);
  }
}
ys.GlobalScope = Gv;
var Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.MappedTypeScope = void 0;
const Wv = te, Hv = Q;
class Kv extends Wv.ScopeBase {
  constructor(e, t, i) {
    super(e, Hv.ScopeType.mappedType, t, i, !1);
  }
}
Ss.MappedTypeScope = Kv;
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.ModuleScope = void 0;
const Xv = te, qv = Q;
class zv extends Xv.ScopeBase {
  constructor(e, t, i) {
    super(e, qv.ScopeType.module, t, i, !1);
  }
}
vs.ModuleScope = zv;
var Fl = {};
Object.defineProperty(Fl, "__esModule", { value: !0 });
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.SwitchScope = void 0;
const Jv = te, Qv = Q;
class Zv extends Jv.ScopeBase {
  constructor(e, t, i) {
    super(e, Qv.ScopeType.switch, t, i, !1);
  }
}
gs.SwitchScope = Zv;
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.TSEnumScope = void 0;
const eg = te, tg = Q;
class rg extends eg.ScopeBase {
  constructor(e, t, i) {
    super(e, tg.ScopeType.tsEnum, t, i, !1);
  }
}
bs.TSEnumScope = rg;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.TSModuleScope = void 0;
const ng = te, ig = Q;
class sg extends ng.ScopeBase {
  constructor(e, t, i) {
    super(e, ig.ScopeType.tsModule, t, i, !1);
  }
}
Ys.TSModuleScope = sg;
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
As.TypeScope = void 0;
const ag = te, og = Q;
class lg extends ag.ScopeBase {
  constructor(e, t, i) {
    super(e, og.ScopeType.type, t, i, !1);
  }
}
As.TypeScope = lg;
var Ls = {};
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.WithScope = void 0;
const cg = dt, ug = te, pg = Q;
class Eg extends ug.ScopeBase {
  constructor(e, t, i) {
    super(e, pg.ScopeType.with, t, i, !1);
  }
  close(e) {
    return this.shouldStaticallyClose() ? super.close(e) : ((0, cg.assert)(this.leftToResolve), this.leftToResolve.forEach((t) => this.delegateToUpperScope(t)), this.leftToResolve = null, this.upper);
  }
}
Ls.WithScope = Eg;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(i, s, a, l) {
    l === void 0 && (l = a);
    var c = Object.getOwnPropertyDescriptor(s, a);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[a];
    } }), Object.defineProperty(i, l, c);
  } : function(i, s, a, l) {
    l === void 0 && (l = a), i[l] = s[a];
  }), t = p && p.__exportStar || function(i, s) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), t(cs, r), t(fs, r), t(An, r), t(Ts, r), t(ds, r), t(Ps, r), t(_s, r), t(hs, r), t(ms, r), t(ys, r), t(Ss, r), t(vs, r), t(Fl, r), t(Q, r), t(gs, r), t(bs, r), t(Ys, r), t(As, r), t(Ls, r);
})(ls);
var Mt = {}, yr = {}, Ln = {}, Ro = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, Io = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Xn, qn;
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.VisitorBase = void 0;
const fg = Da;
function Tg(r) {
  return typeof r == "object" && r != null;
}
function xo(r) {
  return Tg(r) && typeof r.type == "string";
}
class dg {
  constructor(e) {
    var t, i;
    Xn.set(this, void 0), qn.set(this, void 0), Ro(this, Xn, (t = e.childVisitorKeys) !== null && t !== void 0 ? t : fg.visitorKeys, "f"), Ro(this, qn, (i = e.visitChildrenEvenIfSelectorExists) !== null && i !== void 0 ? i : !1, "f");
  }
  visitChildren(e, t = []) {
    var i;
    if (e == null || e.type == null)
      return;
    const s = new Set(t.concat(["parent"])), a = (i = Io(this, Xn, "f")[e.type]) !== null && i !== void 0 ? i : Object.keys(e);
    for (const l of a) {
      if (s.has(l))
        continue;
      const c = e[l];
      if (!!c)
        if (Array.isArray(c))
          for (const u of c)
            xo(u) && this.visit(u);
        else
          xo(c) && this.visit(c);
    }
  }
  visit(e) {
    if (e == null || e.type == null)
      return;
    const t = this[e.type];
    t && (t.call(this, e), !Io(this, qn, "f")) || this.visitChildren(e);
  }
}
Ln.VisitorBase = dg;
Xn = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap();
var Uo = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, we = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, zn, Jn, gt, kt;
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.PatternVisitor = void 0;
const xt = Ke, Pg = Ln;
class _g extends Pg.VisitorBase {
  static isPattern(e) {
    const t = e.type;
    return t === xt.AST_NODE_TYPES.Identifier || t === xt.AST_NODE_TYPES.ObjectPattern || t === xt.AST_NODE_TYPES.ArrayPattern || t === xt.AST_NODE_TYPES.SpreadElement || t === xt.AST_NODE_TYPES.RestElement || t === xt.AST_NODE_TYPES.AssignmentPattern;
  }
  constructor(e, t, i) {
    super(e), zn.set(this, void 0), Jn.set(this, void 0), gt.set(this, []), this.rightHandNodes = [], kt.set(this, []), Uo(this, zn, t, "f"), Uo(this, Jn, i, "f");
  }
  ArrayExpression(e) {
    e.elements.forEach(this.visit, this);
  }
  ArrayPattern(e) {
    for (const t of e.elements)
      this.visit(t);
  }
  AssignmentExpression(e) {
    we(this, gt, "f").push(e), this.visit(e.left), this.rightHandNodes.push(e.right), we(this, gt, "f").pop();
  }
  AssignmentPattern(e) {
    we(this, gt, "f").push(e), this.visit(e.left), this.rightHandNodes.push(e.right), we(this, gt, "f").pop();
  }
  CallExpression(e) {
    e.arguments.forEach((t) => {
      this.rightHandNodes.push(t);
    }), this.visit(e.callee);
  }
  Decorator() {
  }
  Identifier(e) {
    var t;
    const i = (t = we(this, kt, "f")[we(this, kt, "f").length - 1]) !== null && t !== void 0 ? t : null;
    we(this, Jn, "f").call(this, e, {
      topLevel: e === we(this, zn, "f"),
      rest: i != null && i.argument === e,
      assignments: we(this, gt, "f")
    });
  }
  MemberExpression(e) {
    e.computed && this.rightHandNodes.push(e.property), this.rightHandNodes.push(e.object);
  }
  Property(e) {
    e.computed && this.rightHandNodes.push(e.key), this.visit(e.value);
  }
  RestElement(e) {
    we(this, kt, "f").push(e), this.visit(e.argument), we(this, kt, "f").pop();
  }
  SpreadElement(e) {
    this.visit(e.argument);
  }
  TSTypeAnnotation() {
  }
}
yr.PatternVisitor = _g;
zn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap();
(function(r) {
  var e = p && p.__classPrivateFieldGet || function(c, u, Y, T) {
    if (Y === "a" && !T)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof u == "function" ? c !== u || !T : !u.has(c))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return Y === "m" ? T : Y === "a" ? T.call(c) : T ? T.value : u.get(c);
  }, t = p && p.__classPrivateFieldSet || function(c, u, Y, T, f) {
    if (T === "m")
      throw new TypeError("Private method is not writable");
    if (T === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof u == "function" ? c !== u || !f : !u.has(c))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return T === "a" ? f.call(c, Y) : f ? f.value = Y : u.set(c, Y), Y;
  }, i;
  Object.defineProperty(r, "__esModule", { value: !0 }), r.VisitorBase = r.Visitor = void 0;
  const s = yr, a = Ln;
  Object.defineProperty(r, "VisitorBase", { enumerable: !0, get: function() {
    return a.VisitorBase;
  } });
  class l extends a.VisitorBase {
    constructor(u) {
      super(u instanceof l ? e(u, i, "f") : u), i.set(this, void 0), t(this, i, u instanceof l ? e(u, i, "f") : u, "f");
    }
    visitPattern(u, Y, T = { processRightHandNodes: !1 }) {
      const f = new s.PatternVisitor(e(this, i, "f"), u, Y);
      f.visit(u), T.processRightHandNodes && f.rightHandNodes.forEach(this.visit, this);
    }
  }
  r.Visitor = l, i = /* @__PURE__ */ new WeakMap();
})(Mt);
var hg = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, se = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Z;
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.TypeVisitor = void 0;
const br = Ke, Yr = Pt, Ar = ls, mg = Mt;
class ja extends mg.Visitor {
  constructor(e) {
    super(e), Z.set(this, void 0), hg(this, Z, e, "f");
  }
  static visit(e, t) {
    new ja(e).visit(t);
  }
  visitFunctionType(e) {
    se(this, Z, "f").scopeManager.nestFunctionTypeScope(e), this.visit(e.typeParameters);
    for (const t of e.params) {
      let i = !1;
      this.visitPattern(t, (s, a) => {
        se(this, Z, "f").currentScope().defineIdentifier(s, new Yr.ParameterDefinition(s, e, a.rest)), s.typeAnnotation && (this.visit(s.typeAnnotation), i = !0);
      }), !i && "typeAnnotation" in t && this.visit(t.typeAnnotation);
    }
    this.visit(e.returnType), se(this, Z, "f").close(e);
  }
  visitPropertyKey(e) {
    !e.computed || se(this, Z, "f").visit(e.key);
  }
  Identifier(e) {
    se(this, Z, "f").currentScope().referenceType(e);
  }
  MemberExpression(e) {
    this.visit(e.object);
  }
  TSCallSignatureDeclaration(e) {
    this.visitFunctionType(e);
  }
  TSConditionalType(e) {
    se(this, Z, "f").scopeManager.nestConditionalTypeScope(e), this.visitChildren(e, ["falseType"]), se(this, Z, "f").close(e), this.visit(e.falseType);
  }
  TSConstructorType(e) {
    this.visitFunctionType(e);
  }
  TSConstructSignatureDeclaration(e) {
    this.visitFunctionType(e);
  }
  TSFunctionType(e) {
    this.visitFunctionType(e);
  }
  TSImportType(e) {
    this.visit(e.typeParameters);
  }
  TSIndexSignature(e) {
    for (const t of e.parameters)
      t.type === br.AST_NODE_TYPES.Identifier && this.visit(t.typeAnnotation);
    this.visit(e.typeAnnotation);
  }
  TSInferType(e) {
    const t = e.typeParameter;
    let i = se(this, Z, "f").currentScope();
    if (i.type === Ar.ScopeType.functionType || i.type === Ar.ScopeType.mappedType) {
      let s = i.upper;
      for (; s; ) {
        if (s.type === Ar.ScopeType.functionType || s.type === Ar.ScopeType.mappedType) {
          s = s.upper;
          continue;
        }
        if (s.type === Ar.ScopeType.conditionalType) {
          i = s;
          break;
        }
        break;
      }
    }
    i.defineIdentifier(t.name, new Yr.TypeDefinition(t.name, t)), this.visit(t.constraint);
  }
  TSInterfaceDeclaration(e) {
    var t, i;
    se(this, Z, "f").currentScope().defineIdentifier(e.id, new Yr.TypeDefinition(e.id, e)), e.typeParameters && (se(this, Z, "f").scopeManager.nestTypeScope(e), this.visit(e.typeParameters)), (t = e.extends) === null || t === void 0 || t.forEach(this.visit, this), (i = e.implements) === null || i === void 0 || i.forEach(this.visit, this), this.visit(e.body), e.typeParameters && se(this, Z, "f").close(e);
  }
  TSMappedType(e) {
    se(this, Z, "f").scopeManager.nestMappedTypeScope(e), this.visitChildren(e), se(this, Z, "f").close(e);
  }
  TSMethodSignature(e) {
    this.visitPropertyKey(e), this.visitFunctionType(e);
  }
  TSNamedTupleMember(e) {
    this.visit(e.elementType);
  }
  TSPropertySignature(e) {
    this.visitPropertyKey(e), this.visit(e.typeAnnotation);
  }
  TSQualifiedName(e) {
    this.visit(e.left);
  }
  TSTypeAliasDeclaration(e) {
    se(this, Z, "f").currentScope().defineIdentifier(e.id, new Yr.TypeDefinition(e.id, e)), e.typeParameters && (se(this, Z, "f").scopeManager.nestTypeScope(e), this.visit(e.typeParameters)), this.visit(e.typeAnnotation), e.typeParameters && se(this, Z, "f").close(e);
  }
  TSTypeParameter(e) {
    se(this, Z, "f").currentScope().defineIdentifier(e.name, new Yr.TypeDefinition(e.name, e)), this.visit(e.constraint), this.visit(e.default);
  }
  TSTypePredicate(e) {
    e.parameterName.type !== br.AST_NODE_TYPES.TSThisType && se(this, Z, "f").currentScope().referenceValue(e.parameterName), this.visit(e.typeAnnotation);
  }
  TSTypeQuery(e) {
    let t;
    if (e.exprName.type === br.AST_NODE_TYPES.TSQualifiedName) {
      let i = e.exprName;
      for (; i.left.type === br.AST_NODE_TYPES.TSQualifiedName; )
        i = i.left;
      t = i.left;
    } else
      t = e.exprName;
    t.type === br.AST_NODE_TYPES.Identifier && se(this, Z, "f").currentScope().referenceValue(t), this.visit(e.typeParameters);
  }
  TSTypeAnnotation(e) {
    this.visitChildren(e);
  }
}
gn.TypeVisitor = ja;
Z = /* @__PURE__ */ new WeakMap();
var ia = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, W = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, bt, K, Qn;
Object.defineProperty(os, "__esModule", { value: !0 });
os.ClassVisitor = void 0;
const Te = Ke, sa = Pt, yg = gn, Sg = Mt;
class ka extends Sg.Visitor {
  constructor(e, t, i) {
    super(e), bt.set(this, void 0), K.set(this, void 0), Qn.set(this, void 0), ia(this, K, e, "f"), ia(this, bt, t, "f"), ia(this, Qn, i, "f");
  }
  static visit(e, t, i) {
    new ka(e, t, i).visitClass(t);
  }
  visit(e) {
    e && e.type in this ? super.visit(e) : W(this, K, "f").visit(e);
  }
  visitClass(e) {
    var t, i;
    e.type === Te.AST_NODE_TYPES.ClassDeclaration && e.id && W(this, K, "f").currentScope().defineIdentifier(e.id, new sa.ClassNameDefinition(e.id, e)), (t = e.decorators) === null || t === void 0 || t.forEach((s) => W(this, K, "f").visit(s)), W(this, K, "f").scopeManager.nestClassScope(e), e.id && W(this, K, "f").currentScope().defineIdentifier(e.id, new sa.ClassNameDefinition(e.id, e)), W(this, K, "f").visit(e.superClass), this.visitType(e.typeParameters), this.visitType(e.superTypeParameters), (i = e.implements) === null || i === void 0 || i.forEach((s) => this.visitType(s)), this.visit(e.body), W(this, K, "f").close(e);
  }
  visitPropertyDefinition(e) {
    this.visitProperty(e), this.visitMetadataType(e.typeAnnotation, !!e.decorators);
  }
  visitFunctionParameterTypeAnnotation(e, t) {
    "typeAnnotation" in e ? this.visitMetadataType(e.typeAnnotation, t) : e.type === Te.AST_NODE_TYPES.AssignmentPattern ? this.visitMetadataType(e.left.typeAnnotation, t) : e.type === Te.AST_NODE_TYPES.TSParameterProperty && this.visitFunctionParameterTypeAnnotation(e.parameter, t);
  }
  visitMethodFunction(e, t) {
    var i, s;
    e.id && W(this, K, "f").scopeManager.nestFunctionExpressionNameScope(e), W(this, K, "f").scopeManager.nestFunctionScope(e, !0);
    let a = !!t.decorators;
    if (a = a || t.kind !== "set" && e.params.some((l) => l.decorators), !a && t.kind === "set") {
      const l = $o(t);
      l !== null && ((i = W(this, bt, "f").body.body.find((c) => c !== t && c.type === Te.AST_NODE_TYPES.MethodDefinition && c.static === t.static && $o(c) === l)) === null || i === void 0 ? void 0 : i.decorators) && (a = !0);
    }
    !a && t.kind === "constructor" && W(this, bt, "f").decorators && (a = !0);
    for (const l of e.params)
      this.visitPattern(l, (c, u) => {
        W(this, K, "f").currentScope().defineIdentifier(c, new sa.ParameterDefinition(c, e, u.rest)), W(this, K, "f").referencingDefaultValue(c, u.assignments, null, !0);
      }, { processRightHandNodes: !0 }), this.visitFunctionParameterTypeAnnotation(l, a), (s = l.decorators) === null || s === void 0 || s.forEach((c) => this.visit(c));
    this.visitMetadataType(e.returnType, a), this.visitType(e.typeParameters), e.body && (e.body.type === Te.AST_NODE_TYPES.BlockStatement ? W(this, K, "f").visitChildren(e.body) : W(this, K, "f").visit(e.body)), W(this, K, "f").close(e);
  }
  visitProperty(e) {
    var t;
    e.computed && W(this, K, "f").visit(e.key), e.value && (e.type === Te.AST_NODE_TYPES.PropertyDefinition && W(this, K, "f").scopeManager.nestClassFieldInitializerScope(e.value), W(this, K, "f").visit(e.value), e.type === Te.AST_NODE_TYPES.PropertyDefinition && W(this, K, "f").close(e.value)), "decorators" in e && ((t = e.decorators) === null || t === void 0 || t.forEach((i) => W(this, K, "f").visit(i)));
  }
  visitMethod(e) {
    var t;
    e.computed && W(this, K, "f").visit(e.key), e.value.type === Te.AST_NODE_TYPES.FunctionExpression ? this.visitMethodFunction(e.value, e) : W(this, K, "f").visit(e.value), "decorators" in e && ((t = e.decorators) === null || t === void 0 || t.forEach((i) => W(this, K, "f").visit(i)));
  }
  visitType(e) {
    !e || yg.TypeVisitor.visit(W(this, K, "f"), e);
  }
  visitMetadataType(e, t) {
    if (!!e) {
      if (W(this, bt, "f").type === Te.AST_NODE_TYPES.ClassDeclaration && !W(this, bt, "f").declare && e.typeAnnotation.type === Te.AST_NODE_TYPES.TSTypeReference && W(this, Qn, "f")) {
        let i;
        if (e.typeAnnotation.typeName.type === Te.AST_NODE_TYPES.TSQualifiedName) {
          let s = e.typeAnnotation.typeName;
          for (; s.left.type === Te.AST_NODE_TYPES.TSQualifiedName; )
            s = s.left;
          i = s.left;
        } else
          i = e.typeAnnotation.typeName;
        if (t) {
          i.type === Te.AST_NODE_TYPES.Identifier && W(this, K, "f").currentScope().referenceDualValueType(i), e.typeAnnotation.typeParameters && this.visitType(e.typeAnnotation.typeParameters);
          return;
        }
      }
      this.visitType(e);
    }
  }
  ClassBody(e) {
    this.visitChildren(e);
  }
  PropertyDefinition(e) {
    this.visitPropertyDefinition(e);
  }
  MethodDefinition(e) {
    this.visitMethod(e);
  }
  TSAbstractPropertyDefinition(e) {
    this.visitPropertyDefinition(e);
  }
  TSAbstractMethodDefinition(e) {
    this.visitProperty(e);
  }
  Identifier(e) {
    W(this, K, "f").visit(e);
  }
  PrivateIdentifier() {
  }
  StaticBlock(e) {
    W(this, K, "f").scopeManager.nestClassStaticBlockScope(e), e.body.forEach((t) => this.visit(t)), W(this, K, "f").close(e);
  }
}
os.ClassVisitor = ka;
bt = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap();
function $o(r) {
  if (r.computed && r.key.type === Te.AST_NODE_TYPES.Literal) {
    if (typeof r.key.value == "string" || typeof r.key.value == "number")
      return r.key.value;
  } else if (!r.computed && r.key.type === Te.AST_NODE_TYPES.Identifier)
    return r.key.name;
  return null;
}
var Cs = {}, Do = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, Nn = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Ft, Zn;
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.ExportVisitor = void 0;
const vg = Ke, gg = Mt;
class Fa extends gg.Visitor {
  constructor(e, t) {
    super(t), Ft.set(this, void 0), Zn.set(this, void 0), Do(this, Zn, e, "f"), Do(this, Ft, t, "f");
  }
  static visit(e, t) {
    new Fa(t, e).visit(t);
  }
  Identifier(e) {
    Nn(this, Zn, "f").exportKind === "type" ? Nn(this, Ft, "f").currentScope().referenceType(e) : Nn(this, Ft, "f").currentScope().referenceDualValueType(e);
  }
  ExportDefaultDeclaration(e) {
    e.declaration.type === vg.AST_NODE_TYPES.Identifier && this.visit(e.declaration);
  }
  ExportNamedDeclaration(e) {
    e.source || e.declaration || this.visitChildren(e);
  }
  ExportSpecifier(e) {
    e.exportKind === "type" ? Nn(this, Ft, "f").currentScope().referenceType(e.local) : this.visit(e.local);
  }
}
Cs.ExportVisitor = Fa;
Ft = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap();
var Vs = {}, jo = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, ko = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, ei, ti;
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.ImportVisitor = void 0;
const bg = Pt, Yg = Mt;
class Na extends Yg.Visitor {
  constructor(e, t) {
    super(t), ei.set(this, void 0), ti.set(this, void 0), jo(this, ei, e, "f"), jo(this, ti, t, "f");
  }
  static visit(e, t) {
    new Na(t, e).visit(t);
  }
  visitImport(e, t) {
    ko(this, ti, "f").currentScope().defineIdentifier(e, new bg.ImportBindingDefinition(e, t, ko(this, ei, "f")));
  }
  ImportNamespaceSpecifier(e) {
    const t = e.local;
    this.visitImport(t, e);
  }
  ImportDefaultSpecifier(e) {
    const t = e.local;
    this.visitImport(t, e);
  }
  ImportSpecifier(e) {
    const t = e.local;
    this.visitImport(t, e);
  }
}
Vs.ImportVisitor = Na;
ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap();
var Ut = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, lt = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Vr, Or, ri, ni, ii, si;
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.Referencer = void 0;
const le = Ke, Fo = dt, Ne = Pt, Ag = Nr, Lg = os, No = Cs, Cg = Vs, Bo = yr, yt = We, Vg = gn, Og = Mt;
class wg extends Og.Visitor {
  constructor(e, t) {
    super(e), Vr.set(this, void 0), Or.set(this, void 0), ri.set(this, !1), ni.set(this, !1), ii.set(this, void 0), si.set(this, void 0), this.scopeManager = t, Ut(this, Vr, e.jsxPragma, "f"), Ut(this, Or, e.jsxFragmentName, "f"), Ut(this, ii, e.lib, "f"), Ut(this, si, e.emitDecoratorMetadata, "f");
  }
  currentScope(e) {
    return e || (0, Fo.assert)(this.scopeManager.currentScope, "aaa"), this.scopeManager.currentScope;
  }
  close(e) {
    for (; this.currentScope(!0) && e === this.currentScope().block; )
      this.scopeManager.currentScope = this.currentScope().close(this.scopeManager);
  }
  referencingDefaultValue(e, t, i, s) {
    t.forEach((a) => {
      this.currentScope().referenceValue(e, yt.ReferenceFlag.Write, a.right, i, s);
    });
  }
  populateGlobalsFromLib(e) {
    for (const t of lt(this, ii, "f")) {
      const i = Ag.lib[t];
      if (!i)
        throw new Error(`Invalid value for lib provided: ${t}`);
      for (const [s, a] of Object.entries(i))
        e.defineImplicitVariable(s, a);
    }
    e.defineImplicitVariable("const", {
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: !0,
      isValueVariable: !1
    });
  }
  referenceInSomeUpperScope(e) {
    let t = this.scopeManager.currentScope;
    for (; t; ) {
      const i = t.set.get(e);
      if (!i) {
        t = t.upper;
        continue;
      }
      return t.referenceValue(i.identifiers[0]), !0;
    }
    return !1;
  }
  referenceJsxPragma() {
    lt(this, Vr, "f") === null || lt(this, ri, "f") || Ut(this, ri, this.referenceInSomeUpperScope(lt(this, Vr, "f")), "f");
  }
  referenceJsxFragment() {
    lt(this, Or, "f") === null || lt(this, ni, "f") || Ut(this, ni, this.referenceInSomeUpperScope(lt(this, Or, "f")), "f");
  }
  visitClass(e) {
    Lg.ClassVisitor.visit(this, e, lt(this, si, "f"));
  }
  visitForIn(e) {
    e.left.type === le.AST_NODE_TYPES.VariableDeclaration && e.left.kind !== "var" && this.scopeManager.nestForScope(e), e.left.type === le.AST_NODE_TYPES.VariableDeclaration ? (this.visit(e.left), this.visitPattern(e.left.declarations[0].id, (t) => {
      this.currentScope().referenceValue(t, yt.ReferenceFlag.Write, e.right, null, !0);
    })) : this.visitPattern(e.left, (t, i) => {
      const s = this.currentScope().isStrict ? null : {
        pattern: t,
        node: e
      };
      this.referencingDefaultValue(t, i.assignments, s, !1), this.currentScope().referenceValue(t, yt.ReferenceFlag.Write, e.right, s, !1);
    }, { processRightHandNodes: !0 }), this.visit(e.right), this.visit(e.body), this.close(e);
  }
  visitFunctionParameterTypeAnnotation(e) {
    "typeAnnotation" in e ? this.visitType(e.typeAnnotation) : e.type === le.AST_NODE_TYPES.AssignmentPattern ? this.visitType(e.left.typeAnnotation) : e.type === le.AST_NODE_TYPES.TSParameterProperty && this.visitFunctionParameterTypeAnnotation(e.parameter);
  }
  visitFunction(e) {
    var t;
    e.type === le.AST_NODE_TYPES.FunctionExpression ? e.id && this.scopeManager.nestFunctionExpressionNameScope(e) : e.id && this.currentScope().defineIdentifier(e.id, new Ne.FunctionNameDefinition(e.id, e)), this.scopeManager.nestFunctionScope(e, !1);
    for (const i of e.params)
      this.visitPattern(i, (s, a) => {
        this.currentScope().defineIdentifier(s, new Ne.ParameterDefinition(s, e, a.rest)), this.referencingDefaultValue(s, a.assignments, null, !0);
      }, { processRightHandNodes: !0 }), this.visitFunctionParameterTypeAnnotation(i), (t = i.decorators) === null || t === void 0 || t.forEach((s) => this.visit(s));
    this.visitType(e.returnType), this.visitType(e.typeParameters), e.body && (e.body.type === le.AST_NODE_TYPES.BlockStatement ? this.visitChildren(e.body) : this.visit(e.body)), this.close(e);
  }
  visitProperty(e) {
    e.computed && this.visit(e.key), this.visit(e.value);
  }
  visitType(e) {
    !e || Vg.TypeVisitor.visit(this, e);
  }
  visitTypeAssertion(e) {
    this.visit(e.expression), this.visitType(e.typeAnnotation);
  }
  ArrowFunctionExpression(e) {
    this.visitFunction(e);
  }
  AssignmentExpression(e) {
    let t = e.left;
    switch (t.type) {
      case le.AST_NODE_TYPES.TSAsExpression:
      case le.AST_NODE_TYPES.TSTypeAssertion:
        this.visitType(t.typeAnnotation);
      case le.AST_NODE_TYPES.TSNonNullExpression:
        t = t.expression;
    }
    Bo.PatternVisitor.isPattern(t) ? e.operator === "=" ? this.visitPattern(t, (i, s) => {
      const a = this.currentScope().isStrict ? null : {
        pattern: i,
        node: e
      };
      this.referencingDefaultValue(i, s.assignments, a, !1), this.currentScope().referenceValue(i, yt.ReferenceFlag.Write, e.right, a, !1);
    }, { processRightHandNodes: !0 }) : t.type === le.AST_NODE_TYPES.Identifier && this.currentScope().referenceValue(t, yt.ReferenceFlag.ReadWrite, e.right) : this.visit(t), this.visit(e.right);
  }
  BlockStatement(e) {
    this.scopeManager.isES6() && this.scopeManager.nestBlockScope(e), this.visitChildren(e), this.close(e);
  }
  BreakStatement() {
  }
  CallExpression(e) {
    this.visitChildren(e, ["typeParameters"]), this.visitType(e.typeParameters);
  }
  CatchClause(e) {
    if (this.scopeManager.nestCatchScope(e), e.param) {
      const t = e.param;
      this.visitPattern(t, (i, s) => {
        this.currentScope().defineIdentifier(i, new Ne.CatchClauseDefinition(t, e)), this.referencingDefaultValue(i, s.assignments, null, !0);
      }, { processRightHandNodes: !0 });
    }
    this.visit(e.body), this.close(e);
  }
  ClassExpression(e) {
    this.visitClass(e);
  }
  ClassDeclaration(e) {
    this.visitClass(e);
  }
  ContinueStatement() {
  }
  ExportAllDeclaration() {
  }
  ExportDefaultDeclaration(e) {
    e.declaration.type === le.AST_NODE_TYPES.Identifier ? No.ExportVisitor.visit(this, e) : this.visit(e.declaration);
  }
  ExportNamedDeclaration(e) {
    e.declaration ? this.visit(e.declaration) : No.ExportVisitor.visit(this, e);
  }
  ForInStatement(e) {
    this.visitForIn(e);
  }
  ForOfStatement(e) {
    this.visitForIn(e);
  }
  ForStatement(e) {
    e.init && e.init.type === le.AST_NODE_TYPES.VariableDeclaration && e.init.kind !== "var" && this.scopeManager.nestForScope(e), this.visitChildren(e), this.close(e);
  }
  FunctionDeclaration(e) {
    this.visitFunction(e);
  }
  FunctionExpression(e) {
    this.visitFunction(e);
  }
  Identifier(e) {
    this.currentScope().referenceValue(e), this.visitType(e.typeAnnotation);
  }
  ImportDeclaration(e) {
    (0, Fo.assert)(this.scopeManager.isES6() && this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context."), Cg.ImportVisitor.visit(this, e);
  }
  JSXAttribute(e) {
    this.visit(e.value);
  }
  JSXClosingElement() {
  }
  JSXFragment(e) {
    this.referenceJsxPragma(), this.referenceJsxFragment(), this.visitChildren(e);
  }
  JSXIdentifier(e) {
    this.currentScope().referenceValue(e);
  }
  JSXMemberExpression(e) {
    e.object.type !== le.AST_NODE_TYPES.JSXIdentifier ? this.visit(e.object) : e.object.name !== "this" && this.visit(e.object);
  }
  JSXOpeningElement(e) {
    this.referenceJsxPragma(), e.name.type === le.AST_NODE_TYPES.JSXIdentifier ? (e.name.name[0].toUpperCase() === e.name.name[0] || e.name.name === "this") && this.visit(e.name) : this.visit(e.name), this.visitType(e.typeParameters);
    for (const t of e.attributes)
      this.visit(t);
  }
  LabeledStatement(e) {
    this.visit(e.body);
  }
  MemberExpression(e) {
    this.visit(e.object), e.computed && this.visit(e.property);
  }
  MetaProperty() {
  }
  NewExpression(e) {
    this.visitChildren(e, ["typeParameters"]), this.visitType(e.typeParameters);
  }
  PrivateIdentifier() {
  }
  Program(e) {
    const t = this.scopeManager.nestGlobalScope(e);
    this.populateGlobalsFromLib(t), this.scopeManager.isGlobalReturn() && (this.currentScope().isStrict = !1, this.scopeManager.nestFunctionScope(e, !1)), this.scopeManager.isES6() && this.scopeManager.isModule() && this.scopeManager.nestModuleScope(e), this.scopeManager.isStrictModeSupported() && this.scopeManager.isImpliedStrict() && (this.currentScope().isStrict = !0), this.visitChildren(e), this.close(e);
  }
  Property(e) {
    this.visitProperty(e);
  }
  SwitchStatement(e) {
    this.visit(e.discriminant), this.scopeManager.isES6() && this.scopeManager.nestSwitchScope(e);
    for (const t of e.cases)
      this.visit(t);
    this.close(e);
  }
  TaggedTemplateExpression(e) {
    this.visit(e.tag), this.visit(e.quasi), this.visitType(e.typeParameters);
  }
  TSAsExpression(e) {
    this.visitTypeAssertion(e);
  }
  TSDeclareFunction(e) {
    this.visitFunction(e);
  }
  TSImportEqualsDeclaration(e) {
    this.currentScope().defineIdentifier(e.id, new Ne.ImportBindingDefinition(e.id, e, e)), e.moduleReference.type === le.AST_NODE_TYPES.TSQualifiedName ? this.visit(e.moduleReference.left) : this.visit(e.moduleReference);
  }
  TSEmptyBodyFunctionExpression(e) {
    this.visitFunction(e);
  }
  TSEnumDeclaration(e) {
    this.currentScope().defineIdentifier(e.id, new Ne.TSEnumNameDefinition(e.id, e)), this.scopeManager.nestTSEnumScope(e), this.currentScope().defineIdentifier(e.id, new Ne.TSEnumNameDefinition(e.id, e));
    for (const t of e.members) {
      if (t.id.type === le.AST_NODE_TYPES.Literal && typeof t.id.value == "string") {
        const i = t.id;
        this.currentScope().defineLiteralIdentifier(i, new Ne.TSEnumMemberDefinition(i, t));
      } else
        !t.computed && t.id.type === le.AST_NODE_TYPES.Identifier && this.currentScope().defineIdentifier(t.id, new Ne.TSEnumMemberDefinition(t.id, t));
      this.visit(t.initializer);
    }
    this.close(e);
  }
  TSInstantiationExpression(e) {
    this.visitChildren(e, ["typeParameters"]), this.visitType(e.typeParameters);
  }
  TSInterfaceDeclaration(e) {
    this.visitType(e);
  }
  TSModuleDeclaration(e) {
    e.id.type === le.AST_NODE_TYPES.Identifier && !e.global && this.currentScope().defineIdentifier(e.id, new Ne.TSModuleNameDefinition(e.id, e)), this.scopeManager.nestTSModuleScope(e), this.visit(e.body), this.close(e);
  }
  TSTypeAliasDeclaration(e) {
    this.visitType(e);
  }
  TSTypeAssertion(e) {
    this.visitTypeAssertion(e);
  }
  UpdateExpression(e) {
    Bo.PatternVisitor.isPattern(e.argument) ? this.visitPattern(e.argument, (t) => {
      this.currentScope().referenceValue(t, yt.ReferenceFlag.ReadWrite, null);
    }) : this.visitChildren(e);
  }
  VariableDeclaration(e) {
    const t = e.kind === "var" ? this.currentScope().variableScope : this.currentScope();
    for (const i of e.declarations) {
      const s = i.init;
      this.visitPattern(i.id, (a, l) => {
        t.defineIdentifier(a, new Ne.VariableDefinition(a, i, e)), this.referencingDefaultValue(a, l.assignments, null, !0), s && this.currentScope().referenceValue(a, yt.ReferenceFlag.Write, s, null, !0);
      }, { processRightHandNodes: !0 }), i.init && this.visit(i.init), "typeAnnotation" in i.id && this.visitType(i.id.typeAnnotation);
    }
  }
  WithStatement(e) {
    this.visit(e.object), this.scopeManager.nestWithScope(e), this.visit(e.body), this.close(e);
  }
  ImportAttribute() {
  }
}
zi.Referencer = wg;
Vr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Referencer = void 0;
  var e = zi;
  Object.defineProperty(r, "Referencer", { enumerable: !0, get: function() {
    return e.Referencer;
  } });
})(jl);
var Cn = {}, Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.ClassStaticBlockScope = void 0;
const Mg = te, Rg = Q;
class Ig extends Mg.ScopeBase {
  constructor(e, t, i) {
    super(e, Rg.ScopeType.classStaticBlock, t, i, !1);
  }
}
Os.ClassStaticBlockScope = Ig;
var xg = p && p.__classPrivateFieldSet || function(r, e, t, i, s) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, St = p && p.__classPrivateFieldGet || function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, Be;
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.ScopeManager = void 0;
const ce = dt, pe = ls, Ug = An, $g = Os;
class Dg {
  get variables() {
    const e = /* @__PURE__ */ new Set();
    function t(i) {
      i.variables.forEach((s) => e.add(s)), i.childScopes.forEach(t);
    }
    return this.scopes.forEach(t), Array.from(e).sort((i, s) => i.$id - s.$id);
  }
  constructor(e) {
    Be.set(this, void 0), this.scopes = [], this.globalScope = null, this.nodeToScope = /* @__PURE__ */ new WeakMap(), this.currentScope = null, xg(this, Be, e, "f"), this.declaredVariables = /* @__PURE__ */ new WeakMap();
  }
  isGlobalReturn() {
    return St(this, Be, "f").globalReturn === !0;
  }
  isModule() {
    return St(this, Be, "f").sourceType === "module";
  }
  isImpliedStrict() {
    return St(this, Be, "f").impliedStrict === !0;
  }
  isStrictModeSupported() {
    return St(this, Be, "f").ecmaVersion != null && St(this, Be, "f").ecmaVersion >= 5;
  }
  isES6() {
    return St(this, Be, "f").ecmaVersion != null && St(this, Be, "f").ecmaVersion >= 6;
  }
  getDeclaredVariables(e) {
    var t;
    return (t = this.declaredVariables.get(e)) !== null && t !== void 0 ? t : [];
  }
  acquire(e, t = !1) {
    var i;
    function s(l) {
      return !(l.type === "function" && l.functionExpressionScope);
    }
    const a = this.nodeToScope.get(e);
    if (!a || a.length === 0)
      return null;
    if (a.length === 1)
      return a[0];
    if (t) {
      for (let l = a.length - 1; l >= 0; --l) {
        const c = a[l];
        if (s(c))
          return c;
      }
      return null;
    }
    return (i = a.find(s)) !== null && i !== void 0 ? i : null;
  }
  nestScope(e) {
    return e instanceof pe.GlobalScope && ((0, ce.assert)(this.currentScope === null), this.globalScope = e), this.currentScope = e, e;
  }
  nestBlockScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.BlockScope(this, this.currentScope, e));
  }
  nestCatchScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.CatchScope(this, this.currentScope, e));
  }
  nestClassScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.ClassScope(this, this.currentScope, e));
  }
  nestClassFieldInitializerScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new Ug.ClassFieldInitializerScope(this, this.currentScope, e));
  }
  nestClassStaticBlockScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new $g.ClassStaticBlockScope(this, this.currentScope, e));
  }
  nestConditionalTypeScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.ConditionalTypeScope(this, this.currentScope, e));
  }
  nestForScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.ForScope(this, this.currentScope, e));
  }
  nestFunctionExpressionNameScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.FunctionExpressionNameScope(this, this.currentScope, e));
  }
  nestFunctionScope(e, t) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.FunctionScope(this, this.currentScope, e, t));
  }
  nestFunctionTypeScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.FunctionTypeScope(this, this.currentScope, e));
  }
  nestGlobalScope(e) {
    return this.nestScope(new pe.GlobalScope(this, e));
  }
  nestMappedTypeScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.MappedTypeScope(this, this.currentScope, e));
  }
  nestModuleScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.ModuleScope(this, this.currentScope, e));
  }
  nestSwitchScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.SwitchScope(this, this.currentScope, e));
  }
  nestTSEnumScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.TSEnumScope(this, this.currentScope, e));
  }
  nestTSModuleScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.TSModuleScope(this, this.currentScope, e));
  }
  nestTypeScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.TypeScope(this, this.currentScope, e));
  }
  nestWithScope(e) {
    return (0, ce.assert)(this.currentScope), this.nestScope(new pe.WithScope(this, this.currentScope, e));
  }
}
Cn.ScopeManager = Dg;
Be = /* @__PURE__ */ new WeakMap();
Object.defineProperty(Li, "__esModule", { value: !0 });
Li.analyze = void 0;
const jg = Da, kg = Nr, Fg = jl, Ng = Cn, ct = {
  childVisitorKeys: jg.visitorKeys,
  ecmaVersion: 2018,
  globalReturn: !1,
  impliedStrict: !1,
  jsxPragma: "React",
  jsxFragmentName: null,
  lib: ["es2018"],
  sourceType: "script",
  emitDecoratorMetadata: !1
};
function Bg(r) {
  if (r == null || r === 3 || r === 5)
    return "es5";
  const e = r > 2e3 ? r : 2015 + (r - 6), t = `es${e}`;
  return t in kg.lib ? t : e > 2020 ? "esnext" : "es5";
}
function Gg(r, e) {
  var t, i, s, a, l, c, u, Y;
  const T = (t = e == null ? void 0 : e.ecmaVersion) !== null && t !== void 0 ? t : ct.ecmaVersion, f = {
    childVisitorKeys: (i = e == null ? void 0 : e.childVisitorKeys) !== null && i !== void 0 ? i : ct.childVisitorKeys,
    ecmaVersion: T,
    globalReturn: (s = e == null ? void 0 : e.globalReturn) !== null && s !== void 0 ? s : ct.globalReturn,
    impliedStrict: (a = e == null ? void 0 : e.impliedStrict) !== null && a !== void 0 ? a : ct.impliedStrict,
    jsxPragma: (e == null ? void 0 : e.jsxPragma) === void 0 ? ct.jsxPragma : e.jsxPragma,
    jsxFragmentName: (l = e == null ? void 0 : e.jsxFragmentName) !== null && l !== void 0 ? l : ct.jsxFragmentName,
    sourceType: (c = e == null ? void 0 : e.sourceType) !== null && c !== void 0 ? c : ct.sourceType,
    lib: (u = e == null ? void 0 : e.lib) !== null && u !== void 0 ? u : [Bg(T)],
    emitDecoratorMetadata: (Y = e == null ? void 0 : e.emitDecoratorMetadata) !== null && Y !== void 0 ? Y : ct.emitDecoratorMetadata
  };
  f.lib = f.lib.map((F) => F.toLowerCase());
  const v = new Ng.ScopeManager(f);
  return new Fg.Referencer(f, v).visit(r), v;
}
Li.analyze = Gg;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(u, Y, T, f) {
    f === void 0 && (f = T);
    var v = Object.getOwnPropertyDescriptor(Y, T);
    (!v || ("get" in v ? !Y.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return Y[T];
    } }), Object.defineProperty(u, f, v);
  } : function(u, Y, T, f) {
    f === void 0 && (f = T), u[f] = Y[T];
  }), t = p && p.__exportStar || function(u, Y) {
    for (var T in u)
      T !== "default" && !Object.prototype.hasOwnProperty.call(Y, T) && e(Y, u, T);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.ScopeManager = r.PatternVisitor = r.Visitor = r.Reference = r.analyze = void 0;
  var i = Li;
  Object.defineProperty(r, "analyze", { enumerable: !0, get: function() {
    return i.analyze;
  } }), t(Pt, r);
  var s = We;
  Object.defineProperty(r, "Reference", { enumerable: !0, get: function() {
    return s.Reference;
  } });
  var a = Mt;
  Object.defineProperty(r, "Visitor", { enumerable: !0, get: function() {
    return a.Visitor;
  } });
  var l = yr;
  Object.defineProperty(r, "PatternVisitor", { enumerable: !0, get: function() {
    return l.PatternVisitor;
  } }), t(ls, r);
  var c = Cn;
  Object.defineProperty(r, "ScopeManager", { enumerable: !0, get: function() {
    return c.ScopeManager;
  } }), t(us, r);
})(Dl);
var Wg = p && p.__createBinding || (Object.create ? function(r, e, t, i) {
  i === void 0 && (i = t);
  var s = Object.getOwnPropertyDescriptor(e, t);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, i, s);
} : function(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}), Hg = p && p.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), Kg = p && p.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && Wg(e, r, t);
  return Hg(e, r), e;
};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.Scope = void 0;
const Go = Kg(Dl);
var fa;
(function(r) {
  r.ScopeType = Go.ScopeType, r.DefinitionType = Go.DefinitionType;
})(fa || (fa = {}));
Ai.Scope = fa;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.SourceCode = void 0;
const Xg = $r;
class qg extends Xg.SourceCode {
}
ws.SourceCode = qg;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(i, s, a, l) {
    l === void 0 && (l = a);
    var c = Object.getOwnPropertyDescriptor(s, a);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[a];
    } }), Object.defineProperty(i, l, c);
  } : function(i, s, a, l) {
    l === void 0 && (l = a), i[l] = s[a];
  }), t = p && p.__exportStar || function(i, s) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), t(xl, r), t(gi, r), t(bi, r), t(Yi, r), t(Ul, r), t($l, r), t(kr, r), t(Ai, r), t(ws, r);
})(Il);
var Nl = {}, Ms = {};
const zg = "estraverse", Jg = "ECMAScript JS AST traversal functions", Qg = "https://github.com/estools/estraverse", Zg = "estraverse.js", eb = "4.3.0", tb = {
  node: ">=4.0"
}, rb = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "http://github.com/Constellation"
  }
], nb = {
  type: "git",
  url: "http://github.com/estools/estraverse.git"
}, ib = {
  "babel-preset-env": "^1.6.1",
  "babel-register": "^6.3.13",
  chai: "^2.1.1",
  espree: "^1.11.0",
  gulp: "^3.8.10",
  "gulp-bump": "^0.2.2",
  "gulp-filter": "^2.0.0",
  "gulp-git": "^1.0.1",
  "gulp-tag-version": "^1.3.0",
  jshint: "^2.5.6",
  mocha: "^2.1.0"
}, sb = "BSD-2-Clause", ab = {
  test: "npm run-script lint && npm run-script unit-test",
  lint: "jshint estraverse.js",
  "unit-test": "mocha --compilers js:babel-register"
}, ob = {
  name: zg,
  description: Jg,
  homepage: Qg,
  main: Zg,
  version: eb,
  engines: tb,
  maintainers: rb,
  repository: nb,
  devDependencies: ib,
  license: sb,
  scripts: ab
};
(function(r) {
  (function e(t) {
    var i, s, a, l, c, u;
    function Y(I) {
      var _ = {}, y, h;
      for (y in I)
        I.hasOwnProperty(y) && (h = I[y], typeof h == "object" && h !== null ? _[y] = Y(h) : _[y] = h);
      return _;
    }
    function T(I, _) {
      var y, h, A, V;
      for (h = I.length, A = 0; h; )
        y = h >>> 1, V = A + y, _(I[V]) ? h = y : (A = V + 1, h -= y + 1);
      return A;
    }
    i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      Program: "Program",
      Property: "Property",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, a = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      ComprehensionExpression: ["blocks", "filter", "body"],
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      Program: ["body"],
      Property: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, l = {}, c = {}, u = {}, s = {
      Break: l,
      Skip: c,
      Remove: u
    };
    function f(I, _) {
      this.parent = I, this.key = _;
    }
    f.prototype.replace = function(_) {
      this.parent[this.key] = _;
    }, f.prototype.remove = function() {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    };
    function v(I, _, y, h) {
      this.node = I, this.path = _, this.wrap = y, this.ref = h;
    }
    function m() {
    }
    m.prototype.path = function() {
      var _, y, h, A, V, w;
      function d(E, P) {
        if (Array.isArray(P))
          for (h = 0, A = P.length; h < A; ++h)
            E.push(P[h]);
        else
          E.push(P);
      }
      if (!this.__current.path)
        return null;
      for (V = [], _ = 2, y = this.__leavelist.length; _ < y; ++_)
        w = this.__leavelist[_], d(V, w.path);
      return d(V, this.__current.path), V;
    }, m.prototype.type = function() {
      var I = this.current();
      return I.type || this.__current.wrap;
    }, m.prototype.parents = function() {
      var _, y, h;
      for (h = [], _ = 1, y = this.__leavelist.length; _ < y; ++_)
        h.push(this.__leavelist[_].node);
      return h;
    }, m.prototype.current = function() {
      return this.__current.node;
    }, m.prototype.__execute = function(_, y) {
      var h, A;
      return A = void 0, h = this.__current, this.__current = y, this.__state = null, _ && (A = _.call(this, y.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = h, A;
    }, m.prototype.notify = function(_) {
      this.__state = _;
    }, m.prototype.skip = function() {
      this.notify(c);
    }, m.prototype.break = function() {
      this.notify(l);
    }, m.prototype.remove = function() {
      this.notify(u);
    }, m.prototype.__initialize = function(I, _) {
      this.visitor = _, this.root = I, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, _.fallback === "iteration" ? this.__fallback = Object.keys : typeof _.fallback == "function" && (this.__fallback = _.fallback), this.__keys = a, _.keys && (this.__keys = Object.assign(Object.create(this.__keys), _.keys));
    };
    function F(I) {
      return I == null ? !1 : typeof I == "object" && typeof I.type == "string";
    }
    function oe(I, _) {
      return (I === i.ObjectExpression || I === i.ObjectPattern) && _ === "properties";
    }
    m.prototype.traverse = function(_, y) {
      var h, A, V, w, d, E, P, g, L, b, C, R;
      for (this.__initialize(_, y), R = {}, h = this.__worklist, A = this.__leavelist, h.push(new v(_, null, null, null)), A.push(new v(null, null, null, null)); h.length; ) {
        if (V = h.pop(), V === R) {
          if (V = A.pop(), E = this.__execute(y.leave, V), this.__state === l || E === l)
            return;
          continue;
        }
        if (V.node) {
          if (E = this.__execute(y.enter, V), this.__state === l || E === l)
            return;
          if (h.push(R), A.push(V), this.__state === c || E === c)
            continue;
          if (w = V.node, d = w.type || V.wrap, b = this.__keys[d], !b)
            if (this.__fallback)
              b = this.__fallback(w);
            else
              throw new Error("Unknown node type " + d + ".");
          for (g = b.length; (g -= 1) >= 0; )
            if (P = b[g], C = w[P], !!C)
              if (Array.isArray(C)) {
                for (L = C.length; (L -= 1) >= 0; )
                  if (!!C[L]) {
                    if (oe(d, b[g]))
                      V = new v(C[L], [P, L], "Property", null);
                    else if (F(C[L]))
                      V = new v(C[L], [P, L], null, null);
                    else
                      continue;
                    h.push(V);
                  }
              } else
                F(C) && h.push(new v(C, P, null, null));
        }
      }
    }, m.prototype.replace = function(_, y) {
      var h, A, V, w, d, E, P, g, L, b, C, R, x;
      function B(re) {
        var X, be, qe, at;
        if (re.ref.remove()) {
          for (be = re.ref.key, at = re.ref.parent, X = h.length; X--; )
            if (qe = h[X], qe.ref && qe.ref.parent === at) {
              if (qe.ref.key < be)
                break;
              --qe.ref.key;
            }
        }
      }
      for (this.__initialize(_, y), C = {}, h = this.__worklist, A = this.__leavelist, R = {
        root: _
      }, E = new v(_, null, null, new f(R, "root")), h.push(E), A.push(E); h.length; ) {
        if (E = h.pop(), E === C) {
          if (E = A.pop(), d = this.__execute(y.leave, E), d !== void 0 && d !== l && d !== c && d !== u && E.ref.replace(d), (this.__state === u || d === u) && B(E), this.__state === l || d === l)
            return R.root;
          continue;
        }
        if (d = this.__execute(y.enter, E), d !== void 0 && d !== l && d !== c && d !== u && (E.ref.replace(d), E.node = d), (this.__state === u || d === u) && (B(E), E.node = null), this.__state === l || d === l)
          return R.root;
        if (V = E.node, !!V && (h.push(C), A.push(E), !(this.__state === c || d === c))) {
          if (w = V.type || E.wrap, L = this.__keys[w], !L)
            if (this.__fallback)
              L = this.__fallback(V);
            else
              throw new Error("Unknown node type " + w + ".");
          for (P = L.length; (P -= 1) >= 0; )
            if (x = L[P], b = V[x], !!b)
              if (Array.isArray(b)) {
                for (g = b.length; (g -= 1) >= 0; )
                  if (!!b[g]) {
                    if (oe(w, L[P]))
                      E = new v(b[g], [x, g], "Property", new f(b, g));
                    else if (F(b[g]))
                      E = new v(b[g], [x, g], null, new f(b, g));
                    else
                      continue;
                    h.push(E);
                  }
              } else
                F(b) && h.push(new v(b, x, null, new f(V, x)));
        }
      }
      return R.root;
    };
    function N(I, _) {
      var y = new m();
      return y.traverse(I, _);
    }
    function Ee(I, _) {
      var y = new m();
      return y.replace(I, _);
    }
    function it(I, _) {
      var y;
      return y = T(_, function(A) {
        return A.range[0] > I.range[0];
      }), I.extendedRange = [I.range[0], I.range[1]], y !== _.length && (I.extendedRange[1] = _[y].range[0]), y -= 1, y >= 0 && (I.extendedRange[0] = _[y].range[1]), I;
    }
    function st(I, _, y) {
      var h = [], A, V, w, d;
      if (!I.range)
        throw new Error("attachComments needs range information");
      if (!y.length) {
        if (_.length) {
          for (w = 0, V = _.length; w < V; w += 1)
            A = Y(_[w]), A.extendedRange = [0, I.range[0]], h.push(A);
          I.leadingComments = h;
        }
        return I;
      }
      for (w = 0, V = _.length; w < V; w += 1)
        h.push(it(Y(_[w]), y));
      return d = 0, N(I, {
        enter: function(E) {
          for (var P; d < h.length && (P = h[d], !(P.extendedRange[1] > E.range[0])); )
            P.extendedRange[1] === E.range[0] ? (E.leadingComments || (E.leadingComments = []), E.leadingComments.push(P), h.splice(d, 1)) : d += 1;
          if (d === h.length)
            return s.Break;
          if (h[d].extendedRange[0] > E.range[1])
            return s.Skip;
        }
      }), d = 0, N(I, {
        leave: function(E) {
          for (var P; d < h.length && (P = h[d], !(E.range[1] < P.extendedRange[0])); )
            E.range[1] === P.extendedRange[0] ? (E.trailingComments || (E.trailingComments = []), E.trailingComments.push(P), h.splice(d, 1)) : d += 1;
          if (d === h.length)
            return s.Break;
          if (h[d].extendedRange[0] > E.range[1])
            return s.Skip;
        }
      }), I;
    }
    return t.version = ob.version, t.Syntax = i, t.traverse = N, t.replace = Ee, t.attachComments = st, t.VisitorKeys = a, t.VisitorOption = s, t.Controller = m, t.cloneEnvironment = function() {
      return e({});
    }, t;
  })(r);
})(Ms);
const Bl = 1, Gl = 2, lb = Bl | Gl;
class Ge {
  constructor(e, t, i, s, a, l, c) {
    this.identifier = e, this.from = t, this.tainted = !1, this.resolved = null, this.flag = i, this.isWrite() && (this.writeExpr = s, this.partial = l, this.init = c), this.__maybeImplicitGlobal = a;
  }
  isStatic() {
    return !this.tainted && this.resolved && this.resolved.scope.isStatic();
  }
  isWrite() {
    return !!(this.flag & Ge.WRITE);
  }
  isRead() {
    return !!(this.flag & Ge.READ);
  }
  isReadOnly() {
    return this.flag === Ge.READ;
  }
  isWriteOnly() {
    return this.flag === Ge.WRITE;
  }
  isReadWrite() {
    return this.flag === Ge.RW;
  }
}
Ge.READ = Bl;
Ge.WRITE = Gl;
Ge.RW = lb;
var Rs = Ge;
class _t {
  constructor(e, t) {
    this.name = e, this.identifiers = [], this.references = [], this.defs = [], this.tainted = !1, this.stack = !0, this.scope = t;
  }
}
_t.CatchClause = "CatchClause";
_t.Parameter = "Parameter";
_t.FunctionName = "FunctionName";
_t.ClassName = "ClassName";
_t.Variable = "Variable";
_t.ImportBinding = "ImportBinding";
_t.ImplicitGlobalVariable = "ImplicitGlobalVariable";
var Vn = _t;
const cb = Vn;
class Wl {
  constructor(e, t, i, s, a, l) {
    this.type = e, this.name = t, this.node = i, this.parent = s, this.index = a, this.kind = l;
  }
}
class ub extends Wl {
  constructor(e, t, i, s) {
    super(cb.Parameter, e, t, null, i, null), this.rest = s;
  }
}
var Ba = {
  ParameterDefinition: ub,
  Definition: Wl
};
const Ae = Ms.Syntax, Wo = Rs, Ur = Vn, Hl = Ba.Definition, Ta = er;
function pb(r, e, t, i) {
  let s;
  if (r.upper && r.upper.isStrict || t || r.type === "class" || r.type === "module")
    return !0;
  if (r.type === "block" || r.type === "switch")
    return !1;
  if (r.type === "function") {
    if (e.type === Ae.ArrowFunctionExpression && e.body.type !== Ae.BlockStatement || (e.type === Ae.Program ? s = e : s = e.body, !s))
      return !1;
  } else if (r.type === "global")
    s = e;
  else
    return !1;
  if (i)
    for (let a = 0, l = s.body.length; a < l; ++a) {
      const c = s.body[a];
      if (c.type !== Ae.DirectiveStatement)
        break;
      if (c.raw === '"use strict"' || c.raw === "'use strict'")
        return !0;
    }
  else
    for (let a = 0, l = s.body.length; a < l; ++a) {
      const c = s.body[a];
      if (c.type !== Ae.ExpressionStatement)
        break;
      const u = c.expression;
      if (u.type !== Ae.Literal || typeof u.value != "string")
        break;
      if (u.raw !== null && u.raw !== void 0) {
        if (u.raw === '"use strict"' || u.raw === "'use strict'")
          return !0;
      } else if (u.value === "use strict")
        return !0;
    }
  return !1;
}
function Eb(r, e) {
  r.scopes.push(e);
  const t = r.__nodeToScope.get(e.block);
  t ? t.push(e) : r.__nodeToScope.set(e.block, [e]);
}
function fb(r) {
  return r.type === Ur.ClassName || r.type === Ur.Variable && r.parent.kind !== "var";
}
class $e {
  constructor(e, t, i, s, a) {
    this.type = t, this.set = /* @__PURE__ */ new Map(), this.taints = /* @__PURE__ */ new Map(), this.dynamic = this.type === "global" || this.type === "with", this.block = s, this.through = [], this.variables = [], this.references = [], this.variableScope = this.type === "global" || this.type === "function" || this.type === "module" ? this : i.variableScope, this.functionExpressionScope = !1, this.directCallToEvalScope = !1, this.thisFound = !1, this.__left = [], this.upper = i, this.isStrict = pb(this, s, a, e.__useDirective()), this.childScopes = [], this.upper && this.upper.childScopes.push(this), this.__declaredVariables = e.__declaredVariables, Eb(e, this);
  }
  __shouldStaticallyClose(e) {
    return !this.dynamic || e.__isOptimistic();
  }
  __shouldStaticallyCloseForGlobal(e) {
    const t = e.identifier.name;
    if (!this.set.has(t))
      return !1;
    const s = this.set.get(t).defs;
    return s.length > 0 && s.every(fb);
  }
  __staticCloseRef(e) {
    this.__resolve(e) || this.__delegateToUpperScope(e);
  }
  __dynamicCloseRef(e) {
    let t = this;
    do
      t.through.push(e), t = t.upper;
    while (t);
  }
  __globalCloseRef(e) {
    this.__shouldStaticallyCloseForGlobal(e) ? this.__staticCloseRef(e) : this.__dynamicCloseRef(e);
  }
  __close(e) {
    let t;
    this.__shouldStaticallyClose(e) ? t = this.__staticCloseRef : this.type !== "global" ? t = this.__dynamicCloseRef : t = this.__globalCloseRef;
    for (let i = 0, s = this.__left.length; i < s; ++i) {
      const a = this.__left[i];
      t.call(this, a);
    }
    return this.__left = null, this.upper;
  }
  __isValidResolution(e, t) {
    return !0;
  }
  __resolve(e) {
    const t = e.identifier.name;
    if (!this.set.has(t))
      return !1;
    const i = this.set.get(t);
    return this.__isValidResolution(e, i) ? (i.references.push(e), i.stack = i.stack && e.from.variableScope === this.variableScope, e.tainted && (i.tainted = !0, this.taints.set(i.name, !0)), e.resolved = i, !0) : !1;
  }
  __delegateToUpperScope(e) {
    this.upper && this.upper.__left.push(e), this.through.push(e);
  }
  __addDeclaredVariablesOfNode(e, t) {
    if (t == null)
      return;
    let i = this.__declaredVariables.get(t);
    i == null && (i = [], this.__declaredVariables.set(t, i)), i.indexOf(e) === -1 && i.push(e);
  }
  __defineGeneric(e, t, i, s, a) {
    let l;
    l = t.get(e), l || (l = new Ur(e, this), t.set(e, l), i.push(l)), a && (l.defs.push(a), this.__addDeclaredVariablesOfNode(l, a.node), this.__addDeclaredVariablesOfNode(l, a.parent)), s && l.identifiers.push(s);
  }
  __define(e, t) {
    e && e.type === Ae.Identifier && this.__defineGeneric(
      e.name,
      this.set,
      this.variables,
      e,
      t
    );
  }
  __referencing(e, t, i, s, a, l) {
    if (!e || e.type !== Ae.Identifier || e.name === "super")
      return;
    const c = new Wo(e, this, t || Wo.READ, i, s, !!a, !!l);
    this.references.push(c), this.__left.push(c);
  }
  __detectEval() {
    let e = this;
    this.directCallToEvalScope = !0;
    do
      e.dynamic = !0, e = e.upper;
    while (e);
  }
  __detectThis() {
    this.thisFound = !0;
  }
  __isClosed() {
    return this.__left === null;
  }
  resolve(e) {
    let t, i, s;
    for (Ta(this.__isClosed(), "Scope should be closed."), Ta(e.type === Ae.Identifier, "Target should be identifier."), i = 0, s = this.references.length; i < s; ++i)
      if (t = this.references[i], t.identifier === e)
        return t;
    return null;
  }
  isStatic() {
    return !this.dynamic;
  }
  isArgumentsMaterialized() {
    return !0;
  }
  isThisMaterialized() {
    return !0;
  }
  isUsedName(e) {
    if (this.set.has(e))
      return !0;
    for (let t = 0, i = this.through.length; t < i; ++t)
      if (this.through[t].identifier.name === e)
        return !0;
    return !1;
  }
}
class Tb extends $e {
  constructor(e, t) {
    super(e, "global", null, t, !1), this.implicit = {
      set: /* @__PURE__ */ new Map(),
      variables: [],
      left: []
    };
  }
  __close(e) {
    const t = [];
    for (let i = 0, s = this.__left.length; i < s; ++i) {
      const a = this.__left[i];
      a.__maybeImplicitGlobal && !this.set.has(a.identifier.name) && t.push(a.__maybeImplicitGlobal);
    }
    for (let i = 0, s = t.length; i < s; ++i) {
      const a = t[i];
      this.__defineImplicit(
        a.pattern,
        new Hl(
          Ur.ImplicitGlobalVariable,
          a.pattern,
          a.node,
          null,
          null,
          null
        )
      );
    }
    return this.implicit.left = this.__left, super.__close(e);
  }
  __defineImplicit(e, t) {
    e && e.type === Ae.Identifier && this.__defineGeneric(
      e.name,
      this.implicit.set,
      this.implicit.variables,
      e,
      t
    );
  }
}
class db extends $e {
  constructor(e, t, i) {
    super(e, "module", t, i, !1);
  }
}
class Pb extends $e {
  constructor(e, t, i) {
    super(e, "function-expression-name", t, i, !1), this.__define(
      i.id,
      new Hl(
        Ur.FunctionName,
        i.id,
        i,
        null,
        null,
        null
      )
    ), this.functionExpressionScope = !0;
  }
}
class _b extends $e {
  constructor(e, t, i) {
    super(e, "catch", t, i, !1);
  }
}
class hb extends $e {
  constructor(e, t, i) {
    super(e, "with", t, i, !1);
  }
  __close(e) {
    if (this.__shouldStaticallyClose(e))
      return super.__close(e);
    for (let t = 0, i = this.__left.length; t < i; ++t) {
      const s = this.__left[t];
      s.tainted = !0, this.__delegateToUpperScope(s);
    }
    return this.__left = null, this.upper;
  }
}
class mb extends $e {
  constructor(e, t, i) {
    super(e, "block", t, i, !1);
  }
}
class yb extends $e {
  constructor(e, t, i) {
    super(e, "switch", t, i, !1);
  }
}
class Sb extends $e {
  constructor(e, t, i, s) {
    super(e, "function", t, i, s), this.block.type !== Ae.ArrowFunctionExpression && this.__defineArguments();
  }
  isArgumentsMaterialized() {
    if (this.block.type === Ae.ArrowFunctionExpression)
      return !1;
    if (!this.isStatic())
      return !0;
    const e = this.set.get("arguments");
    return Ta(e, "Always have arguments variable."), e.tainted || e.references.length !== 0;
  }
  isThisMaterialized() {
    return this.isStatic() ? this.thisFound : !0;
  }
  __defineArguments() {
    this.__defineGeneric(
      "arguments",
      this.set,
      this.variables,
      null,
      null
    ), this.taints.set("arguments", !0);
  }
  __isValidResolution(e, t) {
    if (this.block.type === "Program")
      return !0;
    const i = this.block.body.range[0];
    return !(t.scope === this && e.identifier.range[0] < i && t.defs.every((s) => s.name.range[0] >= i));
  }
}
class vb extends $e {
  constructor(e, t, i) {
    super(e, "for", t, i, !1);
  }
}
class gb extends $e {
  constructor(e, t, i) {
    super(e, "class", t, i, !1);
  }
}
var Ga = {
  Scope: $e,
  GlobalScope: Tb,
  ModuleScope: db,
  FunctionExpressionNameScope: Pb,
  CatchScope: _b,
  WithScope: hb,
  BlockScope: mb,
  SwitchScope: yb,
  FunctionScope: Sb,
  ForScope: vb,
  ClassScope: gb
};
const Xe = Ga, bb = er, Ho = Xe.GlobalScope, Yb = Xe.CatchScope, Ab = Xe.WithScope, Lb = Xe.ModuleScope, Cb = Xe.ClassScope, Vb = Xe.SwitchScope, Ob = Xe.FunctionScope, wb = Xe.ForScope, Mb = Xe.FunctionExpressionNameScope, Rb = Xe.BlockScope;
class Ib {
  constructor(e) {
    this.scopes = [], this.globalScope = null, this.__nodeToScope = /* @__PURE__ */ new WeakMap(), this.__currentScope = null, this.__options = e, this.__declaredVariables = /* @__PURE__ */ new WeakMap();
  }
  __useDirective() {
    return this.__options.directive;
  }
  __isOptimistic() {
    return this.__options.optimistic;
  }
  __ignoreEval() {
    return this.__options.ignoreEval;
  }
  __isNodejsScope() {
    return this.__options.nodejsScope;
  }
  isModule() {
    return this.__options.sourceType === "module";
  }
  isImpliedStrict() {
    return this.__options.impliedStrict;
  }
  isStrictModeSupported() {
    return this.__options.ecmaVersion >= 5;
  }
  __get(e) {
    return this.__nodeToScope.get(e);
  }
  getDeclaredVariables(e) {
    return this.__declaredVariables.get(e) || [];
  }
  acquire(e, t) {
    function i(a) {
      return !(a.type === "function" && a.functionExpressionScope);
    }
    const s = this.__get(e);
    if (!s || s.length === 0)
      return null;
    if (s.length === 1)
      return s[0];
    if (t)
      for (let a = s.length - 1; a >= 0; --a) {
        const l = s[a];
        if (i(l))
          return l;
      }
    else
      for (let a = 0, l = s.length; a < l; ++a) {
        const c = s[a];
        if (i(c))
          return c;
      }
    return null;
  }
  acquireAll(e) {
    return this.__get(e);
  }
  release(e, t) {
    const i = this.__get(e);
    if (i && i.length) {
      const s = i[0].upper;
      return s ? this.acquire(s.block, t) : null;
    }
    return null;
  }
  attach() {
  }
  detach() {
  }
  __nestScope(e) {
    return e instanceof Ho && (bb(this.__currentScope === null), this.globalScope = e), this.__currentScope = e, e;
  }
  __nestGlobalScope(e) {
    return this.__nestScope(new Ho(this, e));
  }
  __nestBlockScope(e) {
    return this.__nestScope(new Rb(this, this.__currentScope, e));
  }
  __nestFunctionScope(e, t) {
    return this.__nestScope(new Ob(this, this.__currentScope, e, t));
  }
  __nestForScope(e) {
    return this.__nestScope(new wb(this, this.__currentScope, e));
  }
  __nestCatchScope(e) {
    return this.__nestScope(new Yb(this, this.__currentScope, e));
  }
  __nestWithScope(e) {
    return this.__nestScope(new Ab(this, this.__currentScope, e));
  }
  __nestClassScope(e) {
    return this.__nestScope(new Cb(this, this.__currentScope, e));
  }
  __nestSwitchScope(e) {
    return this.__nestScope(new Vb(this, this.__currentScope, e));
  }
  __nestModuleScope(e) {
    return this.__nestScope(new Lb(this, this.__currentScope, e));
  }
  __nestFunctionExpressionNameScope(e) {
    return this.__nestScope(new Mb(this, this.__currentScope, e));
  }
  __isES6() {
    return this.__options.ecmaVersion >= 6;
  }
}
var Kl = Ib, Mr = {}, Xl = {};
(function(r) {
  (function e(t) {
    var i, s, a, l, c, u;
    function Y(_) {
      var y = {}, h, A;
      for (h in _)
        _.hasOwnProperty(h) && (A = _[h], typeof A == "object" && A !== null ? y[h] = Y(A) : y[h] = A);
      return y;
    }
    function T(_, y) {
      var h, A, V, w;
      for (A = _.length, V = 0; A; )
        h = A >>> 1, w = V + h, y(_[w]) ? A = h : (V = w + 1, A -= h + 1);
      return V;
    }
    i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, a = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ChainExpression: ["expression"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      ComprehensionExpression: ["blocks", "filter", "body"],
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      PrivateIdentifier: [],
      Program: ["body"],
      Property: ["key", "value"],
      PropertyDefinition: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, l = {}, c = {}, u = {}, s = {
      Break: l,
      Skip: c,
      Remove: u
    };
    function f(_, y) {
      this.parent = _, this.key = y;
    }
    f.prototype.replace = function(y) {
      this.parent[this.key] = y;
    }, f.prototype.remove = function() {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    };
    function v(_, y, h, A) {
      this.node = _, this.path = y, this.wrap = h, this.ref = A;
    }
    function m() {
    }
    m.prototype.path = function() {
      var y, h, A, V, w, d;
      function E(P, g) {
        if (Array.isArray(g))
          for (A = 0, V = g.length; A < V; ++A)
            P.push(g[A]);
        else
          P.push(g);
      }
      if (!this.__current.path)
        return null;
      for (w = [], y = 2, h = this.__leavelist.length; y < h; ++y)
        d = this.__leavelist[y], E(w, d.path);
      return E(w, this.__current.path), w;
    }, m.prototype.type = function() {
      var _ = this.current();
      return _.type || this.__current.wrap;
    }, m.prototype.parents = function() {
      var y, h, A;
      for (A = [], y = 1, h = this.__leavelist.length; y < h; ++y)
        A.push(this.__leavelist[y].node);
      return A;
    }, m.prototype.current = function() {
      return this.__current.node;
    }, m.prototype.__execute = function(y, h) {
      var A, V;
      return V = void 0, A = this.__current, this.__current = h, this.__state = null, y && (V = y.call(this, h.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = A, V;
    }, m.prototype.notify = function(y) {
      this.__state = y;
    }, m.prototype.skip = function() {
      this.notify(c);
    }, m.prototype.break = function() {
      this.notify(l);
    }, m.prototype.remove = function() {
      this.notify(u);
    }, m.prototype.__initialize = function(_, y) {
      this.visitor = y, this.root = _, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, y.fallback === "iteration" ? this.__fallback = Object.keys : typeof y.fallback == "function" && (this.__fallback = y.fallback), this.__keys = a, y.keys && (this.__keys = Object.assign(Object.create(this.__keys), y.keys));
    };
    function F(_) {
      return _ == null ? !1 : typeof _ == "object" && typeof _.type == "string";
    }
    function oe(_, y) {
      return (_ === i.ObjectExpression || _ === i.ObjectPattern) && y === "properties";
    }
    function N(_, y) {
      for (var h = _.length - 1; h >= 0; --h)
        if (_[h].node === y)
          return !0;
      return !1;
    }
    m.prototype.traverse = function(y, h) {
      var A, V, w, d, E, P, g, L, b, C, R, x;
      for (this.__initialize(y, h), x = {}, A = this.__worklist, V = this.__leavelist, A.push(new v(y, null, null, null)), V.push(new v(null, null, null, null)); A.length; ) {
        if (w = A.pop(), w === x) {
          if (w = V.pop(), P = this.__execute(h.leave, w), this.__state === l || P === l)
            return;
          continue;
        }
        if (w.node) {
          if (P = this.__execute(h.enter, w), this.__state === l || P === l)
            return;
          if (A.push(x), V.push(w), this.__state === c || P === c)
            continue;
          if (d = w.node, E = d.type || w.wrap, C = this.__keys[E], !C)
            if (this.__fallback)
              C = this.__fallback(d);
            else
              throw new Error("Unknown node type " + E + ".");
          for (L = C.length; (L -= 1) >= 0; )
            if (g = C[L], R = d[g], !!R) {
              if (Array.isArray(R)) {
                for (b = R.length; (b -= 1) >= 0; )
                  if (!!R[b] && !N(V, R[b])) {
                    if (oe(E, C[L]))
                      w = new v(R[b], [g, b], "Property", null);
                    else if (F(R[b]))
                      w = new v(R[b], [g, b], null, null);
                    else
                      continue;
                    A.push(w);
                  }
              } else if (F(R)) {
                if (N(V, R))
                  continue;
                A.push(new v(R, g, null, null));
              }
            }
        }
      }
    }, m.prototype.replace = function(y, h) {
      var A, V, w, d, E, P, g, L, b, C, R, x, B;
      function re(X) {
        var be, qe, at, Wa;
        if (X.ref.remove()) {
          for (qe = X.ref.key, Wa = X.ref.parent, be = A.length; be--; )
            if (at = A[be], at.ref && at.ref.parent === Wa) {
              if (at.ref.key < qe)
                break;
              --at.ref.key;
            }
        }
      }
      for (this.__initialize(y, h), R = {}, A = this.__worklist, V = this.__leavelist, x = {
        root: y
      }, P = new v(y, null, null, new f(x, "root")), A.push(P), V.push(P); A.length; ) {
        if (P = A.pop(), P === R) {
          if (P = V.pop(), E = this.__execute(h.leave, P), E !== void 0 && E !== l && E !== c && E !== u && P.ref.replace(E), (this.__state === u || E === u) && re(P), this.__state === l || E === l)
            return x.root;
          continue;
        }
        if (E = this.__execute(h.enter, P), E !== void 0 && E !== l && E !== c && E !== u && (P.ref.replace(E), P.node = E), (this.__state === u || E === u) && (re(P), P.node = null), this.__state === l || E === l)
          return x.root;
        if (w = P.node, !!w && (A.push(R), V.push(P), !(this.__state === c || E === c))) {
          if (d = w.type || P.wrap, b = this.__keys[d], !b)
            if (this.__fallback)
              b = this.__fallback(w);
            else
              throw new Error("Unknown node type " + d + ".");
          for (g = b.length; (g -= 1) >= 0; )
            if (B = b[g], C = w[B], !!C)
              if (Array.isArray(C)) {
                for (L = C.length; (L -= 1) >= 0; )
                  if (!!C[L]) {
                    if (oe(d, b[g]))
                      P = new v(C[L], [B, L], "Property", new f(C, L));
                    else if (F(C[L]))
                      P = new v(C[L], [B, L], null, new f(C, L));
                    else
                      continue;
                    A.push(P);
                  }
              } else
                F(C) && A.push(new v(C, B, null, new f(w, B)));
        }
      }
      return x.root;
    };
    function Ee(_, y) {
      var h = new m();
      return h.traverse(_, y);
    }
    function it(_, y) {
      var h = new m();
      return h.replace(_, y);
    }
    function st(_, y) {
      var h;
      return h = T(y, function(V) {
        return V.range[0] > _.range[0];
      }), _.extendedRange = [_.range[0], _.range[1]], h !== y.length && (_.extendedRange[1] = y[h].range[0]), h -= 1, h >= 0 && (_.extendedRange[0] = y[h].range[1]), _;
    }
    function I(_, y, h) {
      var A = [], V, w, d, E;
      if (!_.range)
        throw new Error("attachComments needs range information");
      if (!h.length) {
        if (y.length) {
          for (d = 0, w = y.length; d < w; d += 1)
            V = Y(y[d]), V.extendedRange = [0, _.range[0]], A.push(V);
          _.leadingComments = A;
        }
        return _;
      }
      for (d = 0, w = y.length; d < w; d += 1)
        A.push(st(Y(y[d]), h));
      return E = 0, Ee(_, {
        enter: function(P) {
          for (var g; E < A.length && (g = A[E], !(g.extendedRange[1] > P.range[0])); )
            g.extendedRange[1] === P.range[0] ? (P.leadingComments || (P.leadingComments = []), P.leadingComments.push(g), A.splice(E, 1)) : E += 1;
          if (E === A.length)
            return s.Break;
          if (A[E].extendedRange[0] > P.range[1])
            return s.Skip;
        }
      }), E = 0, Ee(_, {
        leave: function(P) {
          for (var g; E < A.length && (g = A[E], !(P.range[1] < g.extendedRange[0])); )
            P.range[1] === g.extendedRange[0] ? (P.trailingComments || (P.trailingComments = []), P.trailingComments.push(g), A.splice(E, 1)) : E += 1;
          if (E === A.length)
            return s.Break;
          if (A[E].extendedRange[0] > P.range[1])
            return s.Skip;
        }
      }), _;
    }
    return t.Syntax = i, t.traverse = Ee, t.replace = it, t.attachComments = I, t.VisitorKeys = a, t.VisitorOption = s, t.Controller = m, t.cloneEnvironment = function() {
      return e({});
    }, t;
  })(r);
})(Xl);
const xb = "esrecurse", Ub = "ECMAScript AST recursive visitor", $b = "https://github.com/estools/esrecurse", Db = "esrecurse.js", jb = "4.3.0", kb = {
  node: ">=4.0"
}, Fb = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
], Nb = {
  type: "git",
  url: "https://github.com/estools/esrecurse.git"
}, Bb = {
  estraverse: "^5.2.0"
}, Gb = {
  "babel-cli": "^6.24.1",
  "babel-eslint": "^7.2.3",
  "babel-preset-es2015": "^6.24.1",
  "babel-register": "^6.24.1",
  chai: "^4.0.2",
  esprima: "^4.0.0",
  gulp: "^3.9.0",
  "gulp-bump": "^2.7.0",
  "gulp-eslint": "^4.0.0",
  "gulp-filter": "^5.0.0",
  "gulp-git": "^2.4.1",
  "gulp-mocha": "^4.3.1",
  "gulp-tag-version": "^1.2.1",
  jsdoc: "^3.3.0-alpha10",
  minimist: "^1.1.0"
}, Wb = "BSD-2-Clause", Hb = {
  test: "gulp travis",
  "unit-test": "gulp test",
  lint: "gulp lint"
}, Kb = {
  presets: [
    "es2015"
  ]
}, Xb = {
  name: xb,
  description: Ub,
  homepage: $b,
  main: Db,
  version: jb,
  engines: kb,
  maintainers: Fb,
  repository: Nb,
  dependencies: Bb,
  devDependencies: Gb,
  license: Wb,
  scripts: Hb,
  babel: Kb
};
(function() {
  var r = Xl;
  function e(s) {
    return s == null ? !1 : typeof s == "object" && typeof s.type == "string";
  }
  function t(s, a) {
    return (s === r.Syntax.ObjectExpression || s === r.Syntax.ObjectPattern) && a === "properties";
  }
  function i(s, a) {
    a = a || {}, this.__visitor = s || this, this.__childVisitorKeys = a.childVisitorKeys ? Object.assign({}, r.VisitorKeys, a.childVisitorKeys) : r.VisitorKeys, a.fallback === "iteration" ? this.__fallback = Object.keys : typeof a.fallback == "function" && (this.__fallback = a.fallback);
  }
  i.prototype.visitChildren = function(s) {
    var a, l, c, u, Y, T, f;
    if (s != null) {
      if (a = s.type || r.Syntax.Property, l = this.__childVisitorKeys[a], !l)
        if (this.__fallback)
          l = this.__fallback(s);
        else
          throw new Error("Unknown node type " + a + ".");
      for (c = 0, u = l.length; c < u; ++c)
        if (f = s[l[c]], f)
          if (Array.isArray(f))
            for (Y = 0, T = f.length; Y < T; ++Y)
              f[Y] && (e(f[Y]) || t(a, l[c])) && this.visit(f[Y]);
          else
            e(f) && this.visit(f);
    }
  }, i.prototype.visit = function(s) {
    var a;
    if (s != null) {
      if (a = s.type || r.Syntax.Property, this.__visitor[a]) {
        this.__visitor[a].call(this, s);
        return;
      }
      this.visitChildren(s);
    }
  }, Mr.version = Xb.version, Mr.Visitor = i, Mr.visit = function(s, a, l) {
    var c = new i(a, l);
    c.visit(s);
  };
})();
const $t = Ms.Syntax, qb = Mr;
function zb(r) {
  return r[r.length - 1] || null;
}
class Jb extends qb.Visitor {
  static isPattern(e) {
    const t = e.type;
    return t === $t.Identifier || t === $t.ObjectPattern || t === $t.ArrayPattern || t === $t.SpreadElement || t === $t.RestElement || t === $t.AssignmentPattern;
  }
  constructor(e, t, i) {
    super(null, e), this.rootPattern = t, this.callback = i, this.assignments = [], this.rightHandNodes = [], this.restElements = [];
  }
  Identifier(e) {
    const t = zb(this.restElements);
    this.callback(e, {
      topLevel: e === this.rootPattern,
      rest: t != null && t.argument === e,
      assignments: this.assignments
    });
  }
  Property(e) {
    e.computed && this.rightHandNodes.push(e.key), this.visit(e.value);
  }
  ArrayPattern(e) {
    for (let t = 0, i = e.elements.length; t < i; ++t) {
      const s = e.elements[t];
      this.visit(s);
    }
  }
  AssignmentPattern(e) {
    this.assignments.push(e), this.visit(e.left), this.rightHandNodes.push(e.right), this.assignments.pop();
  }
  RestElement(e) {
    this.restElements.push(e), this.visit(e.argument), this.restElements.pop();
  }
  MemberExpression(e) {
    e.computed && this.rightHandNodes.push(e.property), this.rightHandNodes.push(e.object);
  }
  SpreadElement(e) {
    this.visit(e.argument);
  }
  ArrayExpression(e) {
    e.elements.forEach(this.visit, this);
  }
  AssignmentExpression(e) {
    this.assignments.push(e), this.visit(e.left), this.rightHandNodes.push(e.right), this.assignments.pop();
  }
  CallExpression(e) {
    e.arguments.forEach((t) => {
      this.rightHandNodes.push(t);
    }), this.visit(e.callee);
  }
}
var ql = Jb;
const Ze = Ms.Syntax, zl = Mr, vt = Rs, Nt = Vn, da = ql, Jl = Ba, Qb = er, Ko = Jl.ParameterDefinition, Bt = Jl.Definition;
function Zb(r, e, t, i) {
  const s = new da(r, e, i);
  s.visit(e), t != null && s.rightHandNodes.forEach(t.visit, t);
}
class eY extends zl.Visitor {
  constructor(e, t) {
    super(null, t.options), this.declaration = e, this.referencer = t;
  }
  visitImport(e, t) {
    this.referencer.visitPattern(e, (i) => {
      this.referencer.currentScope().__define(
        i,
        new Bt(
          Nt.ImportBinding,
          i,
          t,
          this.declaration,
          null,
          null
        )
      );
    });
  }
  ImportNamespaceSpecifier(e) {
    const t = e.local || e.id;
    t && this.visitImport(t, e);
  }
  ImportDefaultSpecifier(e) {
    const t = e.local || e.id;
    this.visitImport(t, e);
  }
  ImportSpecifier(e) {
    const t = e.local || e.id;
    e.name ? this.visitImport(e.name, e) : this.visitImport(t, e);
  }
}
class tY extends zl.Visitor {
  constructor(e, t) {
    super(null, e), this.options = e, this.scopeManager = t, this.parent = null, this.isInnerMethodDefinition = !1;
  }
  currentScope() {
    return this.scopeManager.__currentScope;
  }
  close(e) {
    for (; this.currentScope() && e === this.currentScope().block; )
      this.scopeManager.__currentScope = this.currentScope().__close(this.scopeManager);
  }
  pushInnerMethodDefinition(e) {
    const t = this.isInnerMethodDefinition;
    return this.isInnerMethodDefinition = e, t;
  }
  popInnerMethodDefinition(e) {
    this.isInnerMethodDefinition = e;
  }
  referencingDefaultValue(e, t, i, s) {
    const a = this.currentScope();
    t.forEach((l) => {
      a.__referencing(
        e,
        vt.WRITE,
        l.right,
        i,
        e !== l.left,
        s
      );
    });
  }
  visitPattern(e, t, i) {
    let s = t, a = i;
    typeof t == "function" && (a = t, s = { processRightHandNodes: !1 }), Zb(
      this.options,
      e,
      s.processRightHandNodes ? this : null,
      a
    );
  }
  visitFunction(e) {
    let t, i;
    e.type === Ze.FunctionDeclaration && this.currentScope().__define(
      e.id,
      new Bt(
        Nt.FunctionName,
        e.id,
        e,
        null,
        null,
        null
      )
    ), e.type === Ze.FunctionExpression && e.id && this.scopeManager.__nestFunctionExpressionNameScope(e), this.scopeManager.__nestFunctionScope(e, this.isInnerMethodDefinition);
    const s = this;
    function a(l, c) {
      s.currentScope().__define(
        l,
        new Ko(
          l,
          e,
          t,
          c.rest
        )
      ), s.referencingDefaultValue(l, c.assignments, null, !0);
    }
    for (t = 0, i = e.params.length; t < i; ++t)
      this.visitPattern(e.params[t], { processRightHandNodes: !0 }, a);
    e.rest && this.visitPattern({
      type: "RestElement",
      argument: e.rest
    }, (l) => {
      this.currentScope().__define(
        l,
        new Ko(
          l,
          e,
          e.params.length,
          !0
        )
      );
    }), e.body && (e.body.type === Ze.BlockStatement ? this.visitChildren(e.body) : this.visit(e.body)), this.close(e);
  }
  visitClass(e) {
    e.type === Ze.ClassDeclaration && this.currentScope().__define(
      e.id,
      new Bt(
        Nt.ClassName,
        e.id,
        e,
        null,
        null,
        null
      )
    ), this.visit(e.superClass), this.scopeManager.__nestClassScope(e), e.id && this.currentScope().__define(
      e.id,
      new Bt(
        Nt.ClassName,
        e.id,
        e
      )
    ), this.visit(e.body), this.close(e);
  }
  visitProperty(e) {
    let t;
    e.computed && this.visit(e.key);
    const i = e.type === Ze.MethodDefinition;
    i && (t = this.pushInnerMethodDefinition(!0)), this.visit(e.value), i && this.popInnerMethodDefinition(t);
  }
  visitForIn(e) {
    e.left.type === Ze.VariableDeclaration && e.left.kind !== "var" && this.scopeManager.__nestForScope(e), e.left.type === Ze.VariableDeclaration ? (this.visit(e.left), this.visitPattern(e.left.declarations[0].id, (t) => {
      this.currentScope().__referencing(t, vt.WRITE, e.right, null, !0, !0);
    })) : this.visitPattern(e.left, { processRightHandNodes: !0 }, (t, i) => {
      let s = null;
      this.currentScope().isStrict || (s = {
        pattern: t,
        node: e
      }), this.referencingDefaultValue(t, i.assignments, s, !1), this.currentScope().__referencing(t, vt.WRITE, e.right, s, !0, !1);
    }), this.visit(e.right), this.visit(e.body), this.close(e);
  }
  visitVariableDeclaration(e, t, i, s) {
    const a = i.declarations[s], l = a.init;
    this.visitPattern(a.id, { processRightHandNodes: !0 }, (c, u) => {
      e.__define(
        c,
        new Bt(
          t,
          c,
          a,
          i,
          s,
          i.kind
        )
      ), this.referencingDefaultValue(c, u.assignments, null, !0), l && this.currentScope().__referencing(c, vt.WRITE, l, null, !u.topLevel, !0);
    });
  }
  AssignmentExpression(e) {
    da.isPattern(e.left) ? e.operator === "=" ? this.visitPattern(e.left, { processRightHandNodes: !0 }, (t, i) => {
      let s = null;
      this.currentScope().isStrict || (s = {
        pattern: t,
        node: e
      }), this.referencingDefaultValue(t, i.assignments, s, !1), this.currentScope().__referencing(t, vt.WRITE, e.right, s, !i.topLevel, !1);
    }) : this.currentScope().__referencing(e.left, vt.RW, e.right) : this.visit(e.left), this.visit(e.right);
  }
  CatchClause(e) {
    this.scopeManager.__nestCatchScope(e), this.visitPattern(e.param, { processRightHandNodes: !0 }, (t, i) => {
      this.currentScope().__define(
        t,
        new Bt(
          Nt.CatchClause,
          e.param,
          e,
          null,
          null,
          null
        )
      ), this.referencingDefaultValue(t, i.assignments, null, !0);
    }), this.visit(e.body), this.close(e);
  }
  Program(e) {
    this.scopeManager.__nestGlobalScope(e), this.scopeManager.__isNodejsScope() && (this.currentScope().isStrict = !1, this.scopeManager.__nestFunctionScope(e, !1)), this.scopeManager.__isES6() && this.scopeManager.isModule() && this.scopeManager.__nestModuleScope(e), this.scopeManager.isStrictModeSupported() && this.scopeManager.isImpliedStrict() && (this.currentScope().isStrict = !0), this.visitChildren(e), this.close(e);
  }
  Identifier(e) {
    this.currentScope().__referencing(e);
  }
  UpdateExpression(e) {
    da.isPattern(e.argument) ? this.currentScope().__referencing(e.argument, vt.RW, null) : this.visitChildren(e);
  }
  MemberExpression(e) {
    this.visit(e.object), e.computed && this.visit(e.property);
  }
  Property(e) {
    this.visitProperty(e);
  }
  MethodDefinition(e) {
    this.visitProperty(e);
  }
  BreakStatement() {
  }
  ContinueStatement() {
  }
  LabeledStatement(e) {
    this.visit(e.body);
  }
  ForStatement(e) {
    e.init && e.init.type === Ze.VariableDeclaration && e.init.kind !== "var" && this.scopeManager.__nestForScope(e), this.visitChildren(e), this.close(e);
  }
  ClassExpression(e) {
    this.visitClass(e);
  }
  ClassDeclaration(e) {
    this.visitClass(e);
  }
  CallExpression(e) {
    !this.scopeManager.__ignoreEval() && e.callee.type === Ze.Identifier && e.callee.name === "eval" && this.currentScope().variableScope.__detectEval(), this.visitChildren(e);
  }
  BlockStatement(e) {
    this.scopeManager.__isES6() && this.scopeManager.__nestBlockScope(e), this.visitChildren(e), this.close(e);
  }
  ThisExpression() {
    this.currentScope().variableScope.__detectThis();
  }
  WithStatement(e) {
    this.visit(e.object), this.scopeManager.__nestWithScope(e), this.visit(e.body), this.close(e);
  }
  VariableDeclaration(e) {
    const t = e.kind === "var" ? this.currentScope().variableScope : this.currentScope();
    for (let i = 0, s = e.declarations.length; i < s; ++i) {
      const a = e.declarations[i];
      this.visitVariableDeclaration(t, Nt.Variable, e, i), a.init && this.visit(a.init);
    }
  }
  SwitchStatement(e) {
    this.visit(e.discriminant), this.scopeManager.__isES6() && this.scopeManager.__nestSwitchScope(e);
    for (let t = 0, i = e.cases.length; t < i; ++t)
      this.visit(e.cases[t]);
    this.close(e);
  }
  FunctionDeclaration(e) {
    this.visitFunction(e);
  }
  FunctionExpression(e) {
    this.visitFunction(e);
  }
  ForOfStatement(e) {
    this.visitForIn(e);
  }
  ForInStatement(e) {
    this.visitForIn(e);
  }
  ArrowFunctionExpression(e) {
    this.visitFunction(e);
  }
  ImportDeclaration(e) {
    Qb(this.scopeManager.__isES6() && this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context."), new eY(e, this).visit(e);
  }
  visitExportDeclaration(e) {
    if (!e.source) {
      if (e.declaration) {
        this.visit(e.declaration);
        return;
      }
      this.visitChildren(e);
    }
  }
  ExportDeclaration(e) {
    this.visitExportDeclaration(e);
  }
  ExportAllDeclaration(e) {
    this.visitExportDeclaration(e);
  }
  ExportDefaultDeclaration(e) {
    this.visitExportDeclaration(e);
  }
  ExportNamedDeclaration(e) {
    this.visitExportDeclaration(e);
  }
  ExportSpecifier(e) {
    const t = e.id || e.local;
    this.visit(t);
  }
  MetaProperty() {
  }
}
var Ql = tY;
const rY = "eslint-scope", nY = "ECMAScript scope analyzer for ESLint", iY = "http://github.com/eslint/eslint-scope", sY = "lib/index.js", aY = "5.1.1", oY = {
  node: ">=8.0.0"
}, lY = "eslint/eslint-scope", cY = {
  url: "https://github.com/eslint/eslint-scope/issues"
}, uY = "BSD-2-Clause", pY = {
  test: "node Makefile.js test",
  lint: "node Makefile.js lint",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
}, EY = [
  "LICENSE",
  "README.md",
  "lib"
], fY = {
  esrecurse: "^4.3.0",
  estraverse: "^4.1.1"
}, TY = {
  "@typescript-eslint/parser": "^1.11.0",
  chai: "^4.2.0",
  eslint: "^6.0.1",
  "eslint-config-eslint": "^5.0.1",
  "eslint-plugin-node": "^9.1.0",
  "eslint-release": "^1.0.0",
  "eslint-visitor-keys": "^1.2.0",
  espree: "^7.1.0",
  istanbul: "^0.4.5",
  mocha: "^6.1.4",
  "npm-license": "^0.3.3",
  shelljs: "^0.8.3",
  typescript: "^3.5.2"
}, dY = {
  name: rY,
  description: nY,
  homepage: iY,
  main: sY,
  version: aY,
  engines: oY,
  repository: lY,
  bugs: cY,
  license: uY,
  scripts: pY,
  files: EY,
  dependencies: fY,
  devDependencies: TY
}, PY = er, Zl = Kl, _Y = Ql, hY = Rs, mY = Vn, yY = Ga.Scope, SY = dY.version;
function vY() {
  return {
    optimistic: !1,
    directive: !1,
    nodejsScope: !1,
    impliedStrict: !1,
    sourceType: "script",
    ecmaVersion: 5,
    childVisitorKeys: null,
    fallback: "iteration"
  };
}
function Pa(r, e) {
  function t(i) {
    return typeof i == "object" && i instanceof Object && !(i instanceof Array) && !(i instanceof RegExp);
  }
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = e[i];
      t(s) ? t(r[i]) ? Pa(r[i], s) : r[i] = Pa({}, s) : r[i] = s;
    }
  return r;
}
function gY(r, e) {
  const t = Pa(vY(), e), i = new Zl(t);
  return new _Y(t, i).visit(r), PY(i.__currentScope === null, "currentScope should be null."), i;
}
var ec = {
  version: SY,
  Reference: hY,
  Variable: mY,
  Scope: yY,
  ScopeManager: Zl,
  analyze: gY
}, Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.analyze = void 0;
const bY = ec, YY = bY.analyze;
Is.analyze = YY;
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.ParameterDefinition = Qt.Definition = void 0;
const tc = Ba, AY = tc.Definition;
Qt.Definition = AY;
const LY = tc.ParameterDefinition;
Qt.ParameterDefinition = LY;
var rc = {};
Object.defineProperty(rc, "__esModule", { value: !0 });
var xs = {}, CY = p && p.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.PatternVisitor = void 0;
const VY = CY(ql), OY = VY.default;
xs.PatternVisitor = OY;
var Us = {}, wY = p && p.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.Reference = void 0;
const MY = wY(Rs), RY = MY.default;
Us.Reference = RY;
var $s = {}, IY = p && p.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.Referencer = void 0;
const xY = IY(Ql), UY = xY.default;
$s.Referencer = UY;
var J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.ClassScope = J.ForScope = J.FunctionScope = J.SwitchScope = J.BlockScope = J.WithScope = J.CatchScope = J.FunctionExpressionNameScope = J.ModuleScope = J.GlobalScope = J.Scope = void 0;
const De = Ga, $Y = De.Scope;
J.Scope = $Y;
const DY = De.GlobalScope;
J.GlobalScope = DY;
const jY = De.ModuleScope;
J.ModuleScope = jY;
const kY = De.FunctionExpressionNameScope;
J.FunctionExpressionNameScope = kY;
const FY = De.CatchScope;
J.CatchScope = FY;
const NY = De.WithScope;
J.WithScope = NY;
const BY = De.BlockScope;
J.BlockScope = BY;
const GY = De.SwitchScope;
J.SwitchScope = GY;
const WY = De.FunctionScope;
J.FunctionScope = WY;
const HY = De.ForScope;
J.ForScope = HY;
const KY = De.ClassScope;
J.ClassScope = KY;
var Ds = {}, XY = p && p.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.ScopeManager = void 0;
const qY = XY(Kl), zY = qY.default;
Ds.ScopeManager = zY;
var js = {}, JY = p && p.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(js, "__esModule", { value: !0 });
js.Variable = void 0;
const QY = JY(Vn), ZY = QY.default;
js.Variable = ZY;
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(s, a, l, c) {
    c === void 0 && (c = l);
    var u = Object.getOwnPropertyDescriptor(a, l);
    (!u || ("get" in u ? !a.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
      return a[l];
    } }), Object.defineProperty(s, c, u);
  } : function(s, a, l, c) {
    c === void 0 && (c = l), s[c] = a[l];
  }), t = p && p.__exportStar || function(s, a) {
    for (var l in s)
      l !== "default" && !Object.prototype.hasOwnProperty.call(a, l) && e(a, s, l);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.version = void 0;
  const i = ec;
  t(Is, r), t(Qt, r), t(rc, r), t(xs, r), t(Us, r), t($s, r), t(J, r), t(Ds, r), t(js, r), r.version = i.version;
})(Nl);
(function(r) {
  var e = p && p.__createBinding || (Object.create ? function(T, f, v, m) {
    m === void 0 && (m = v);
    var F = Object.getOwnPropertyDescriptor(f, v);
    (!F || ("get" in F ? !f.__esModule : F.writable || F.configurable)) && (F = { enumerable: !0, get: function() {
      return f[v];
    } }), Object.defineProperty(T, m, F);
  } : function(T, f, v, m) {
    m === void 0 && (m = v), T[m] = f[v];
  }), t = p && p.__setModuleDefault || (Object.create ? function(T, f) {
    Object.defineProperty(T, "default", { enumerable: !0, value: f });
  } : function(T, f) {
    T.default = f;
  }), i = p && p.__importStar || function(T) {
    if (T && T.__esModule)
      return T;
    var f = {};
    if (T != null)
      for (var v in T)
        v !== "default" && Object.prototype.hasOwnProperty.call(T, v) && e(f, T, v);
    return t(f, T), f;
  }, s = p && p.__exportStar || function(T, f) {
    for (var v in T)
      v !== "default" && !Object.prototype.hasOwnProperty.call(f, v) && e(f, T, v);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.TSESLintScope = r.TSESLint = r.JSONSchema = r.ESLintUtils = r.ASTUtils = void 0;
  const a = i(qo);
  r.ASTUtils = a;
  const l = i(ml);
  r.ESLintUtils = l;
  const c = i(Rl);
  r.JSONSchema = c;
  const u = i(Il);
  r.TSESLint = u;
  const Y = i(Nl);
  r.TSESLintScope = Y, s(Ca, r);
})(Xo);
function nc(r) {
  return (e, t) => {
    if (r) {
      const i = r.includes(e), s = r.includes(t);
      if (i && !s)
        return !0;
      if (!i && s)
        return !1;
      if (i && s)
        return r.indexOf(e) <= r.indexOf(t);
    }
    return e.toLowerCase() <= t.toLowerCase();
  };
}
function ic(r, e, t) {
  return (i) => {
    const s = [];
    if (!(e != null && e.node))
      return s;
    const a = t.getSourceCode();
    return eA(a, s, i, r, e.node), s;
  };
}
function eA(r, e, t, i, s) {
  const a = Y(i), l = T(i), c = Y(s), u = T(s);
  if (!!l != !!u) {
    if (l) {
      const f = {
        end: r.getIndexFromLoc(l.loc.end),
        start: r.getIndexFromLoc(l.loc.start)
      };
      a.end = Math.max(a.end, f.end);
      const v = r.getLastToken(s);
      if (!v)
        return;
      const m = r.getIndexFromLoc(v.loc.end), F = r.text.slice(a.start, f.start), oe = r.text.slice(f.end, a.end), N = r.text.slice(c.start, m), Ee = r.text.slice(m, c.end);
      e.push(t.replaceTextRange([f.end, a.end], Ee)), e.push(t.replaceTextRange([a.start, f.start], N)), e.push(t.replaceTextRange([m, c.end], oe)), e.push(t.replaceTextRange([c.start, m], F));
    } else if (u) {
      const f = {
        end: r.getIndexFromLoc(u.loc.end),
        start: r.getIndexFromLoc(u.loc.start)
      };
      c.end = Math.max(c.end, f.end);
      const v = r.getLastToken(i);
      if (!v)
        return;
      const m = r.getIndexFromLoc(v.loc.end), F = r.text.slice(a.start, m), oe = r.text.slice(m, a.end), N = r.text.slice(c.start, f.start), Ee = r.text.slice(f.end, c.end);
      e.push(t.replaceTextRange([m, a.end], Ee)), e.push(t.replaceTextRange([a.start, m], N)), e.push(t.replaceTextRange([f.end, c.end], oe)), e.push(t.replaceTextRange([c.start, f.start], F));
    }
  } else {
    const f = r.text.slice(a.start, a.end), v = r.text.slice(c.start, c.end);
    e.push(t.replaceTextRange([a.start, a.end], v)), e.push(t.replaceTextRange([c.start, c.end], f));
  }
  function Y(f) {
    var Ee, it, st;
    let v = r.getTokenAfter(f);
    v && v.type === "Punctuator" && v.value === "," && (v = r.getTokenAfter(v));
    const m = r.getTokenBefore(f);
    if (!m || !v)
      throw Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");
    const F = {
      end: (Ee = r.getLastToken(f)) == null ? void 0 : Ee.loc.end,
      start: (it = r.getFirstToken(f)) == null ? void 0 : it.loc.start
    };
    if (!F.start || !F.end)
      throw Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");
    let oe;
    m.loc.end.line === F.start.line ? oe = r.getIndexFromLoc(F.start) : oe = r.lineStartIndices[m.loc.end.line];
    let N;
    return v.loc.start.line === F.end.line ? N = r.getIndexFromLoc(F.end) : N = r.lineStartIndices[f.loc.end.line], f.type === Xo.TSESTree.AST_NODE_TYPES.TSPropertySignature && (oe = f.key.range[0], N = ((st = f.typeAnnotation) == null ? void 0 : st.range[1]) || f.key.range[1]), { end: N, start: oe };
  }
  function T(f) {
    const v = r.getTokenAfter(f);
    if (v && v.type === "Punctuator" && v.value === ",")
      return v;
  }
}
function sc(r) {
  switch (r.key.type) {
    case "Literal":
      return String(r.key.value);
    case "TemplateLiteral":
      if (r.key.expressions.length === 0 && r.key.quasis.length === 1)
        return r.key.quasis[0].value.cooked || void 0;
      break;
    case "Identifier":
      if (!r.computed)
        return r.key.name;
      break;
  }
}
function tA(r) {
  var i;
  let e;
  const t = nc((i = r.options[0]) == null ? void 0 : i.orderedKeys);
  return {
    ObjectExpression() {
      e = {
        name: void 0,
        node: void 0,
        upper: e
      };
    },
    "ObjectExpression:exit"() {
      !e || (e = e.upper);
    },
    ObjectPattern() {
      e = {
        name: void 0,
        node: void 0,
        upper: e
      };
    },
    "ObjectPattern:exit"() {
      !e || (e = e.upper);
    },
    Property(s) {
      if (!e)
        return;
      const a = {
        name: e.name,
        node: e.node,
        upper: e
      }, l = sc(s);
      if (l && (e.name = l, e.node = s || a.node), !(!a.name || !l) && !t(a.name, l)) {
        if (!s.key.loc)
          return;
        r.report({
          data: {
            prevName: a.name,
            thisName: l
          },
          fix: ic(s, a, r),
          loc: s.key.loc,
          messageId: "object-keys-error",
          node: s
        });
      }
    }
  };
}
const rA = {
  docs: {
    description: "Require object keys to be sorted with custom order",
    recommended: !1,
    url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
  },
  fixable: "code",
  messages: {
    "object-keys-error": "Expected object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
  },
  schema: [ac],
  type: "suggestion"
}, nA = {
  create: tA,
  meta: rA
}, iA = {
  additionalProperties: !1,
  properties: {
    orderedKeys: {
      type: "array"
    }
  },
  type: "object"
};
function sA(r) {
  var i;
  let e;
  const t = nc((i = r.options[0]) == null ? void 0 : i.orderedKeys);
  return {
    TSInterfaceDeclaration() {
      e = {
        name: void 0,
        node: void 0,
        upper: e
      };
    },
    "TSInterfaceDeclaration:exit"() {
      !e || (e = e.upper);
    },
    TSPropertySignature(s) {
      if (!e)
        return;
      const a = {
        name: e.name,
        node: e.node,
        upper: e
      }, l = sc(s);
      if (l && (e.name = l, e.node = s || a.node), !(!a.name || !l) && !t(a.name, l)) {
        if (!s.key.loc)
          return;
        r.report({
          data: {
            prevName: a.name,
            thisName: l
          },
          fix: ic(s, a, r),
          loc: s.key.loc,
          messageId: "type-keys-error",
          node: s
        });
      }
    },
    TSTypeLiteral() {
      e = {
        name: void 0,
        node: void 0,
        upper: e
      };
    },
    "TSTypeLiteral:exit"() {
      !e || (e = e.upper);
    }
  };
}
const aA = {
  docs: {
    description: "Require type keys to be sorted with custom order",
    recommended: !1,
    url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
  },
  fixable: "code",
  messages: {
    "type-keys-error": "Expected type keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
  },
  schema: [iA],
  type: "suggestion"
}, oA = {
  create: sA,
  meta: aA
}, uA = {
  "object-keys": nA,
  "type-keys": oA
};
export {
  uA as rules
};
