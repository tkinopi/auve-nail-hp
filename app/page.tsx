'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'reserve'

export default function Home() {
  const [tab, setTab] = useState<Tab>('top')

  const navItems: { id: Tab; label: string }[] = [
    { id: 'top', label: 'TOP' },
    { id: 'menu', label: 'MENU' },
    { id: 'info', label: 'SALON INFO' },
    { id: 'reserve', label: 'RESERVE' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── HEADER ── */}
      <header style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100, padding: '0 40px' }}>
        <div className="site-header-inner">
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 300, letterSpacing: '0.35em', color: 'var(--text)', fontStyle: 'italic' }}>
              AUVÉ
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--text-dim)', marginTop: '-2px' }}>NAIL SALON · FUKUOKA</div>
          </div>
          <nav className="site-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: tab === item.id ? 'var(--accent)' : 'var(--text-muted)',
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  padding: '8px 20px',
                  cursor: 'pointer',
                  borderBottom: tab === item.id ? '1px solid var(--accent)' : '1px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ── TOP TAB ── */}
      {tab === 'top' && (
        <main>
          {/* Hero */}
          <section className="hero-grid" style={{ minHeight: '540px', background: 'var(--bg2)' }}>
            <div className="hero-pad" style={{ padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.45em', color: 'var(--accent)', marginBottom: '24px' }}>PRIVATE NAIL SALON · DAIMYO, FUKUOKA</div>
              <h1 className="hero-title" style={{ color: 'var(--text)' }}>
                Your nails,<br />
                <span style={{ color: 'var(--accent)' }}>your story.</span>
              </h1>
              <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 2, maxWidth: '340px', fontWeight: 300 }}>
                完全予約制のプライベートサロン。<br />
                MIZUKIが丁寧にカウンセリングし、<br />
                あなたの理想の指先を叶えます。
              </p>
              <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setTab('reserve')}
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 36px',
                    fontSize: '12px',
                    letterSpacing: '0.25em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  BOOK NOW
                </button>
                <button
                  onClick={() => setTab('menu')}
                  style={{
                    background: 'none',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                    padding: '14px 36px',
                    fontSize: '12px',
                    letterSpacing: '0.25em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  MENU
                </button>
              </div>
            </div>
            <div className="hero-deco" style={{ background: 'var(--blush)', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 40% 50%, rgba(201,149,110,0.15) 0%, transparent 65%)',
              }} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '16px',
              }}>
                <div style={{ fontSize: '64px', opacity: 0.3 }}>💅</div>
                <div style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.45em', fontFamily: "'Cormorant Garamond', serif" }}>
                  MIZUKI · NAIL ARTIST
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="main-pad" style={{ paddingTop: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '12px' }}>ABOUT</div>
              <h2 className="section-title" style={{ color: 'var(--text)' }}>AUVÉについて</h2>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)', margin: '20px auto 0' }} />
            </div>
            <div className="grid-3">
              {[
                { icon: '✦', title: '完全予約制', body: 'プライベートな空間で、あなただけの時間を。他のお客様と重ならない完全予約制のサロンです。' },
                { icon: '✦', title: '丁寧なカウンセリング', body: 'ご来店のたびに、ならたいイメージをヒアリング。お爪の状態や好みに合わせたデザインをご提案します。' },
                { icon: '✦', title: '持での良い施術', body: 'お爪によさしい素材と技術で、長持ちする美しい仕上がらを実現。次回まで綺麗な状態をキープします。' },
              ].map(f => (
                <div key={f.title} style={{ textAlign: 'center', padding: '36px 24px', background: 'var(--surface)', border: '1px solid var(--border2)' }}>
                  <div style={{ fontSize: '20px', color: 'var(--accent)', marginBottom: '16px' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '15px', color: 'var(--text)', marginBottom: '12px', letterSpacing: '0.1em', fontWeight: 400 }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.9 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Info strip */}
          <section style={{ background: 'var(--blush)', padding: '32px 40px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="info-bar">
              {[
                { label: '営業時間', value: '11:00 〜 21:00（水曜定休）' },
                { label: '場所', value: '福岡市中央区大名1-10-33 東峰マンション大名 505' },
                { label: '電話', value: '092-406-1707' },
                { label: '予約', value: '完全予約制' },
              ].map(i => (
                <div key={i.label}>
                  <div style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--accent)', marginBottom: '4px' }}>{i.label}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', wordBreak: 'break-all' }}>{i.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 40px', textAlign: 'center', background: 'var(--surface)' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--text-dim)', marginBottom: '24px', fontFamily: "'Cormorant Garamond', serif" }}>RESERVATION</p>
            <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '12px' }}>ご予約はこちら</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '36px' }}>完全予約制です。お電話またはLINEにてお気軽にお問い合わせく���W��</p>
            <button
              onClick={() => setTab('reserve')}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                padding: '16px 56px',
                fontSize: '12px',
                letterSpacing: '0.3em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              BOOK AN APPOINTMENT
            </button>
          </section>
        </main>
      )}

      {/* ── MENU TAB ── */}
      {tab === 'menu' && (
        <main className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '12px' }}>MENU & PRICE</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>メニュー・料金</h2>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)', margin: '20px auto 0' }} />
          </div>

          {[
            {
              category: 'ジェルネイル',
              items: [
                { name: 'ワンカラー', price: '5,500', note: '手・足' },
                { name: 'フレンチ', price: '6,500', note: 'スタンダード/逆フレンチ' },
                { name: 'グラデーション', price: '6,800', note: '2色まで' },
                { name: 'デザインコース', price: '8,000〜', note: 'アート・ストーン・パーツ含む' },
              ],
            },
            {
              category: 'オフ・ケア',
              items: [
                { name: 'ジェルオフ（セルフ除去なし）', price: '3,300', note: '付け替えとの同時は割引' },
                { name: 'ネイルケアのみ', price: '4,400', note: 'ファイル・甘皮・保湿' },
                { name: 'ハンドパック', price: '1,100', note: 'オプション' },
              ],
            },
            {
              category: 'フット',
              items: [
                { name: 'フットジェル（ワンカラー）', price: '6,600', note: '足爪10本' },
                { name: 'フットケア＋ジェル', price: '8,800', note: 'ケア込み' },
                { name: 'フットオフ', price: '3,300', note: '' },
              ],
            },
            {
              category: 'アート・オプション',
              items: [
                { name: 'ニュアンスアート', price: '＋1,100〜', note: '1本あたり' },
                { name: 'ストーン盛りアート', price: '＋1,650〜', note: '1本あたり' },
                { name: 'フィルイン（リベース）', price: '6,600〜', note: 'ベース残し付け替え' },
              ],
            },
          ].map(cat => (
            <div key={cat.category} style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '12px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '16px', fontFamily: "'Cormorant Garamond', serif", borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                {cat.category.toUpperCase()}
              </h3>
              <div className="grid-2-menu">
                {cat.items.map(item => (
                  <div key={item.name} style={{ background: 'var(--surface)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px', border: '1px solid var(--border2)' }}>
                    <div>
                      <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 300 }}>{item.name}</div>
                      {item.note && <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '4px' }}>{item.note}</div>}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--accent)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond', serif" }}>¥{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background: 'var(--blush)', padding: '24px', border: '1px solid var(--border)', marginTop: '24px' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 2 }}>
              ※ 表示価格はすべて税込みです。<br />
              ※ 爪の長さ・状態・デザインの複雑さにより変動する場合があります。<br />
              ※ 詳細はカウンセリング時にご確認ください。
            </p>
          </div>
        </main>
      )}

      {/* ── INFO TAB ── */}
      {tab === 'info' && (
        <main className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '12px' }}>SALON INFO</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>サロン情報・アクセス</h2>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)', margin: '20px auto 0' }} />
          </div>
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              {[
                { label: 'サロン名', value: 'NailSalon AUVÉ（ネイルサロン オーヴェ）' },
                { label: 'スタッフ', value: 'MIZUKI' },
                { label: '住所', value: '〒810-0041 福岡県福岡市中央区大名1丁目10−33 東峰マンション大名 505号室' },
                { label: '最寄り駅', value: '地下鉄空港線「赤坂」駅 徒歩5分 / 天神駅 徒歩10分' },
                { label: '電話', value: '092-406-1707' },
                { label: '営業時間', value: '11:00 〜 21:00' },
                { label: '定休日', value: '水曜日' },
                { label: '予約方法', value: '完全予約制（電話・LINE・ステキナ）' },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', gap: '24px', padding: '14px 0', borderBottom: '1px solid var(--border2)' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.2em', minWidth: '80px', paddingTop: '3px' }}>{r.label}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', wordBreak: 'break-all', fontWeight: 300 }}>{r.value}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ width: '100%', height: '300px', background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px', opacity: 0.5 }}>📍</div>
                  <a
                    href="https://maps.google.com/?q=福岡市中央区大名1-10-33"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.1em', fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Google マップで開く
                  </a>
                </div>
              </div>
              <div style={{ marginTop: '20px', background: 'var(--surface)', padding: '24px', border: '1px solid var(--border2)' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '10px', fontFamily: "'Cormorant Garamond', serif" }}>ACCESS</div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 2 }}>
                  地下鉄空港線「赤坂」駅より徒歩約5分。<br />
                  大名エリアの東峰マンション大名 505号室。<br />
                  初めてのお客様はお気軽にお電話くだささち
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ── RESERVE TAB ── */}
      {tab === 'reserve' && (
        <main className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '12px' }}>RESERVATION</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>ご予約</h2>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)', margin: '20px auto 0' }} />
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '20px' }}>完全予約制のため、事前のご予約をお願いしております。</p>
          </div>
          <div className="contact-grid">
            <div style={{ background: 'var(--surface)', padding: '40px 32px', border: '1px solid var(--border2)', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '16px', opacity: 0.6 }}>📞</div>
              <h3 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'var(--text)', marginBottom: '12px', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                お電話でご予約
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.9 }}>
                ご希望の日時・メニューをお電話にてお伝えください。
              </p>
              <a
                href="tel:092-406-1707"
                style={{
                  display: 'block',
                  background: 'var(--accent)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '14px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  letterSpacing: '0.1em',
                  fontFamily: "'Cormorant Garamond', serif",
                  wordBreak: 'break-all',
                }}
              >
                092-406-1707
              </a>
              <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '10px' }}>
                営業時間 11:00〜21:00（水曜定休）
              </p>
            </div>
            <div style={{ background: 'var(--surface)', padding: '40px 32px', border: '1px solid var(--border2)', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '16px', opacity: 0.6 }}>💬</div>
              <h3 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'var(--text)', marginBottom: '12px', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                ステキナでオンライン予約
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.9 }}>
                24時間いつでも予約可能。ご都合の良い時間帯にどうぞ。
              </p>
              <a
                href="https://stekina.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  textAlign: 'center',
                  padding: '14px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  fontFamily: "'Cormorant Garamond', serif",
                  whiteSpace: 'nowrap',
                }}
              >
                STEKINA で予約する
              </a>
            </div>
          </div>
          <div style={{ marginTop: '48px', background: 'var(--blush)', padding: '32px', border: '1px solid var(--border)' }}>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px', fontFamily: "'Cormorant Garamond', serif" }}>NOTES</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'ご予約の際はご希望のメニューとご希望日時をお知らせください',
                '初めてのお客様も大歓迎です。お気軽にご連絡ください',
                'キャンセルは前日21時までにご連絡をお願いいたします',
                '参考画像をお持ちの方はご来店時にご提示ください（InstagramのスクリーンショットなどOKです）',
              ].map(item => (
                <li key={item} style={{ fontSize: '13px', color: 'var(--text-muted)', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '48px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 300, letterSpacing: '0.35em', color: 'var(--text)', fontStyle: 'italic', marginBottom: '8px' }}>AUVÉ</div>
        <div style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'var(--text-dim)', marginBottom: '12px' }}>NAIL SALON · FUKUOKA</div>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
          〒810-0041 福岡市中央区大名1-10-33 東峰マンション大名 505｜TEL: 092-406-1707
        </p>
        <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '16px' }}>© 2026 NailSalon AUVÉ All rights reserved.</p>
      </footer>
    </div>
  )
}
