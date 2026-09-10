import fontforge

def fix_diyanet_gpos(input_font_path, output_font_path):
    print(f"Font yükleniyor: {input_font_path}")
    font = fontforge.open(input_font_path)

    # 1. Eski sorunlu GPOS tablolarını temizle
    for lookup in font.gpos_lookups:
        font.removeLookup(lookup)

    # 2. Yeni GPOS Mark-to-Base tablosu ve alt tablosunu oluştur
    lookup_name = "'mark' Mark Positioning in Arabic lookup"
    subtable_name = "'mark' Mark Positioning in Arabic subtable"
    
    font.addLookup(lookup_name, "gpos_mark2base", (), (("mark", (("arab", ("dflt")),)),))
    font.addLookupSubtable(lookup_name, subtable_name)

    # 3. Harekelerin (Mark) bağlama noktası olan Top Anchor kuralını tanımla
    # U+0670 (Çeker), U+08D6 (Ayn Durağı), U+0653 (Med), U+064B-U+0652 (Standart harekeler)
    marks_unicode = [0x0670, 0x08D6, 0x0653, 0x064B, 0x064C, 0x064D, 0x064E, 0x064F, 0x0650, 0x0651, 0x0652]

    print("Harekeler ve vakıf işaretleri harf merkezlerine kilitleniyor...")

    for glyph in font.glyphs():
        if glyph.unicode < 0:
            continue

        x_min, y_min, x_max, y_max = glyph.boundingBox()
        anchor_x = (x_min + x_max) / 2
        # Eğer karakter bir hareke veya vakıf işaretiyse (Mark)
        if glyph.unicode in marks_unicode:
            # İşaretin alt-orta noktasına 'Top' türünde Mark anchor ekle
            glyph.addAnchorPoint("Top", "mark", anchor_x, y_min)
        
        # Eğer karakter temel bir Arapça harf ise (Base)
        elif 0x0621 <= glyph.unicode <= 0x064A or 0x0671 <= glyph.unicode <= 0x06D3:
            # Harfin üst-orta noktasına 'Top' türünde Base mark anchor ekle
            glyph.addAnchorPoint("Top", "base", anchor_x, y_max)

    # 4. OpenType CFF/TTF olarak yeniden paketle
    print(f"Düzeltilmiş font kaydediliyor: {output_font_path}")
    font.generate(output_font_path, flags=("opentype",))
    font.close()
    print("İşlem başarıyla tamamlandı!")

# Dosya yollarınızı buraya yazın:
fix_diyanet_gpos("./assets/fonts/KuranKerimFontAbay.ttf", "./assets/fonts/KuranKerimFontAbay_fixed.ttf")